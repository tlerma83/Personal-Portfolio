"use strict";


app.controller("ProjectCtrl", function($scope, $location, $routeParams){
    console.log("What up");

    $("#fsModal").on("show", function () {
        $("body").addClass("modal-open");
    }).on("hidden", function () {
        $("body").removeClass("modal-open");
    });


});





