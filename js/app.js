

var app = angular.module('tsAppGuide', ['ngRoute']);

  
app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })

      .when('/getting-started', {
        templateUrl: 'views/getting-started.html',
        controller: 'typographyController'
      })    

      .when('/winforms/', {
        templateUrl: 'views/winforms.html',
        controller: 'typographyController'
      })

      .when('/winforms/common-dialogs', {
        templateUrl: 'views/winforms/common-dialogs.html',
        controller: 'typographyController'
      })


      .when('/winforms/controls', {
        templateUrl: 'views/winforms/controls.html',
        controller: 'typographyController'
      })


      .when('/winforms/introduction', {
        templateUrl: 'views/winforms/introduction.html',
        controller: 'typographyController'
      })

      .when('/winforms/main-winform', {
        templateUrl: 'views/winforms/main-winform.html',
        controller: 'typographyController'
      })

      .when('/winforms/providers', {
        templateUrl: 'views/winforms/providers.html',
        controller: 'typographyController'
      })

      .when('/winforms/ui-design', {
        templateUrl: 'views/winforms/ui-design.html',
        controller: 'typographyController'
      })

      .when('/winforms/workflow', {
        templateUrl: 'views/winforms/workflow.html',
        controller: 'typographyController'
      })

      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'typographyController'
      })   

      .when('/html/devices', {
        templateUrl: 'views/html/devices.html',
        controller: 'typographyController'
      })    

      .when('/html/standards', {
        templateUrl: 'views/html/standards.html',
        controller: 'typographyController'
      })

      .when('/html/branding', {
        templateUrl: 'views/html/branding.html',
        controller: 'typographyController'
      })    

      .when('/html/grids', {
        templateUrl: 'views/html/grids.html',
        controller: 'typographyController'
      })

      .when('/html/typography', {
        templateUrl: 'views/html/typography.html',
        controller: 'typographyController'
      })    

      .when('/html/colors', {
        templateUrl: 'views/html/colors.html',
        controller: 'typographyController'
      })

      .when('/html/iconography', {
        templateUrl: 'views/html/iconography.html',
        controller: 'typographyController'
      })

      .when('/html/templates', {
        templateUrl: 'views/html/templates.html',
        controller: 'typographyController'
      })    

      .when('/html/tools', {
        templateUrl: 'views/html/tools.html',
        controller: 'typographyController'
      })

      .otherwise({
        redirectTo: '/'
      });

  

     // use the HTML5 History API
//    $locationProvider.html5Mode(true);



app.controller('mainController', [function($scope) {
     $scope.model = {
        message: "This is my app!!!"
    }
}])
  
app.controller('typographyController', [function() {

}]);

});

      /*
      // Set Active LI on NAV active color
      directive('activeLink', ['$location', function(location) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs, controller) {
              var clazz = attrs.activeLink;
              var path = attrs.href;
              path = path.substring(1); //hack because path does bot return including hashbang
              scope.location = location;
              scope.$watch('location.path()', function(newPath) {
                  if (path === newPath) {
                      element.addClass(clazz);
                  } else {
                      element.removeClass(clazz);
                  }
              });
          }

        };
      });*/


// Set Active LI on NAV active color
/*
angular.module('tsAppGuide', []).directive('activeLink', ['$location', function(location) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs, controller) {
              var clazz = attrs.activeLink;
              var path = attrs.href;
              path = path.substring(1); //hack because path does bot return including hashbang
              scope.location = location;
              scope.$watch('location.path()', function(newPath) {
                  if (path === newPath) {
                      element.addClass(clazz);
                  } else {
                      element.removeClass(clazz);
                  }
              });
          }

        };
}]);
*/