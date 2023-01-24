let map, map2;

const stylesArray = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

function initMap() {

  const myLatLng = { lat: 47.304377, lng: 7.930560 }

  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 8,
    styles: stylesArray
  });

  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: myLatLng,
    zoom: 8,
    styles: stylesArray
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Imperia Cars",
  });

  let marker2 = new google.maps.Marker({
    position: myLatLng,
    map: map2,
    title: "Imperia Cars",
  });

  const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">Imperia Cars GmbH</h1>' +
    '<div id="bodyContent">' +
    "<p>Nordstrasse 14<br/>4665 Oftringen</p>" +
    '<a href="https://www.google.com/maps/place/Imperia+Cars+GmbH/@47.3043933,7.9305731,21z/data=!4m5!3m4!1s0x47902f5ffb71378d:0xf97cf4cb67c3728f!8m2!3d47.3043194!4d7.9305388">' +
    "Zu Google Maps</a> " +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const infowindow2 = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  marker2.addListener("click", () => {
    infowindow2.open(map2, marker2);
  });


}