( function ( app ) {
  "use strict";

  app.directive( 'autoActive', [ '$location', function ( $location ) {
    return {
      restrict: 'A',
      scope: false,
      link: function ( scope, element ) {

        function setActive() {
          var path = $location.path();
          if ( path ) {
            angular.forEach( element.find( 'li' ), function ( li ) {
              var anchor = li.querySelector( 'a' );
              if ( anchor.href.match( '#' + path + '(?=\\?|$)' ) ) {
                angular.element( li ).addClass( 'current' );
              } else {
                angular.element( li ).removeClass( 'current' );
              }
            } );
          }
        }

        setActive();

        scope.$on( '$locationChangeSuccess', setActive );
      }
    };
  } ] );

}( angular.module( 'webbApp' ) ) );
