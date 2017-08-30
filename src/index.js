require("./style/style.css");
var angular = require("angular"),
  uiRouter = require("ui-router");
var app = window.angular.module("app", ["ui.router"]);
app.controller("Main", [
  "$scope",
  "$rootScope",
  "$state",
  function($scope, $rootScope, $state) {}
]);

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("/", {
        url: "/",
        template: require("./template/home.html")
      })
      .state("templateA", {
        url: "/templateA",
        template: require("./template/templateA/templateA.html"),
        controller: require("./template/templateA/templateA.js")
      })
      .state("templateB", {
        url: "/templateB",
        template: require("./template/templateB/templateB.html"),
        controller: require("./template/templateB/templateB.js")
      });
  }
]);
