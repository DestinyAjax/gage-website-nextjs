const withCSS = require('@zeit/next-css')

module.exports = { 
    target: 'serverless',
    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
    }
}
module.exports = withCSS({/* my next config */}) 