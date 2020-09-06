# lighthouse-analytics
Extensible, lightweight, cookieless and privacy focused analytics library for javascript apps.

**Lighthouse Analytics** client has a simple and flexible API interface which channels input to some other analytics services.

![NPM](https://img.shields.io/npm/l/lighthouse-analytics)
[![npm version](https://badge.fury.io/js/lighthouse-analytics.svg)](https://badge.fury.io/js/lighthouse-analytics)
![npm bundle size](https://img.shields.io/bundlephobia/min/lighthouse-analytics)
![npm](https://img.shields.io/npm/dy/lighthouse-analytics)

## Install
```sh
npm install lighthouse-analytics
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const {LighthouseAnalytics} = require('lighthouse-analytics')
```

or via script tag:

```html
<script src="https://unpkg.com/local-storage-pro@1/dist/local-storage-pro.iife.js" crossorigin type="text/javascript"></script>
<script src="https://unpkg.com/state-manager-object@1/dist/state-manager-object.iife.js" crossorigin type="text/javascript"></script>
<script src="https://unpkg.com/basekits@1/dist/basekits.iife.js" crossorigin type="text/javascript"></script>
<script src="https://unpkg.com/event-emitter-object@1/dist/event-emitter-object.iife.js" crossorigin type="text/javascript"></script>

<script src="https://unpkg.com/basekits@1/dist/lighthouse-analytics.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
Initiate the client:
```js
const {LighthouseAnalytics, LAGoogleAnalytics} = require('lighthouse-analytics')
const lighthouse = new LighthouseAnalytics()
```

### Context
Lighthouse carry a context of the user and app across interactions. The developer may set/update this context any time:
```js
lighthouse.setContext({appName: 'Sample App'})
// later on:
lighthouse.updateContext({userID: 1234})
```

### Services
Services are analytics servers that parses the data came from Lighthouse client and sends it to the server in the appropriate format. Lighthouse is useless without services.

Here is we add Google Analytics service as an example:
```js
const ga = new LAGoogleAnalytics({id: 'YOUR_GOOGLE_ANALYTICS_PROPERTY_ID'})
lighthouse.addService(ga)
```

The developer may add as many services as it wants. After adding services, installation is required:
```js
lighthouse
  .install()
  .then(function() {
    console.log('all services installed and ready to send events.')
  })
```

### Send Events
The developer may create any type of event with any parameters. However, installed services may not be able to take all the parameters you specified while sending the event.

#### view
When user views something. (screen, product etc.)
```js
lighthouse.event('view', {
  category: 'screen', // required
  title: 'Home', // required
  path: '/',
  id: 'homepage',
  url: ''
})
```
```js
lighthouse.event('view', {
  category: 'product', // required
  title: 'Sample Product', // required
  id: ''
})
```

#### time
When something took time to complete.
```js
lighthouse.event('time', {
  category: 'performance', // required
  name: 'stylesheetsLoad', // required
  value: 0 // required, in miliseconds
})
```

#### error
When app raises an error.
```js
lighthouse.event('error', {
  message: '', // required
  code: '',
  debug: new Error('asd'),
  level: '' // warning, fatal etc. anything you want.
})
```

#### share
When user shares some content.
```js
lighthouse.event('share', {
  channel: 'fb', // required, fb, twitter, email etc.
  title: 'About Section', // required
  id: '',
  url: '' // if content is a complete page
})
```

#### click
When user clicks something.
```js
lighthouse.event('click', {
  channel: 'fb', // required, fb, twitter, email etc.
  title: 'About Section', // required
  id: '',
  url: '' // if content is a complete page
})
```

#### search
When user searches something.
```js
lighthouse.event('search', {
  term: '' // required
})
```

#### read
When user completes reading some content. It is possible with [readometer](https://github.com/muratgozel/readometer).
```js
const meter = new Readometer()
meter.on('progress', function(progress) {
  console.log('User read ' + progress + ' percent of the text.')
  if (progress >= 75) {
    lighthouse.event('read', {
      title: 'About Section', // required
      percent: progress
    })
  }
})
meter.start( document.getElementById('sample1'), 'en' )
```

### Internal Events
Lighthouse has its own [event-emitter](https://github.com/muratgozel/event-emitter-object) integrated and emits the following internal events for the developer:
```js
lighthouse.on('visibilityChange', function(visibilityState) {
  // visibilityState is "visible" or "hidden"
})
lighthouse.on('online', function() {
  // trigged every 30 seconds independent from the visibility state.
})
lighthouse.on('error', function(name, debug, params) {
  // name is an error identifier
  // debug is the native js error object
  // params is an optional object that contains properties to better understand error

  // INVALID_EVENT_NAME, Error, {name: eventName}
  // NO_SERVICE_INSTALLED, Error
})
```

### What Actually Happens When User Visits Your Site/App
First of all, Lighthouse uses only local storage of the visitor's browser/device. There is no cookie created or used by Lighthouse. It's serverless by design.

Identification across visits happen by checking the identifier inside the local storage.

Client reads the following data of the visitor:
1. `document.referrer`
2. Tab/window visibility state (Through [visibility-state-listener](https://github.com/muratgozel/visibility-state-listener))

It listens for **visibility changes** (if user switched to another tab or window) to better measure time based events.

There is also a **time interval** which runs every 15 seconds to indicate user's online time.

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "lighthouse-analytics.amd.js (9.71 KB)",
  "lighthouse-analytics.amd.polyfilled.js (36.05 KB)",
  "lighthouse-analytics.cjs.js (9.73 KB)",
  "lighthouse-analytics.cjs.polyfilled.js (36.10 KB)",
  "lighthouse-analytics.es.js (9.37 KB)",
  "lighthouse-analytics.es.polyfilled.js (35.73 KB)",
  "lighthouse-analytics.iife.js (9.66 KB)",
  "lighthouse-analytics.iife.polyfilled.js (36.00 KB)",
  "lighthouse-analytics.umd.js (10.11 KB)",
  "lighthouse-analytics.umd.polyfilled.js (36.45 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.array.map",
  "es.function.name",
  "es.object.assign",
  "es.promise",
  "web.timers",
  "es.array.filter",
  "es.array.join",
  "es.array.reduce",
  "es.object.keys",
  "es.regexp.exec",
  "es.string.match"
]
// based on the targets:
{
  "android": "83",
  "chrome": "49",
  "edge": "18",
  "firefox": "52",
  "ie": "9",
  "ios": "9.3",
  "opera": "68",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
