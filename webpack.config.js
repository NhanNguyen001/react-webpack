const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return merge(
        {
            mode,
            entry: {
                vendor: ['react', 'react-dom', 'antd'],
                app: './src/index.jsx',
            },
            devServer: {
                hot: true,
                open: true
            },
            output: {
                path: path.resolve(__dirname, "dist"),
                filename: "[name].[contenthash].bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.less$/,
                        use: ['style-loader', 'css-loader', "less-loader"]
                    },
                    {
                        test: /\.svg$/,
                        use: [
                            {
                                loader: 'svg-url-loader',
                                options: {
                                    limit: 10000,
                                },
                            },
                        ],
                    },
                ]
            },
            resolve: {
                extensions: ['*', '.js', '.jsx'],
            },
            plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin({
                    // template: "./public/index.html",
                    // favicon: "./public/favicon.ico",
                    // new webpack.HotModuleReplacementPlugin()
                    template: path.resolve(__dirname, './public/index.html'),
                    favicon: path.resolve(__dirname, './public/favicon.ico')
                }),

            ]
        },
        modeConfiguration(mode)
    );
};