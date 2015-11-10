/** * Created by ID on 15/11/10. * Author:zhoudd * email:zhoudd@stark.tm * * 扩展 $interpolate 自定义开始和结束标志 */    angular.module('emailParser', [])    .config(['$interpolateProvider', function ($interpolateProvider) {        $interpolateProvider.startSymbol('--');        $interpolateProvider.endSymbol('--');    }])    .factory('EmailParser', ['$interpolate', function ($interpolate) {        return {            parse: function (text, context) {                var template = $interpolate(text);                return template(context);            }        }    }]);