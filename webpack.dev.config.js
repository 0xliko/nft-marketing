const webpack = require('webpack')
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var defaultInclude = path.join(__dirname, '.', 'src');
var BUILD_DIR = path.join(__dirname, '..', '..', 'build');
module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?|.tsx?$/,
                use: [{ loader: 'babel-loader' }],
                include: defaultInclude

            },
            { test: /\.(svg)$/, use: 'file-loader'},
            {
                test: /\.(jpe?g|png|gif|bmp|mp3|mp4|ogg|wav)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'css-modules-typescript-loader' },
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }]
            }
            /*{
                test: /\.svg$/,
                use: ['@svgr/webpack'],
                include: defaultInclude
            }*/
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.join(__dirname, "src/assets", "favicon.ico"),
            title: 'Skeleton',
            inject: 'body',
            template: path.join(__dirname, "src/assets", "index.html"),
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    ],
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
        publicPath: '/',
        pathinfo: true
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js",".jsx",".scss"],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "os": false,
            "https":false,
            "http":false,
            "crypto":false,
            "buffer":false,
            "process":false,
            "assert":false
        },
        alias: {
            process: "process/browser"
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        port:3000,
        hot: true,
        historyApiFallback:true,
        after: function () {
            // openBrowser(`http://localhost:${config.devPort}`)
        }
    }
};