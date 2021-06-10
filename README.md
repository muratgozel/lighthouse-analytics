# lighthouse-analytics
Analytics services wrapper for javascript apps.

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
<script src="https://cdn.jsdelivr.net/npm/event-emitter-object@4/dist/event-emitter-object.iife.js" crossorigin type="text/javascript"></script>
<script src="https://unpkg.com/visibility-state-listener@2/dist/visibility-state-listener.iife.js" crossorigin type="text/javascript"></script>
<script src="https://unpkg.com/basekits@1/dist/basekits.iife.js" crossorigin type="text/javascript"></script>

<script src="https://unpkg.com/basekits@1/dist/lighthouse-analytics.iife.js" crossorigin type="text/javascript"></script>
```
but there are lots of other options. See distribution report below.

## Use
Initiate the client:
```js
const {LighthouseAnalytics, GoogleAnalytics} = require('lighthouse-analytics')
// init with default options
const analytics = new LighthouseAnalytics({
  trackVisibility: true,
  collectReferrer: true
})
```

### Context
Set user and app context as some analytics services require:
```js
analytics.setUser({
  id: ''
})
analytics.setApp({
  name: null,
  version: null,
  id: null
})
```

### Services
Add third party analytics services you would like to use:
```js
const ga = GoogleAnalytics({
  property: 'UA-123456789-X'
})
analytics.newService(ga).then(function() {
  // service is ready!
})
```

### Send Events
After services are ready you can start sending activities:
```js
analytics.newActivity('SCREEN', {title: 'Homepage'})
```

Pre-defined activities works seamlessly with third party services. Just send the right parameters:
```js
analytics.newActivity('SCREEN', {title: 'Homepage', url: location.href, path: '/'})
analytics.newActivity('EXCEPTION', {error: new Error('Ov no!')})
analytics.newActivity('SHARE', {channel: 'Twitter'})
analytics.newActivity('SEARCH', {query: 'something'})
analytics.newActivity('SIGNIN', {method: 'Apple'})
analytics.newActivity('SIGNUP', {method: 'Google'})
analytics.newActivity('TIMING', {name: 'Initial Render', value: 1200}) // in miliseconds
```

Custom events are also supported and relies on the value parameter:
```js
analytics.newActivity('SOMETHING', {value: 'some value.'})
```

#### Example use case: Measuring Reading
When user completes reading some content. It is possible with [readometer](https://github.com/muratgozel/readometer).
```js
const meter = new Readometer()

meter.on('progress', function(progress) {
  console.log('User read ' + progress + ' percent of the text.')

  if (progress >= 75) {
    analytics.newActivity('read', {
      value: 'My Article', // required
    })
  }
})

meter.start( document.getElementById('sample1'), 'en' )
```

### Internal Events
Lighthouse has its own [event-emitter](https://github.com/muratgozel/event-emitter-object) integrated and emits the following internal events for the developer:
```js
// if trackVisibility option set to true
analytics.on('visibility', function(value) {
  // value is either "visible" or "hidden"
})

// whenever a new activity registered
analytics.on('activity', function(activity, session) {

})
```

### What Actually Happens When User Visits Your Site/App
First of all, Lighthouse uses only local storage of the visitor's browser/device. There is no cookie created or used by Lighthouse.

Identification across visits happen by checking the identifier inside the local storage.

Client may read the following data of the visitor:
1. `document.referrer`
2. Tab/window visibility state (Through [visibility-state-listener](https://github.com/muratgozel/visibility-state-listener))

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "lighthouse-analytics.amd.js (14.15 KB)",
  "lighthouse-analytics.amd.polyfilled.js (32.83 KB)",
  "lighthouse-analytics.cjs.js (14.16 KB)",
  "lighthouse-analytics.cjs.polyfilled.js (32.87 KB)",
  "lighthouse-analytics.es.js (13.95 KB)",
  "lighthouse-analytics.es.polyfilled.js (32.66 KB)",
  "lighthouse-analytics.iife.js (14.16 KB)",
  "lighthouse-analytics.iife.polyfilled.js (32.83 KB)",
  "lighthouse-analytics.umd.js (14.50 KB)",
  "lighthouse-analytics.umd.polyfilled.js (33.18 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "9",
  "ios": "6",
  "opera": "73",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
