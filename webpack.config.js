const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const envConfig = dotenv.parse(fs.readFileSync('environment/shared.env'));

module.exports = {
    mode: 'none',
    entry: './src/index.tsx',
    output: {
        filename: '[id].[hash].bundle.js',
        sourceMapFilename: '[id].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            ...envConfig
        }),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            inject: false,
            appMountId: 'app',
            appMountHtmlSnippet: '<img class="app-spinner" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />',
            headHtmlSnippet: '<link rel="manifest" href="manifest.json" /><style>img.app-spinner { position: fixed; top: 50%; left: 50%; }</style>',
            bodyHtmlSnippet: '<noscript>Your browser does not support JavaScript!</noscript>',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, user-scalable=0'
                },
                {
                    name: 'description',
                    content: 'PWA application for testing.'
                },
                {
                    name: 'theme-color',
                    content: '#2196f3'
                }
            ],
        }),
        new CopyWebpackPlugin([
            {
                from: './webpack/scripts/workbox/service-worker.listeners.js'
            },
            {
                from: 'manifest.json'
            },
            {
                from: 'robots.txt'
            },
            {
                from: 'assets'
            },
        ]),
        new GenerateSW({
            skipWaiting: true,
            clientsClaim: true,
            importScripts: [
                'service-worker.listeners.js'
            ],
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://jsonplaceholder\.typicode\.com/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }),
    ],
    optimization: {
        runtimeChunk: 'multiple',
        splitChunks: {
            minSize: 400000,
            maxSize: 500000,
            cacheGroups: {
                vendor: {
                    test: /[\\\/]node_modules[\\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
};
