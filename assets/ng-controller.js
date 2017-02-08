angular.module("dailygoal")

.controller("mainCtrl", function($scope, $http, $routeParams, api, helper){

	$scope.date = ( $routeParams.date === "today" )? helper.date.yyyymmdd( "-", new Date() ) : $routeParams.date

	var changeGoalTarget = {"a": 4, "b": 8, "c": 12}

	$scope.init = function(){
		var reqUrl = api.rooturl + helper.url.obj2query({order: "info", date: $scope.date })
		$scope.loading = true
		$http.get( encodeURI( reqUrl ) ).then( update ).catch( error )
	}

	$scope.changeGoalStatus = function(target, value){
		var updateUrl = api.rooturl + helper.url.obj2query({order: "update", date: $scope.date, goal: target, value: value })
		$scope.loading = true

		// $http({ url: encodeURI( updateUrl ), method: "POST", headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, data: "" }).then( update ).catch( error )
		$http.post( encodeURI( updateUrl ), "", api.conf ).then( update ).catch( error )
	}

	function update( res ){
		console.log( res.data.data )
		$scope.goaldata = res.data.data
		$scope.goalsAtatus = $scope.goaldata.values[0][4]
		$scope.goalsBtatus = $scope.goaldata.values[0][8]
		$scope.goalsCtatus = $scope.goaldata.values[0][12]
		$scope.loading = false
	}

	function error( ){
		$scope.loading = false
	}

	$scope.go = function(direction){

		var _day = $scope.date.split("-")
		var day = [ _day[1], _day[2], _day[0] ].join("/")
		var someday = new Date( day )
		if(direction==="next"){
			someday.setDate( someday.getDate() + 1 )
		} else {
			someday.setDate( someday.getDate() - 1 )
		}

		return helper.date.yyyymmdd( "-", someday )

	}

	$scope.init()

})
