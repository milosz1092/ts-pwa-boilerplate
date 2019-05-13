const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');
const baseConfig = require('../../webpack.config');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('environment/development.env'));

module.exports = merge(baseConfig, {
    devtool: 'eval-source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            ...envConfig
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});