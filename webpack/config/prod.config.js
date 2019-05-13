const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const dotenv = require('dotenv');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const envConfig = dotenv.parse(fs.readFileSync('environment/production.env'));

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            ...envConfig
        }),
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi]
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$|\.json$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            filename: '[path].gz[query]',
            deleteOriginalAssets: true,
            algorithm: "gzip",
        }),
        //new BundleAnalyzerPlugin()
    ]
});