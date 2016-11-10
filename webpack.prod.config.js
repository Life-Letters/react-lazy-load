"use strict";

var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./src/lazy_image.js'
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'lazy_image.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		loaders
	}
};
