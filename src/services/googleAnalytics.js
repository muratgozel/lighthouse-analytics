import {typekit, objectkit, validationkit} from 'basekits'
import scripter from 'dom-scripter'

function LAGoogleAnalytics(opts = {}) {
  // google analytics property id
  this.id = opts.id
  // user identifier if your app has membership system
  this.userID = opts.userID

  this.initOpts = {
    send_page_view: false
  }
  if (this.userID) this.initOpts.user_id = this.userID
  this.ready = false
  this.client = null
  this.scriptTagID = 'lighthouse-service-google-analytics'
  this.scriptURL = 'https://www.googletagmanager.com/gtag/js?id=' + this.id

  this.reservedEventNames = {
    screenView: 'screen_view',
    time: 'timing_complete',
    error: 'exception',
    share: 'share',
    search: 'search',
    login: 'login',
    signup: 'sign_up'
  }
  this.parameterReference = {
    screen_view: {
      params: ['screen_name', 'app_name', 'app_id', 'app_version', 'app_installer_id'],
      match: {
        title: 'screen_name',
        appName: 'app_name',
        appID: 'app_id',
        appVersion: 'app_version',
        appInstallerID: 'app_installer_id'
      },
      requiredParams: ['screen_name', 'app_name']
    },
    timing_complete: {
      params: ['name', 'value', 'event_category', 'event_label'],
      match: {
        name: 'event_category',
        category: 'name',
        value: 'value'
      },
      requiredParams: ['name', 'value']
    },
    exception: {
      params: ['description', 'fatal'],
      match: {
        debug: 'description'
      },
      requiredParams: ['description']
    },
    share: {
      params: ['method', 'content_id', 'content_type'],
      match: {
        channel: 'method',
        id: 'content_id'
      },
      requiredParams: ['method']
    },
    search: {
      params: ['term'],
      match: {
        term: 'term'
      },
      requiredParams: ['term']
    }
  }
}

LAGoogleAnalytics.prototype.install = function install(client) {
  const self = this
  self.client = client

  self.client.window.dataLayer = self.client.window.dataLayer || []
  self.client.window.gtag = function gtag() {
    dataLayer.push(arguments)
  }
  self.client.window.gtag('js', new Date())
  self.client.window.gtag('config', self.id, self.initOpts)

  return new Promise(function(resolve, reject) {
    scripter
      .inject(self.scriptURL, {
        id: self.scriptTagID,
        location: 'headEnd'
      })
      .then(function() {
        self.ready = true
        return resolve()
      })
      .catch(function(err) {
        self.client.emit('error', err)
        return resolve()
      })
  })
}

LAGoogleAnalytics.prototype.event = function event(evName, evParams = {}) {
  if (this.ready !== true) return;

  const localEventName = this.findLocalEventName(evName, evParams)

  // send page load event if possible
  if (localEventName == 'screen_view') {
    const pageLoadParams = this.generatePageLoadParams(evParams)
    if (typekit.isObject(pageLoadParams)) {
      this.client.window.gtag('config', this.id, pageLoadParams)
    }
  }

  const params = this.generateLocalParams(localEventName, evParams)
  if (typekit.isUndefined(params)) return;

  // validate params
  const hasReference = this.parameterReference.hasOwnProperty(localEventName)
  if (hasReference) {
    const reference = this.parameterReference[localEventName]
    if (reference.hasOwnProperty('requiredParams')) {
      const missing = reference.requiredParams.filter(function(param) {
        return params.hasOwnProperty(param) !== true
      })
      if (missing && missing.length > 0) {
        this.client.emit('error', [new Error('MISSING_PARAMS'), missing.join(',')])
        return;
      }
    }
  }

  this.client.window.gtag('event', localEventName, params)
}

LAGoogleAnalytics.prototype.findLocalEventName = function findLocalEventName(evName, evParams) {
  if (evName == 'view' && objectkit.getProp(evParams, 'category', '') == 'screen') {
    return this.reservedEventNames.screenView
  }
  return this.reservedEventNames.hasOwnProperty(evName)
    ? this.reservedEventNames[evName]
    : evName
}

LAGoogleAnalytics.prototype.generateLocalParams = function generateLocalParams(evName, evParams) {
  const kit = this.client.kit

  const hasReference = this.parameterReference.hasOwnProperty(evName)
  if (!hasReference && !evParams.hasOwnProperty('value')) {
    return undefined
  }

  if (!hasReference && evParams.hasOwnProperty('value')) {
    return Object.assign(
      {},
      {
        event_callback: function() {return;}
      },
      {
        event_label: evParams.value,
        event_category: 'engagement'
      }
    )
  }

  const reference = this.parameterReference[evName]
  // get params sent directly for google analytics
  const eventParams = typekit.isObject(evParams.googleAnalytics) ? evParams.googleAnalytics : {}
  // try to match client's params for google analytics
  const matchedParams = Object.keys(reference.match).reduce(function(memo, clientParam) {
    if (evParams.hasOwnProperty(clientParam)) {
      memo[ reference.match[clientParam] ] = evParams[clientParam]
    }
    return memo
  }, {})

  return Object.assign(
    {},
    {
      event_callback: function() {return;}
    },
    matchedParams,
    eventParams
  )
}

LAGoogleAnalytics.prototype.generatePageLoadParams = function generatePageLoadParams(evParams) {
  const kit = this.client.kit

  if (evParams.hasOwnProperty('path') && validationkit.isNotEmpty(evParams.path)) {
    const params = {
      page_path: evParams.path,
      page_title: evParams.title
    }
    if (validationkit.isNotEmpty(evParams.url)) params.page_location = evParams.url

    return params
  }

  return undefined
}

export default LAGoogleAnalytics
