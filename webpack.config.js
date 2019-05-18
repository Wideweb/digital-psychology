const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const argv = require('minimist')(process.argv.slice(2));

const defaultEnvironment = 'dev';
let environment = (argv.env || defaultEnvironment).toLowerCase();

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
		path: __dirname + '/dist',
		publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: environment === 'dev' ? 'source-map' : 'eval-source-map',

    mode: environment === 'dev' ? 'development' : 'production',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CompressionPlugin(),
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            }),
        ],
    },

    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8080,
		historyApiFallback: true,
    },
};