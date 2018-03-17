const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['whatwg-fetch', './src/index.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    }
};
