var devMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.dev')
var express = require('express')
var webpack = require('webpack')
var app = express()
var compiler = webpack(config)

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');

var dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(devMiddleware(compiler,{
	quiet: true,
	noInfo: true,
	stats: {
		colors: true
	}
}))

app.listen(5001, function() {

});