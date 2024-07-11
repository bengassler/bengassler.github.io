console.log("js works");

//35.217665 N, 80.831473 W -> 35.217665 , -80.831473

let map = L.map("map", {
center: [35.217665 , -80.831473],
  zoom: 15
});

//import leaflet quickstart template
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(
  [35.217665 , -80.831473], {
    title: "CPCC Central Campus"
  }
).bindPopup(`<h1>Hello from CPCC!</h1><hr><iframe width="560" height="315" src="https://www.youtube.com/embed/SIOicrto1yw?si=pC7TFcXT7UwsHK7G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
