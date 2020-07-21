// cypress/plugins/index.js

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')

browserify.defaultOptions.browserifyOptions.plugin.unshift(['tsify', { project: './cypress/tsconfig.json' }])

const browserifyOptions = {
  typescript: require.resolve('typescript'),
}
const cucumberOptions = { ...browserify.defaultOptions }
const b = browserify(browserifyOptions)
const c = cucumber(cucumberOptions)

module.exports = on => {
  on('file:preprocessor', file => {
    if (file.filePath.includes('.feature')) {
      return c(file)
    }
    return b(file)
  })
}