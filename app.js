
// function initMap(){

// let dispalyMap = document.getElementById('displayMap');// what is it ar..
// let rounteMap = document.getElementById('routeMap');

// let map = new google.maps.Map(document.getElementById('map'), mapOpt);

// let mapOpt = {
//    zoom: 11,   center: { lat: 39.96118, lng: -82.99879},   streetViewControl: false,   mapTypeControl: false,   fullscreenControl: false }


// }

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 40.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();