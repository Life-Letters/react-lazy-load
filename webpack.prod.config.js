"use strict";

var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./src/lazy_image.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'lazy_image.js',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		loaders
	}
};
