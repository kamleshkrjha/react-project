const path = require('path');
var config = {
    entry: './main.js',

    output: {
        path: '/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 9090
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;