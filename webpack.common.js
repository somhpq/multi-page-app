const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react','react-dom','react-bootstrap'];
module.exports = {
    entry:{
        parts:'./src/parts/index.js',
        products: './src/products/index.js',
        vendor: VENDOR_LIBS,
    },
    module:{
        rules:[
            // babel
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // image
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
        //chunkFilename: '[name].chunkhash.bundle.js',
    },
    optimization:{
        //runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // test: new RegExp(
                    //     `[\\/]node_modules[\\/](VENDOR_LIBS.join('|'))[\\/]`
                    // ),
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                }
            }
        }
    },
    // devServer: {
    //     contentBase: path.join(__dirname, './content'),
    //     port: 3000,
    //     publicPath: 'http://localhost:3000/dist/',
    //     hotOnly: true,
    //     open: 'Chrome',
    //     openPage: 'index.html'
    // },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: '../index.html',
        })
    ],
}
