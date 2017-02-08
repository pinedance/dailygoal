angular.module("dailygoal")

.constant("api", {
		rooturl: "https://script.google.com/macros/s/AKfycbzMJ8D2tLxsNIRls5kx-WtDu34DFWiluYnjKUOsZNMsvRhbiNs/exec",
		conf : {
			headers : {
				// "Accept":"application/json",
            	'Content-Type': 'application/x-www-form-urlencoded',
            	// "Authorization":"Basic _authcode_"
			},
            data: "" // 이게 없으면 Content-Type이 설정되지 않음 //
		}
})

.config( function( $routeProvider, $locationProvider ) {
	$routeProvider
	.when("/", {
    	redirectTo : '/today'
	})
    .when("/:date", {
		templateUrl : "views/main.html",
		controller : "mainCtrl"
    })
	.otherwise({
    	redirectTo : '/today'
  	});

	/*
	if(window.history && window.history.pushState){
  		$locationProvider.html5Mode( { enabled: true, requireBase: false } );
	} // http://stackoverflow.com/questions/14771091/removing-the-fragment-identifier-from-angularjs-urls-symbol
	*/
});
