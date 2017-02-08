angular.module("dailygoal")

.factory("helper", function(){

	var _day = {}

	_day.yyyymmdd = function(_sep, thatTime ) {
		var _now = thatTime || new Date()
	    var sep = _sep? _sep : ""
	    var yyyy = _now.getFullYear().toString()
	    var mm = ( _now.getMonth()+1 ).toString(); // getMonth() is zero-based
	    var dd  = _now.getDate().toString();

	    return [ yyyy, (mm[1]?mm:"0"+mm[0]), (dd[1]?dd:"0"+dd[0]) ].join(sep) ; // padding
	};

	_day.yymmdd = function(_sep, thatTime ) {
		var _now = thatTime || new Date()
	    var sep = _sep? _sep : ""
	    var yy = _now.getFullYear().toString().substr(2, 2)
	    var mm = ( _now.getMonth()+1 ).toString(); // getMonth() is zero-based
	    var dd  = _now.getDate().toString();

	    return [ yy, (mm[1]?mm:"0"+mm[0]), (dd[1]?dd:"0"+dd[0]) ].join(sep) ; // padding
	};


	_day.yyyymmdd_timestamp = function( unix_timestamp, _sep ){
		var sep = _sep? _sep : ""
		var _date = new Date( unix_timestamp )
	    var yy = _date.getFullYear().toString()
	    var mm = ( _date.getMonth()+1 ).toString(); // getMonth() is zero-based
	    var dd  = _date.getDate().toString();

	    return [ yy, (mm[1]?mm:"0"+mm[0]), (dd[1]?dd:"0"+dd[0]) ].join(sep) ; // padding
	}

	_day.monthago = function( monthlength ){
		var monthAgo = new Date();
		monthAgo.setMonth( monthAgo.getMonth() - monthlength );
		return monthAgo
	}

	//============================================

	var _url = {}

	_url.obj2query = function( obj ){
		return "?" + Object.keys(obj).map(function (key) { return key + "=" + obj[key] }).join("&")
	}

	return {
		date : _day,
		url : _url
	}
})
