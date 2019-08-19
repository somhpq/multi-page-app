// import merge from 'webpack-merge';
// import common from './webpack.common.js';
// import webpack from 'webpack';

// export default merge(common, {
//                         mode: 'development',
//                         devtool: 'eval-source-map',
//                     });

const
    merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    webpack = require('webpack');

module.exports = merge(common, {
                        mode: 'development',
                        devtool: 'eval-source-map',
                    });


