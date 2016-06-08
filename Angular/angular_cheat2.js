<!doctype html>
<html ng-app="app2">
  <head>
    <title>AngularJS Tutorial 2</title>
  </head>
  <body>
    <!-- You can create multiple views that use the same controller -->
    <h4 ng-controller="ctrl1">First Random Number : {{randomNum1}}</h4>
    <h4 ng-controller="ctrl1">Second Random Number : {{randomNum2}}</h4>

    <!-- A page can contain multiple controllers -->
    <h4 ng-controller="badCtrl">I'm feeling {{bad}}</h4>

    <h4 ng-controller="goodCtrl">I'm feeling {{good}}</h4>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
    <script src="js/exam2.js"></script>
  </body>
  </html>

  var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {

  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

// Define multiple controllers
app2.controller('badCtrl', function($scope) {
  var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];

  $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('goodCtrl', function($scope) {
  var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];

  $scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});