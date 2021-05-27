import {typekit, objectkit, validationkit} from 'basekits'
import Scripter from 'dom-scripter'

export default function GoogleAnalytics(_opts={}) {
  if (typekit.isEmpty(_opts.property)) {
    throw new Error('Specify Google Analytics property.')
  }

  const scripter = Scripter.create()
  const config = {
    name: 'Google Analytics',
    property: _opts.property,
    userID: objectkit.getProp(_opts, 'userID', null),
    localEventNames: {
      SCREEN: 'screen_view',
      TIMING: 'timing_complete',
      EXCEPTION: 'exception',
      SHARE: 'share',
      SEARCH: 'search',
      SIGNIN: 'login',
      SIGNUP: 'sign_up'
    }
  }

  function init() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', config.property, {
      send_page_view: false,
      user_id: config.userID
    })

    const src = 'https://www.googletagmanager.com/gtag/js?id=' + config.property

    return scripter.injectjs(src, {
      id: 'lighthouse-service-google-analytics',
      location: 'headEnd'
    })
  }

  function send(activity, session) {
    const localName = objectkit.getProp(config.localEventNames, activity.name, activity.name)
    const localParams = {}

    if (activity.name == 'SCREEN') {
      const payload = {
        title: objectkit.getProp(activity.params, 'title', document.title),
        page_location: objectkit.getProp(activity.params, 'url', location.href),
        page_path: objectkit.getProp(activity.params, 'path', location.pathname)
      }
      window.gtag('config', config.property, payload)

      localParams.screen_name = objectkit.getProp(activity.params, 'title', document.title)
      if (session.app.name) localParams['app_name'] = session.app.name
      if (session.app.version) localParams['app_version'] = session.app.version
    }
    else if (activity.name == 'EXCEPTION') {
      localParams.description = activity.params.error.message
    }
    else if (activity.name == 'SHARE') {
      localParams.event_category = activity.params.channel
      localParams.event_label = objectkit.getProp(activity.params, 'url', location.href)
    }
    else if (activity.name == 'SEARCH') {
      localParams.event_category = 'engagement'
      localParams.event_label = activity.params.query
    }
    else if (activity.name == 'SIGNIN' || activity.name == 'SIGNUP') {
      localParams.event_category = 'engagement'
      localParams.event_label = activity.params.method
    }
    else {
      localParams.event_category = 'engagement'
      localParams.event_label = activity.params.value || ''
    }

    window.gtag('event', localName, localParams)
  }

  function disable() {
    window['ga-disable-' + config.property] = true
  }

  function enable() {
    window['ga-disable-' + config.property] = false
  }

  return {
    name: config.name,
    init: init,
    send: send,
    disable: disable,
    enable: enable
  }
}
