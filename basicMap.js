console.log("js works");

//35.217665 N, 80.831473 W -> 35.217665 , -80.831473

let map = L.map("map", {
center: [35.217665 , -80.831473],
  zoom: 8
});

//import leaflet quickstart template
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
