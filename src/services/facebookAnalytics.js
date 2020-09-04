// NOT READY

function LighthouseServiceFacebookAnalytics() {
  this.appID = null
  this.apiVersion = null
  this.userID = null
  this.locale = 'en_US'
  this.ready = false
}

LighthouseServiceFacebookAnalytics.prototype.setAppID = function setAppID(id) {
  this.appID = id
}

LighthouseServiceFacebookAnalytics.prototype.setAPIVersion = function setAPIVersion(v) {
  this.apiVersion = v
}

LighthouseServiceFacebookAnalytics.prototype.setUserID = function setUserID(id) {
  this.userID = id
}

LighthouseServiceFacebookAnalytics.prototype.setLocale = function setLocale(locale) {
  if (!locale || locale.length < 2) return;
  this.locale = locale.slice(0, 2).toLowerCase()
}

LighthouseServiceFacebookAnalytics.prototype.screenView = function screenView(lighthouse, params) {
  return new Promise(function(resolve, reject) {
    FB.AppEvents.logPageView()
    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.timingComplete = function timingComplete(lighthouse, params) {
  const self = this

  return new Promise(function(resolve, reject) {
    if (typeof params.duration != 'number' || typeof params.name != 'string') {
      console.log('Invalid parameters for timingComplete', params)
      return resolve()
    }

    const opts = {
      name: params.name,
      value: params.duration,
    }
    if (params.appName) opts.event_label = params.appName
    if (params.eventLabel) opts.event_label = params.eventLabel

    FB.AppEvents.logEvent('timing_complete', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.clickedPhoneNum = function clickedPhoneNum(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      value: params.value
    }

    FB.AppEvents.logEvent('CLICKED_PHONE_NUM', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.clickedEmail = function clickedEmail(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      value: params.value
    }

    FB.AppEvents.logEvent('CLICKED_EMAIL', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.sharedOnFacebook = function sharedOnFacebook(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      url: params.url,
      title: params.title
    }

    FB.AppEvents.logEvent('SHARED_ON_FB', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.sharedOnLinkedin = function sharedOnLinkedin(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      url: params.url,
      title: params.title
    }

    FB.AppEvents.logEvent('SHARED_ON_IN', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.copiedURL = function copiedURL(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      url: params.url,
      title: params.title
    }

    FB.AppEvents.logEvent('COPIED_URL', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.printedPage = function printedPage(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      url: params.url,
      title: params.title
    }

    FB.AppEvents.logEvent('PRINTED_PAGE', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.getDirections = function getDirections(lighthouse, params) {
  const self = this
  return new Promise(function(resolve, reject) {
    const opts = {
      lat: params.lat,
      lng: params.lng
    }

    FB.AppEvents.logEvent('GET_DIRECTIONS', null, opts)

    return resolve()
  })
}

LighthouseServiceFacebookAnalytics.prototype.install = function install() {
  const self = this

  if (!self.appID || !self.apiVersion) {
    return Promise.resolve(null)
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId: self.appID,
      cookie: true,
      xfbml: true,
      version: self.apiVersion
    })

    if (self.userID) {
      FB.AppEvents.setUserID(self.userID)
    }

    self.ready = true
  }

  const url = 'https://connect.facebook.net/' + self.locale + '/sdk.js'
  return loadScript(url, 'facebook-jssdk')
}

module.exports = LighthouseServiceFacebookAnalytics
