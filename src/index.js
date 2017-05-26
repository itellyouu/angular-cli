require('./style/style.css')
require('angular')

var app = angular.module('app', [require('angular-ui-router')]);
app.controller('Main', function($scope){
  
})

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('/', {
      url: '/',
      template: require('./template/home.html')
    })
    .state('templateA', {
      url: "/templateA",
      template: require('./template/templateA/templateA.html'),
      controller: require('./template/templateA/templateA.js')
    })
    .state('templateB', {
      url: "/templateB",
      template: require('./template/templateB/templateB.html'),
      controller: require('./template/templateB/templateB.js')
    })
})