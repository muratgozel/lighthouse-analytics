import EventEmitter from 'event-emitter-object'
import localStore from 'local-storage-pro'
import { nanoid as nanoidunsecure } from 'nanoid/non-secure'
import createVisibilityStateListener from 'visibility-state-listener'
import {typekit, objectkit, validationkit} from 'basekits'

function LighthouseAnalytics(opts = {}) {
  EventEmitter.call(this, {})

  this.window = opts.window || (typeof window == 'undefined' ? undefined : window)
  this.document = opts.document || (typeof document == 'undefined' ? undefined : document)

  this.memory = {events: [], referrer: null}

  this.isBusy = false
  this.storageKeys = {
    id: 'LA_ID',
    userTimestamp: 'LA_USER_TIMESTAMP',
    sessionTimestamp: 'LA_SESSION_TIMESTAMP'
  }

  // inactivity (closed window) of sessionLifetime will terminate the last session
  this.sessionLifetime = 1800
  // unique browser identifier
  this.identify()
  // context is the data user has across events
  this.context = {id: null, firstVisit: false}

  // track switches to another window/tab
  this.visibilityState = 'visible'
  this.listenVisibilityChanges()

  this.timer = null
  this.startTimer()

  this.queue = []
  this.services = []
}

LighthouseAnalytics.prototype = Object.create(EventEmitter.prototype)
LighthouseAnalytics.prototype.constructor = LighthouseAnalytics

LighthouseAnalytics.prototype.identify = function identify() {
  // check browser identifier
  const existingID = localStore.getItem(this.storageKeys.id)
  if (existingID) {
    this.updateContext({id: existingID})
  }
  else {
    const newID = nanoidunsecure()
    this.updateContext({id: newID})
    localStore.setItem(this.storageKeys.id, newID)
  }

  // check timestamps
  const now = this.getTimestamp()
  const userTimestamp = localStore.getItem(this.storageKeys.userTimestamp)
  if (validationkit.isEmpty(userTimestamp)) {
    localStore.setItem(this.storageKeys.userTimestamp, now)
    this.updateContext({firstVisit: true})
  }

  const sessionTimestamp = localStore.getItem(this.storageKeys.sessionTimestamp)
  if (validationkit.isEmpty(sessionTimestamp)) {
    localStore.setItem(this.storageKeys.sessionTimestamp, now)
  }
  else {
    if (this.getTimeDiff(now, sessionTimestamp) > this.sessionLifetime) {
      localStore.setItem(this.storageKeys.sessionTimestamp, now)
    }
  }

  if (validationkit.isNotEmpty(this.document)) {
    this.memory.referrer = this.document.referrer
  }
}

LighthouseAnalytics.prototype.listenVisibilityChanges = function listenVisibilityChanges() {
  const self = this
  const listener = createVisibilityStateListener({
    window: this.window,
    document: this.document
  })

  listener.start()

  listener.emitter.on('update', function() {
    const newState = listener.getState()
    if (newState != self.visibilityState) {
      self.visibilityState = newState
      self.event('visibilityChange', {value: self.visibilityState})
      self.emit('visibilityChange', self.visibilityState)
    }
  })
}

LighthouseAnalytics.prototype.getVisibilityState = function getVisibilityState() {
  return this.visibilityState
}

LighthouseAnalytics.prototype.setContext = function setContext(obj) {
  if (typekit.isObject(obj)) this.context = obj
  return this
}

LighthouseAnalytics.prototype.updateContext = function updateContext(obj) {
  if (typekit.isObject(obj)) this.context = Object.assign({}, this.context, obj)
  return this
}

LighthouseAnalytics.prototype.install = function install() {
  return Promise
    .all(
      this.services.map(
        obj => obj.install ? obj.install(this) : Promise.resolve()
      )
    )
}

LighthouseAnalytics.prototype.addService = function addService(obj) {
  this.services.push(obj)
  return this
}

LighthouseAnalytics.prototype.startTimer = function startTimer() {
  this.timer = setInterval(function() {
    this.emit('online')
    this.event('online', {})
  }.bind(this), 15000)
}

LighthouseAnalytics.prototype.clearTimer = function clearTimer() {
  if (validationkit.isNotEmpty(this.timer)) {
    clearInterval(this.timer)
    this.timer = null
  }
  return this
}

LighthouseAnalytics.prototype.isFirstVisit = function isFirstVisit() {
  return this.context.firstVisit
}

LighthouseAnalytics.prototype.event = function event(name, params) {
  this.addToQueue({name: name, params: params})
  return this
}

LighthouseAnalytics.prototype.addToQueue = function addToQueue(obj) {
  this.queue.push(obj)
  this.processQueue()
  return true
}

LighthouseAnalytics.prototype.processQueue = function processQueue() {
  if (this.isBusy === true) return undefined

  this.isBusy = true
  const obj = this.queue.shift()
  this.processEvent(obj.name, obj.params)
  this.isBusy = false

  if (this.queue.length > 0) this.processQueue()
  return true
}

LighthouseAnalytics.prototype.processEvent = function processEvent(name, params) {
  // validate
  const evName = typekit.isString(name) && typekit.isNotEmpty(name) ? name : undefined
  const evParams = typekit.isObject(params)
    ? Object.assign({}, this.context, params)
    : undefined
  if (!evName) {
    this.emit('error', ['INVALID_EVENT_NAME', new Error('INVALID_EVENT_NAME'), {name: evName}])
    return;
  }

  // create timestamps and add event to the session memory
  const timestamp = this.getTimestamp()
  const lastEventTimestamp = objectkit.getProp(this.getLastEvent(), '_timestamp', timestamp)
  const timeDiffFromLastEvent = this.getTimeDiff(timestamp, lastEventTimestamp)
  const lastSameEventTimestamp = objectkit.getProp(this.getEvent(evName), '_timestamp', timestamp)
  const timeDiffFromSameEvent = this.getTimeDiff(timestamp, lastSameEventTimestamp)
  const fullEvent = {
    name: evName,
    params: evParams,
    _timestamp: timestamp,
    _timeDiffFromLastEvent: timeDiffFromLastEvent,
    _timeDiffFromSameEvent: timeDiffFromSameEvent
  }
  this.memory.events.push(fullEvent)

  if (this.services.length === 0) {
    this.emit('error', ['NO_SERVICE_INSTALLED', new Error('NO_SERVICE_INSTALLED')])
    return;
  }

  // send the event to the services
  function sendEventToService(Service) {
    return Service.event(evName, evParams)
  }
  Promise.all( this.services.map(sendEventToService.bind(this)) )

  return;
}

LighthouseAnalytics.prototype.getEvent = function getEvent(name) {
  const len = this.memory.events.length
  if (len < 1) return undefined
  for (let i = len - 1; i >= 0; i--) {
    if (this.memory.events[i].name == name) {
      return this.memory.events[i]
    }
  }
  return undefined
}

LighthouseAnalytics.prototype.getLastEvent = function getLastEvent() {
  const len = this.memory.events.length
  return len > 0 ? this.memory.events[len - 1] : undefined
}

LighthouseAnalytics.prototype.getTimestamp = function getTimestamp() {
  return Date.now()
}

LighthouseAnalytics.prototype.getTimeDiff = function getTimeDiff(d1, d2, precision = 'seconds') {
  const num = precision == 'seconds' ? 1000 : 1
  return Math.floor((d1 - d2) / num)
}

export default LighthouseAnalytics
