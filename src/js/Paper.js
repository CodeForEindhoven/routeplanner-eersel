var Paper = (function(){
	var style = b.mq({
		"monitor":{
			"box-sizing": "border-box",
			"padding": "3px",
			"background-color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"float": "left",
			"width": "750px",
			"margin-bottom": "30px",
			"margin-right": "15px",
      "height": "500px"
		},
		"mobile": {
			"box-sizing": "border-box",
			"padding": "3px",
			"background-color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"float": "left",
			"width": "100%",
			"margin-bottom": "30px",
			"margin-right": "15px",
      "height": "500px"
		}
	});

	return {
		controller: function(values){

		},
		view: function(ctrl, content){
			return m("div",{class: style},content);
		}
	};

})();
