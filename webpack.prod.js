const
    merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    webpack = require('webpack');

module.exports = merge(common, {
                        mode: 'production',
                        devtool: false,
                    });