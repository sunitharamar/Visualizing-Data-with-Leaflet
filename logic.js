// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" +
               "&starttime=2014-03-18&endtime=2014-03-22&maxlongitude=-69.52148437" + 
               "&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// 
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Tectonic plates link
 var TectonicPlatesLink = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  // createFeatures(data.features);
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: function (feature, layer){
      layer.bindPopup("<h3>" + feature.properties.place + "<br> Magnitude: " + feature.properties.mag +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    },

    pointToLayer: function (feature, latlng) {
      return new L.circle(latlng,
        {radius: getRadius(feature.properties.mag),
          fillColor: getColor(feature.properties.mag),
          fillOpacity: .7,
          stroke: true,
          color: "black",
          weight: .5
      })
    }

  });

  console.log(earthquakes);

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}



function createMap(earthquakes) {

  // Define lightmap and satellitemap

  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VuaXRoYXJhbWE4MyIsImEiOiJjamZoMG00ODgyZzA2MzFwYWV0N2U3b3QxIn0.r9uUPLSAranlJokBMfOlvw")

  var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VuaXRoYXJhbWE4MyIsImEiOiJjamZoMG00ODgyZzA2MzFwYWV0N2U3b3QxIn0.r9uUPLSAranlJokBMfOlvw")


  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Light Map": lightmap,
    "Satellite Map": satellitemap
  };

  // Add a tectonic plate layer
  var tectonicPlates = new L.LayerGroup();

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes,
    "Tectonic Plates": tectonicPlates
  };

  // Add Fault lines data
  d3.json(TectonicPlatesLink, function(plateData) {
    // Adding our geoJSON data, along with style information, to the tectonicplates
    // layer.
    L.geoJson(plateData, {
      color: "blue",
      weight: 2
    })
    .addTo(tectonicPlates);
  });

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 3.5,
    layers: [lightmap, earthquakes, tectonicPlates, satellitemap]
  });

  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


// Create legend
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (myMap) {

  var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3, 4, 5],
            labels = [];

// loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};

legend.addTo(myMap);

}

// Definining a function to calculate color
function getColor(d) {
  return d > 5 ? '#F30' :
        d > 4  ? '#F60' :
        d > 3  ? '#F90' :
        d > 2  ? '#FC0' :
        d > 1   ? '#FF0' :
                '#9F3';
}

// Definining a function to calculate radius
function getRadius(value){
  return value*40000
}