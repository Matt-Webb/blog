( function ( app ) {

  "use strict";

  app.controller( 'webbChessController', function ( $scope, $http, $filter ) {


    // https://jsfiddle.net/t3f2ybfr/
    $.get( 'data/results.json', function ( data ) {
      // array to enable me to create js date object for correct table sorting:
      $scope.tableData = [];

      // parse response into JavaScript:
      $scope.data = angular.fromJson( data );

      // loop the results and bind to object before pushing to table data:
      $.each( $scope.data, function ( index, object ) {
        var dateSplit = object.date.split( '-' );
        var gameDate = new Date( dateSplit[ 2 ], dateSplit[ 1 ] - 1, dateSplit[ 0 ] );
        var today = new Date();

        var player = {
          id: object.id,
          name: object.name,
          title: object.title,
          event: object.event,
          grade: object.grade,
          elo: object.grade,
          result: object.result,
          color: object.color,
          date: gameDate,
          gameAge: Math.round( Math.abs( ( today.getTime() - gameDate.getTime() ) / ( 24 * 60 * 60 * 1000 ) ) )
        };
        $scope.tableData.push( player );
      } );
      // important for rendering:
      $scope.$apply();
    } );

    // toggle boxes:
    $scope.showResults = true;
    $scope.toggleResultIcon = 'fa-minus-square-o';

    $scope.toggleResults = function () {
      $scope.showResults = !$scope.showResults;
      $scope.toggleResultIcon = $scope.showResults ? 'fa-minus-square-o' : 'fa-plus-square-o';
    };

    $scope.showAchievements = true;
    $scope.toggleAchievementIcon = 'fa-minus-square-o';

    $scope.toggleAchievements = function () {
      $scope.showAchievements = !$scope.showAchievements;
      $scope.toggleAchievementIcon = $scope.showAchievements ? 'fa-minus-square-o' : 'fa-plus-square-o';
    };


    $scope.labels = [ "White", "Black" ];
    $scope.pieData = [ 0, 0 ];

    $scope.filterTableBy = function () {
      console.log( "executing..." );
      $filter( $scope.filteredResults )( 'W' );
    };

    // computes the displayed list of table results for 'wins', 'draws' and 'loses':
    $scope.resultCount = function ( result ) {
      var counter = 0;

      var win = 0;
      var loss = 0;
      var draw = 0;

      var countWhite = 0;
      var countBlack = 0;
      if ( $scope.filteredResults ) {
        $.each( $scope.filteredResults, function ( index, object ) {
          counter = object.result === result ? counter + 1 : counter;

          win = object.result === "1" ? win + 1 : win;
          draw = object.result === "½" ? draw + 1 : draw;
          loss = object.result === "0" ? loss + 1 : loss;

          countWhite = object.color === 'W' ? countWhite + 1 : countWhite;
          countBlack = object.color === 'B' ? countBlack + 1 : countBlack;
        } );
      }
      $scope.pieData[ 0 ] = countWhite;
      $scope.pieData[ 1 ] = countBlack;
      return counter;
    };

    $scope.selectedNumber = null;

    // default table filters:
    $scope.eloMultipler = 7.5;
    $scope.eloIncriment = 700;
    $scope.sortType = 'date';
    $scope.sortReverse = true;
    $scope.searchPlayer = '';
  } );

}( angular.module( 'webbApp' ) ) );
