// keys.js

if (process.env.NODE_ENV === 'production') {
    // prod keys
    module.exports = require('./prod')
} else {
    // development keys
    module.exports = require('./dev')
}