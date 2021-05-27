import {create as createEventEmitter} from 'event-emitter-object'
import store from 'store/dist/store.modern'
import cuid from 'cuid'
import visibilityStateListener from 'visibility-state-listener'
import {typekit, objectkit, validationkit} from 'basekits'

export default function LighthouseAnalytics(_opts={}) {
  function Queue() {
    let items = {}
    let headIndex = 0
    let tailIndex = 0

    function enqueue(item) {
      items[tailIndex] = item
      tailIndex++
    }

    function dequeue() {
      const item = items[headIndex]
      delete items[headIndex]
      headIndex++
      return item
    }

    function peek() {
      return items[headIndex]
    }

    function length() {
      return tailIndex - headIndex
    }

    return {
      enqueue: enqueue,
      dequeue: dequeue,
      peek: peek,
      length: length
    }
  }

  const defaultOpts = {
    trackVisibility: true,
    collectReferrer: true
  }
  const now = Date.now()
  const opts = Object.assign({}, defaultOpts, _opts)
  const eventEmitter = createEventEmitter()
  const w = opts.window || (typeof window == 'undefined' ? undefined : window)
  const d = opts.document || (typeof document == 'undefined' ? undefined : document)
  const config = {
    storageKeys: {
      did: 'LA_DID'
    }
  }
  const services = []
  const activities = Queue()
  const session = {
    did: null,
    new: false,
    user: {id: null},
    app: {name: null, version: null, id: null}
  }

  identify()

  if (opts.trackVisibility) {
    session.currentVisibility = 'visible'

    visibilityStateListener.on('update', function(v) {
      session.currentVisibility = v

      eventEmitter.emit('visibility', [v])

      newActivity('VISIBILITY', {value: v})
    })

    visibilityStateListener.start()
  }

  function getTimeDiff(d1, d2, precision='seconds') {
    const num = precision == 'seconds' ? 1000 : 1
    return Math.floor((d1 - d2) / num)
  }

  function identify() {
    // check identifier
    let did = store.get(config.storageKeys.did)
    if (validationkit.isEmpty(did)) {
      session.new = true
      did = cuid()
      store.set(config.storageKeys.did, did)
    }

    session.did = did

    // check referrer
    if (opts.collectReferrer) {
      session.referrer = d.referrer
    }
  }

  function setUser(obj) {
    if (obj.hasOwnProperty('id')) {
      session.user.id = obj.id
    }
  }

  function setApp(obj) {
    Object.keys(session.app).map(function(name) {
      if (obj.hasOwnProperty(name)) {
        session.app[name] = obj[name]
      }
    })
  }

  function newActivity(name, params={}) {
    const timestamp = Date.now()
    const payload = {
      name: name,
      timestamp: timestamp,
      params: params
    }

    if (activities.length() === 0) {
      payload.firstVisitMaybe = session.new

      if (opts.collectReferrer) {
        payload.referrer = validationkit.isNotEmpty(session.referrer) ? session.referrer : null
      }
    }

    activities.enqueue(payload)

    if (services.length > 0) {
      services.map(service => service.send( activities.dequeue(), session ))
    }

    eventEmitter.emit('activity', [payload, session])

    return
  }

  function newService(service) {
    return services.push(service) && service.init()
  }

  return {
    on: eventEmitter.on,
    newActivity: newActivity,
    setUser: setUser,
    setApp: setApp,
    newService: newService
  }
}
