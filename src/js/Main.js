m.route.mode = "hash";
m.route(document.getElementById("content"), "/", {
	"/": PlannerInput,
	"/route": RouteDisplay,
	"/map": MapPage
});
