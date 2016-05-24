/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';

const app = angular.module('myApp', []);

const appHtml = require('./app.html');

app.controller('testController', function ($scope) {
    $scope.message = 'hello angular';
});

app.directive('app', function () : any {
    return {
        restrict: 'E',
        replace: true,
        template: appHtml,
    }
});

const init = () => angular.element().ready(() => angular.bootstrap(document, ['myApp']));

export { init, app };