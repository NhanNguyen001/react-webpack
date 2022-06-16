const path = require('path');
const webpack = require('webpack');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.sa?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        static: path.resolve(__dirname, '../dist'),
    },
    devtool: 'eval-source-map'
});