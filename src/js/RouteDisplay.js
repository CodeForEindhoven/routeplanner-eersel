var RouteDisplay = (function(){
	var s = {
		segment: b.cl({
			"border-bottom": "1px solid grey",
		})
	};

	return {
		controller: function() {

		},
		view: function(ctrl) {
			return m("div", [
				m.component(MenuBar),
				m("div", {class: "page"}, [
					m.component(Paper, [
						m("div", {}, [
							Model.route().map(function(segment){
								return m("div", {class: s.segment}, segment.road);
							})
						]),
					]),
				])
			]);
		}
	};
})();
