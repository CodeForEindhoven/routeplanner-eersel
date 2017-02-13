var Model = (function(){

	var temp = m.prop();
	var icon = m.prop();

	var get_weather = function(){
		var APPID = "0dcc72cc6f649ca562be3f25e26733a6";
		var LAT = "51.357222";
		var LON = "5.314722";
		var url = "http://api.openweathermap.org/data/2.5/weather?lat="+LAT+"&lon="+LON+"&units=metric&APPID="+APPID;

		m.request({
			url: url,
		}).then(function(data){
			temp(data.main.temp);
			icon(data.weather[0].icon);
		});
	};

	get_weather();


	var route = m.prop([[{"road":"","lines":[]},{"road":"Berkvenseweg","lines":[{"road":"Berkvenseweg","type":"LineString","coordinates":[["5.28671","51.36489"],["5.2883956","51.36671"],["5.2884787","51.3668014"]]}]},{"road":"Vlasberg","lines":[{"road":"Vlasberg","type":"LineString","coordinates":[["5.2886822","51.3667372"],["5.2884787","51.3668014"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.2910711","51.366401"],["5.2908846","51.3664316"],["5.2894071","51.3666387"],["5.288772","51.3667142"],["5.2886822","51.3667372"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.29282","51.36589"],["5.2910711","51.366401"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.29376","51.3656342"],["5.29282","51.36589"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.294023","51.3655652"],["5.29376","51.3656342"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.294825","51.3653298"],["5.2946434","51.3653841"],["5.294023","51.3655652"]]},{"road":"Vlasberg","type":"LineString","coordinates":[["5.294825","51.3653298"],["5.2951168","51.3652373"]]}]},{"road":"Wolverstraat","lines":[{"road":"Wolverstraat","type":"LineString","coordinates":[["5.2951168","51.3652373"],["5.2951737","51.365176"],["5.2952466","51.3651443"],["5.2953389","51.3651157"]]},{"road":"Wolverstraat","type":"LineString","coordinates":[["5.2953389","51.3651157"],["5.2954496","51.3651157"],["5.2955162","51.3651227"],["5.2955817","51.3651364"],["5.2956301","51.3651637"]]},{"road":"Wolverstraat","type":"LineString","coordinates":[["5.2956301","51.3651637"],["5.2961147","51.3650185"],["5.2965396","51.3648809"]]},{"road":"Wolverstraat","type":"LineString","coordinates":[["5.2965396","51.3648809"],["5.2967659","51.3647859"],["5.2970733","51.364644"],["5.2977026","51.3644665"]]}]},{"road":"unknown","lines":[{"road":"unknown","type":"LineString","coordinates":[["5.2977026","51.3644665"],["5.2982948","51.3642468"],["5.299307","51.3638814"],["5.2999077","51.363722"],["5.300395","51.3636074"],["5.3008005","51.3635331"],["5.3014871","51.3634366"],["5.3023957","51.3633075"],["5.3031167","51.363211"],["5.3038879","51.3631857"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3038879","51.3631857"],["5.3040455","51.363157"],["5.3042579","51.3631493"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3042579","51.3631493"],["5.3043289","51.3631453"],["5.3044324","51.3631926"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3042305","51.3615038"],["5.3042212","51.3620037"],["5.3042985","51.3624316"],["5.3043906","51.3629404"],["5.3043995","51.3630896"],["5.3044324","51.3631926"]]}]},{"road":"Duizelseweg","lines":[{"road":"Duizelseweg","type":"LineString","coordinates":[["5.3042968","51.3614615"],["5.3042305","51.3615038"]]},{"road":"Duizelseweg","type":"LineString","coordinates":[["5.30629","51.36033"],["5.30616","51.36043"],["5.3042968","51.3614615"]]},{"road":"Duizelseweg","type":"LineString","coordinates":[["5.30629","51.36033"],["5.30668","51.36031"],["5.30707","51.36032"],["5.3074721","51.3603215"],["5.3077839","51.3603589"],["5.30808","51.3604316"]]},{"road":"Duizelseweg","type":"LineString","coordinates":[["5.30808","51.3604316"],["5.30823","51.36047"],["5.30832","51.36051"]]}]},{"road":"Markt","lines":[{"road":"Markt","type":"LineString","coordinates":[["5.30843","51.35982"],["5.3084378","51.3600272"],["5.30845","51.36035"],["5.30841","51.36045"],["5.30832","51.36051"]]},{"road":"Markt","type":"LineString","coordinates":[["5.30843","51.35962"],["5.30843","51.35982"]]},{"road":"Markt","type":"LineString","coordinates":[["5.3085333","51.3591277"],["5.30851","51.35924"],["5.30846","51.35939"],["5.30843","51.35962"]]},{"road":"Markt","type":"LineString","coordinates":[["5.30874","51.35883"],["5.3085333","51.3591277"]]},{"road":"Markt","type":"LineString","coordinates":[["5.30891","51.35852"],["5.30874","51.35883"]]},{"road":"Markt","type":"LineString","coordinates":[["5.30909","51.35806"],["5.30901","51.35832"],["5.30891","51.35852"]]}]},{"road":"Dijk","lines":[{"road":"Dijk","type":"LineString","coordinates":[["5.31022","51.35764"],["5.30977","51.35777"],["5.30932","51.35801"],["5.30909","51.35806"]]},{"road":"Dijk","type":"LineString","coordinates":[["5.31069","51.35757"],["5.31022","51.35764"]]}]},{"road":"unknown","lines":[{"road":"unknown","type":"LineString","coordinates":[["5.3112978","51.3564878"],["5.31069","51.35757"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3115151","51.3560992"],["5.3112978","51.3564878"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3115151","51.3560992"],["5.3116716","51.3559503"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3116716","51.3559503"],["5.3119343","51.3557002"]]},{"road":"unknown","type":"LineString","coordinates":[["5.3119343","51.3557002"],["5.3123966","51.3552587"]]}]},{"road":"Kapelweg","lines":[{"road":"Kapelweg","type":"LineString","coordinates":[["5.3123966","51.3552587"],["5.3126","51.35533"]]}]}]]);

	return {
		get_weather: get_weather,
		temp: temp,
		icon: icon,

		route: route
	};
})();
