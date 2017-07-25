'use strict';

var angular = require('angular');
require('angular-route');
require('angular-aria');
require('angular-animate');
require('angular-material');

var app = angular.module('app', [
									'ngRoute',
									'ngMaterial'
								]);

require('./common');
require('./components');
require('./services');

app.config(require('./routeConfig'));
