const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        filename: 'biometric.js',
        path: path.resolve(__dirname),
    },
    mode: 'production'
};