var myLatLng = {lat: 50.936135, lng: 34.811501};
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 14,
    // disableDefaultUI: true,
    scrollwheel: false,
    panControl: false,
    // zoomControl: false
    mapTypeControl: false,
    streetViewControl: true
  });
 
setMarkers(map);

function setMarkers(map) {
    var image = {
    url: 'img/map_marker_2.png',  
    size: new google.maps.Size(64, 64),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 64),
    scaledSize: new google.maps.Size(64, 64)
  };
  var shape = {
    coords: [1, 1, 1, 64, 64, 64, 64, 1],
    type: 'poly'
  };
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      shape: shape,
      title: 'Головний офіс компанії',
      zIndex: 1
    });  
}

var styles = [
  {
    "featureType": "landscape",
    "stylers": [
      // {
      //   "color": "#eaeaea"
      // },
      {"visibility": "shown"}
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bfd3e4"
      },
      {
        "lightness": 50
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bfd3e4"
      },
      {
        "saturation": -55
      },
      {
        "lightness": -30
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bfd3e4"
      },
      {
        "saturation": -40
      },
      {
        "lightness": -15
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bfd3e4"
      },
      {
        "saturation": -40
      },
      {
        "lightness": -25
      },
      {
        "weight": 3.5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#fff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bfd3e4"
      }
    ]
  }
];


map.setOptions({styles: styles});
}