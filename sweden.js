console.log("js works");

//35.217665 N, 80.831473 W -> 35.217665 , -80.831473

let map = L.map("map", {
center: [59.32938 , 18.643501],
  zoom: 15
});

//import leaflet quickstart template
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.circle([59.328083477763464, 18.091417855626393]), {
      fillColor: 'red',
      color: 'Black',
      radius: 1000
}).addTo(map);

let marker = L.marker(
  [59.32938 , 18.643501], {
    title: "Sweden"
  }
).bindPopup(`<h2>Hello from Sweden!</h2><hr><iframe width="280" height="157" src="https://www.youtube.com/embed/6zEIvZqs0-Y?si=HOsw05DyyuFa2DVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
