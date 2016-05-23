/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';

angular.module('myApp', []).controller('testController', ['$scope', function($scope) {
    $scope.message = 'fuck you';
}]);

let init = () => angular.element().ready(() => angular.bootstrap(document, ['myApp']));

export default init;