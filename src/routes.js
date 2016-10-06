( function ( app ) {

  app.config( [ '$routeProvider', function ( $routeProvider ) {

    var routes = [ {
      url: "/",
      config: {
        templateUrl: "src/components/home/home.html",
        controller: "webbHomeController"
      }
    }, {
      url: "/projects",
      config: {
        templateUrl: "src/components/projects/projects.html",
        controller: "webbBodyController"
      }
    }, {
      url: "/chess",
      config: {
        templateUrl: "src/components/chess/chess.html",
        controller: "webbChessController"
      }
    }, {
      url: "fitness",
      config: {
        templateUrl: "src/components/fitness/fitness.html",
        controller: "webbFitnessController"
      }
    }, {
      url: "/contact",
      config: {
        templateUrl: "src/components/contact/contact.html",
        controller: "webbBodyController"
      }
    } ];

    routes.forEach( function ( route ) {
      $routeProvider.when( route.url, route.config );
    } );

    $routeProvider.otherwise( "/404", {
      templateUrl: "src/components/home/home.html",
      controller: "webbHomeController"
    } );

  } ] );

}( angular.module( 'webbApp' ) ) );
