( function ( app ) {

  "use strict";

  app.directive( 'webbHeader', function () {

    return {
      restrict: 'E',
      templateUrl: 'src/components/shared/header/header.html',
      link: function ( scope, element, attributes ) {


      }
    };
  } );

}( angular.module( 'webbApp' ) ) )
