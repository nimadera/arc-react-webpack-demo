import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

const clientConfig = () => ({
    entry: './src/app-client',
    output: {
        path: __dirname + '/STATIC',
        filename: 'client.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loaders: ExtractTextWebpackPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            }),
            include: path.join(__dirname, 'src/components')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css'),
        new HtmlWebpackPlugin()
    ]
});

const serverConfig = () => ({
    entry: './src/app-server',
    output: {
        path: __dirname + '/STATIC',
        filename: 'server.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loaders: ExtractTextWebpackPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            }),
            include: path.join(__dirname, 'src/components')
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css')
    ],
    target: 'node',
    externals: [nodeExternals()]
});

const getFlaggedConfigs = () => [clientConfig(), serverConfig()];

module.exports = getFlaggedConfigs;