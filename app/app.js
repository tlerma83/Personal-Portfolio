"use strict";

var app = angular.module('PersonalPage', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    })
    .when("/about", {
        templateUrl: "partials/about.html",
        controller: "AboutCtrl"
    })
    .when("/Projects", {
        templateUrl: "partials/projects.html",
        controller: "ProjectCtrl"
    })
    .otherwise("/");
});
