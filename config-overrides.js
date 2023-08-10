const { override, useBabelRc, disableEsLint } = require('customize-cra')
const path = require('path')

module.exports = override(useBabelRc(), disableEsLint())
