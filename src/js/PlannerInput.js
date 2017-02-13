var PlannerInput = (function(){
	var s = {
		label: b.cl({
			"font-size": "10pt",
		}),
		input: b.cl({
			"box-sizing": "border-box",
			"width": "100%",
			"background-color": "#c5dbdd",
			"border": "0px",
			"font-size": "14pt",
			"padding": "10px 10px 10px 10px",
			"margin-bottom": "10px"
		}),
		checkbox: b.cl({
			"margin-bottom": "10px"
		}),
		submit: b.cl({
			"background-color": "#63bd60",
			"padding": "10px",
			"border": "0px",
			"color": "#FFFFFF",
			"box-shadow": "1px 1px 5px #AAAAAA",
			"text-align": "right"
		}),
		icon: b.cl({
			"vertical-align": "middle"
		})
	};

	return {
		controller: function() {
			return {
				submit: function(){
					model.get_route({

					});
				}
			};
		},
		view: function(ctrl) {
			return m("div", [
				m.component(MenuBar),
				m("div", {
					class: "page"
				}, [
					m.component(Paper, [
						m("div", {}, [
							m("div",[
								m("span",{},Model.temp().toFixed()+" °C"),
								m("img",{class: s.icon, src: "http://openweathermap.org/img/w/"+Model.icon()+".png"}),
							]),
							m("div",{},"Vertrek"),
							m("input",{class: s.input},""),
							m("div",{},"Bestemming"),
							m("input",{class: s.input},""),
							m("div",{class: s.checkbox},[
								m("input",{type: "checkbox"}),
								m("span",{},"Veilige Route"),
							]),
							m("div",{class: s.checkbox},[
								m("input",{type: "checkbox"}),
								m("span",{},"Mooie Route"),
							]),
							m("button",{class:s.submit},"Plannen")
						]),
					]),
				])
			]);
		}
	};
})();
