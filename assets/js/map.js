let map = null;
let marker = null;

function myIcon(price) {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<h3>${price} р</h3><div class='custom-div-icon__arrow'></div>`,
    iconSize: [98, 40],
    iconAnchor: [50, 52],
  });
}

function tooltip(obj) {
  //TODO нужнен url картинки
  return `<div class="map__tooltip_current"><div class="map__img"><img src="${"./assets/img/slider-item.jpg"}" alt="" /></div><div class="map__tooltip-info"><h4>${
    obj.title
  }</h4><h5>${obj.price} ₽ в месяц</h5></div></div>`;
}

// ид объекта
const idObjectOnMap = document.querySelector("#map").dataset.id;

// информация о текущем объекте

async function getObjectPoint(id) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (response.ok) {
    let result = await response.json();
    // TODO удалить result
    result = {
      lat: "55.7590447",
      lon: "37.6175600",
      price: 50000,
      title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
    };
    setMarker(result);
  }
}
getObjectPoint(idObjectOnMap);

// получить остальные точки
async function getObjectListPounts() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  if (response.ok) {
    let result = await response.json();
    // TODO удалить result
    result = {
      0: {
        lat: "55.7590447",
        lon: "37.6155600",
        price: 40000,
        photo: "",
        title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
      },
      1: {
        lat: "55.7590447",
        lon: "37.614094",
        price: 35555,
        title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
      },
    };
    setOuterMarkers(result);
  }
}
getObjectListPounts();

// установить начальную точку

function setMarker(obj) {
  let coord = [+obj.lat, +obj.lon];
  map = L.map("map").setView(coord, 17);
  marker = L.marker(coord, { icon: myIcon(obj.price) })
    .addTo(map)
    .bindPopup(tooltip(obj))
    .openPopup();
  L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }).addTo(map);
}

// установить точки

function setOuterMarkers(list) {
  for (const key in list) {
    L.marker([+list[key].lat, +list[key].lon], { icon: myIcon(list[key].price) })
      .addTo(map)
      .bindPopup(tooltip(list[key]));
  }
}
