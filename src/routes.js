( function ( app ) {

  app.config( [ '$routeProvider', function ( $routeProvider ) {

    var routes = [ {
      url: "/",
      config: {
        templateUrl: "src/components/home/home.html",
        controller: "HomeController"
      }
    }, {
      url: "/projects",
      config: {
        templateUrl: "src/components/projects/projects.html",
        controller: "BodyController"
      }
    }, {
      url: "/chess",
      config: {
        templateUrl: "src/components/chess/chess.html",
        controller: "ChessController"
      }
    }, {
      url: "fitness",
      config: {
        templateUrl: "src/components/fitness/fitness.html",
        controller: "FitnessController"
      }
    }, {
      url: "/contact",
      config: {
        templateUrl: "src/components/contact/contact.html",
        controller: "BodyController"
      }
    } ];

    routes.forEach( function ( route ) {
      $routeProvider.when( route.url, route.config );
    } );

    $routeProvider.otherwise( "/404", {
      templateUrl: "src/components/home/home.html",
      controller: "HomeController"
    } );

  } ] );

}( angular.module( 'webbApp' ) ) );
