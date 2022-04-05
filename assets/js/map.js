let map = null;
let marker = null;

function myIcon(price) {
  if (!price) price = 44444;
  return L.divIcon({
    className: "custom-div-icon",
    html: `<h3>${price} р</h3><div class='custom-div-icon__arrow'></div>`,
    iconSize: [98, 40],
    iconAnchor: [50, 52],
  });
}

let myIconClear = L.divIcon({
  className: "custom-div-icon",
  html: "<h3>44 520р</h3><div class='custom-div-icon__arrow'></div>",
  iconSize: [1, 1],
  iconAnchor: [1, 1],
});

function tooltip(obj) {
  return `<div class="map__tooltip_current"><div class="map__img"><img src="${"./assets/img/slider-item.jpg"}" alt="" /></div><div class="map__tooltip-info"><h4>${"Москва, Ул. Льва Толстого, дом 23, корп.1"}</h4><h5>${"44 287"} ₽ в месяц</h5></div></div>`;
}

const googleLayer =
  ("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  });

const openLayer =
  ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

const idObjectOnMap = document.querySelector("#map").dataset.id;

async function getObjectPoint(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (response.ok) {
    let result = await response.json();
    // TODO тут нужны будут координаты массивом
    let coord = [55.7585386, 37.6116878];
    setMarker(coord);
    setOuterMarkers(objectList);
  }
}
getObjectPoint(idObjectOnMap);

async function getObjectListPounts() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
}

let objectList = {
  0: {
    lat: "55.7590447",
    lon: "37.6155600",
    price: 50000,
  },
  1: {
    lat: "55.7590447",
    lon: "37.614094",
    price: 55555,
  },
};

// повесить слой карты

// установить начальную точку

function setMarker(coord) {
  map = L.map("map").setView(coord, 17);
  marker = L.marker(coord, { icon: myIcon(54444) })
    .addTo(map)
    .bindPopup(tooltip())
    .openPopup();
  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);
}

function setOuterMarkers(list) {
  for (const key in list) {
    L.marker([+list[key].lat, +list[key].lon], { icon: myIcon() })
      .addTo(map)
      .on("click", () =>
        L.popup()
          .setLatLng([+list[key].lat, +list[key].lon])
          .setContent(tooltip())
          .openOn(map)
      );
  }
}
