"use strict";

var app = angular.module('PersonalPage', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    })
    .when("/ContactMe", {
        templateUrl: "partials/contact.html",
        controller: "ContactCtrl"
    })
    .when("/Projects", {
        templateUrl: "partials/projects.html",
        controller: "ProjectCtrl"
    })
    .otherwise("/");
});
