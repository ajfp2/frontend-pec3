const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: '/dist/',
        clean: true
        //publicPath: "http://localhost:3000/build/",
        //crossOriginLoading: 'anonymous'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                   test: /\.html$/,
                   loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        //new cleanPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: 'index.html', title:'Dev-Ej4'})
        
    ]
};