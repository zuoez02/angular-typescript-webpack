/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
 
const app = angular.module('myApp', []);

app.controller('testController', function ($scope) {
    $scope.message = 'hello angular';
})

const init = () => angular.element().ready(() => angular.bootstrap(document, ['myApp']));

export { init, app };