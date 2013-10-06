'use strict';

angular.module("website")
    .controller("CardCtrl", function($scope, ImageBank) {

        console.log("CardCtrl", $scope);

        $scope.data = ImageBank.chocoImgs;

        $scope.onUpdate = function() {
            console.log("UPDATEEE!!!");
        };

        var counter = 0;

        $scope.add = function() {
            $scope.data.splice(1, 0, {
                img: '../imgs/chocoGallery/choco1.jpg',
                title: 'Added Card ' + counter++,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            });

            $scope.cardView.page = 1;
        };

        $scope.onCreate = function(cardView) {
            $scope.cardView = cardView;
        };


    });

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);