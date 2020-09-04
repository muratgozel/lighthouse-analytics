const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
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
    },
    {
      format: 'umd',
      file: 'dist/lighthouse-analytics.umd' + suffix + '.js',
      name: 'LighthouseAnalytics',
    }
  ],
  plugins: [
    nodeResolve({browser: true}),
    commonjs(),
    babel(),
    terser()
  ]
}
