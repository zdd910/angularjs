/** * Created by ID on 15/11/10. * Author:zhoudd * email:zhoudd@stark.tm */angular.module('app.filters', [])    .filter('capitalize', function () {        return function (input) {            if (input) {                return input[0].toUpperCase() + input.slice(1);            }        }    })