var map;
// esri/dijit/attribution: Unable to show map attribution. Did you forget to require 'esri.dijit.Attribution'?
require(["esri/Map", "dojo/parser", "dojo/on", "dojo/aspect", "esri/dijit/Attribution", "dojo/domReady!"],
        function(Map, parser, on, aspect) {
            parser.parse();
            var initExtent = new esri.geometry.Extent({
                "xmin" : -122.46,
                "ymin" : 37.73,
                "xmax" : -122.36,
                "ymax" : 37.77,
                "spatialReference" : {
                    "wkid" : 4326
                }
            });
            var basemap = new esri.layers.ArcGISTiledMapServiceLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer");
            map = new esri.Map("mapDiv", {
                extent : esri.geometry.geographicToWebMercator(initExtent)
            });
            map.addLayer(basemap);
            
            aspect.after(map, 'onLoad', function() {
                alert("Loaded");
            });
        });
