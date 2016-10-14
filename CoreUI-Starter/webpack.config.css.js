var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/style.css');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    entry: './src/assets/scss/style.scss',
    output: {
        path: path.join(__dirname, 'wwwroot', 'assets'),
        filename: 'bundle.sourcemap.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                  "style",
                  "css!sass")
            },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url', query: { limit: 25000 }, },

        ]
    },
    plugins: [
        extractCSS
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};