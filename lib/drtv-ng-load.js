angular.module('trialsTrackmap')
.directive('ngLoad', function($parse, $rootScope){
    return {
        restrict: 'A',
        compile: function($element, attr) {
            var fn = $parse(attr['ngLoad']);
            return function(scope, element) {
                function loaded(event){
                    $rootScope.$broadcast('image:loaded',element);
                    element.addClass('loaded');
                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                }

                element.addClass('loading');
                element.on('load', function (event) {
                    loaded(event);
                });
            };
        }
    };
})