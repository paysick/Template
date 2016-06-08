<!doctype html>

<!-- Define the ng-app parameter in the root element so AngularJS
knows where to begin compiling. app1 is the module name and is referenced
in the JS file we will create -->

<!-- ng-init is a directive that initializes application data by assigning
variable values -->
<html ng-app="app1" ng-init="person = {fName: 'Derek', lName: 'Banas'};
  capitals = [{city: 'Montgomery', state: 'Alabama'}, {city: 'Juneau', state: 'Alaska'}, {city: 'Phoenix', state: 'Arizona'}]">
  <head>
    <title>AngularJS Tutorial</title>
  </head>
  <body>

    <!-- Adds a controller that the Angular module will control.
    The view is the div element and all that it contains. The $scope
    component is used to provide data to the view. -->
    <div ng-controller="ctrl1">
      <span>Values:</span>

      <!-- Define 2 elements that will be bound to the first and
      second values in the scope using the ng-model directive. If
      either value changes here it will change in the scope and
      vice versa -->
      <input type="text" ng-model="first" />
      <input type="text" ng-model="second" />

      <!-- Bind a click on this button to the function updateValue
      using ng-click -->
      <button ng-click="updateValue()">Sum</button>
      <br><br>

      <!-- Displays the Scope value of calculation in the expression-->
      {{calculation}}

      <!-- You can perform calculations in expressions -->
      <p>5 + 5 = {{5+5}}</p>

      <!-- Expressions bind data to HTML as well -->
      <p>Your first value is {{first}}</p>

      <!-- You can do the same with ng-bind -->
      <p>Your second value is
        <span data-ng-bind="second"></span>
      </p>

      <!-- Strings can be built in expressions -->
      <p>{{person.fName + " " + person.lName}} you entered {{first + " and " + second}}</p>

      <!-- ng-repeat cycles through a collection -->
      <ul>
        <li ng-repeat = "capital in capitals">
          {{ 'City: ' + capital.city + ', State: ' + capital.state}}
        </li>
      </ul>

    </div>

    <!-- Load the AngularJS library -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>

    <!-- Load the JS Module -->
    <script src="js/exam1.js"></script>
  </body>
  </html>

  /*
---------- Components of an AngularJS Application ----------

AngularJS provides a front end framework based on the MVC model. It is built on top of JavaScript and JQuery. With MVC the Model represents the data source, the View is the rendered page, and the Controller handles communication between both of them. By structuring your page this way your code is easier to maintain, easier to update and makes for more readable code.

AngularJS uses modules which represent the components used in your application. Using modules makes it easy to reuse your code in many applications.

Web pages are normally manipulated by working with the DOM object in JavaScript and JQuery. AngularJS allows you to extend HTML tags and attributes using AngularJS directives which make it easy to bind data directly to HTML elements.

AngularJS uses JavaScript objects to represent data called Scope which can be data generated on the web server, a database, web service, or client side AngularJS code.

You can use expressions that are directly linked to the scope (data) so that the page is updated dynamically as the data changes. Data binding works as well so that when data changes on the web page the model is also updated.

Many services are provided for common tasks like using AJAX techniques to dynamically pull data from a web service or the server.
*/

// Here we implement the template, module, controller and scope

// Define the AngularJS Module
// Modules are used to
// 1. Associate an AngularJS app with part of an HTML document
// 2. Provide access to AngularJS features
// 3. Help with organization
// angular.module() excepts the module name, list of modules this module
// needs and an optional configuration for the module. Modules that work with
// HTML normally have a name that contains app.
var app1 = angular.module('app1', []);

// Define the Controller and implement the Scope which links HTML
// elements to variables in the Scope. It receives the controller
// name and a factory function which gets the controller ready to use
// We are saying that $scope is a dependency and that we want Angular
// to pass in the $scope object when the function is called. This is
// an example of dependency injection. Angular sees that my factory
// function contains the $scope component and then it gets it and passes
// it to the function automatically.
app1.controller('ctrl1', function($scope) {

  // Define initial values
  $scope.first = 1;
  $scope.second = 1;

  // Change the value for calculation when the button is clicked
  // I used a shortcut using the unary plus operator to convert
  // the string number values which are then added
  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second +
      " = " + (+$scope.first + +$scope.second);
  };
});