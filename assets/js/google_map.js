var locations = [
  { city: "Providence",
    latitude: 41.8228731,
    longitude: -71.418619
  },
  { city: "Chicago",
    latitude: 41.878114,
    longitude: -87.629798
  }
];
var loc = 0;
// Google Map Location
var myCenter = new google.maps.LatLng(locations[loc].latitude, locations[loc].longitude);


function initialize() {
var mapProp = {
  center: myCenter,
  zoom: 12,
  scrollwheel: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
