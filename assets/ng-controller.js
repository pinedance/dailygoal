angular.module("dailygoal")

.controller("mainCtrl", function($scope, $http, $routeParams, api, helper){

	var date = ( $routeParams.date === "today" )? helper.date.yyyymmdd( "-", new Date() ) : $routeParams.date

	var changeGoalTarget = {"a": 4, "b": 8, "c": 12}

	$scope.init = function(){
		var reqUrl = api.rooturl + helper.url.obj2query({order: "info", date: date })
		$http.get( encodeURI( reqUrl ) ).then( update )
	}

	$scope.changeGoalStatus = function(target, value){
		var updateUrl = api.rooturl + helper.url.obj2query({order: "update", date: date, goal: target, value: value })
		$http.post( encodeURI( updateUrl ), api.conf ).then( update )
	}

	function update( res ){
		console.log( res.data.data )
		$scope.goaldata = res.data.data
		$scope.goalsAtatus = $scope.goaldata.values[0][4]
		$scope.goalsBtatus = $scope.goaldata.values[0][8]
		$scope.goalsCtatus = $scope.goaldata.values[0][12]
	}

	$scope.init()

})
