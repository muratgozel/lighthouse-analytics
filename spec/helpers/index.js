const {JSDOM} = require('jsdom')

global.window = new JSDOM('', {url: 'https://frondjs.org'}).window
global.document = global.window.document
global.navigator = global.window.navigator
//window.fetch = () => {json: () => ''}
