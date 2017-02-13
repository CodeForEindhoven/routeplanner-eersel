var MapPage = {
  controller: function() {
    var map;
    return {
      loadMap: function(e) {
        if(!map){
          map = L.map(e);
          // create the tile layer with correct attribution
          var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
          var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
          var osm = new L.TileLayer(osmUrl, {
            minZoom: 8,
            maxZoom: 12,
            attribution: osmAttrib
          });

          // start the map in South-East England
          map.setView(new L.LatLng(51.3, 0.7), 9);
          map.addLayer(osm);
        }
      }
    };
  },
  view: function(ctrl) {
    return m("div", [
      m.component(MenuBar),
      m("div", {
        class: "page",
      }, [
        m.component(Paper, [
          m("div", {
            config: ctrl.loadMap,
            class: "mithril-map"
          }, "Hier de kaart"),
        ]),
      ])
    ]);
  }
};
