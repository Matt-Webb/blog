( function ( app ) {

  "use strict";

  app.directive( 'webbFooter', function () {

    return {
      restrict: 'E',
      templateUrl: 'src/components/shared/footer/footer.html',
      link: function ( scope, element, attributes ) {}
    };

  } );

}( angular.module( 'webbApp' ) ) );
