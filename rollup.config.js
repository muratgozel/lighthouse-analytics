const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'basekits', 'event-emitter-object', 'local-storage-pro', 'visibility-state-listener'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/lighthouse-analytics.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/lighthouse-analytics.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/lighthouse-analytics.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/lighthouse-analytics.iife' + suffix + '.js',
      name: 'LighthouseAnalytics',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject',
        'local-storage-pro': 'LocalStoragePro',
        'visibility-state-listener': 'VisibilityStateListener'
      }
    },
    {
      format: 'umd',
      file: 'dist/lighthouse-analytics.umd' + suffix + '.js',
      name: 'LighthouseAnalytics',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject',
        'local-storage-pro': 'LocalStoragePro',
        'visibility-state-listener': 'VisibilityStateListener'
      }
    }
  ],
  plugins: [
    nodeResolve({browser: true}),
    commonjs(),
    babel(),
    terser()
  ]
}
