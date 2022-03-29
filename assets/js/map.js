let map = null;
let marker = null;

let myIcon = L.divIcon({
  className: "custom-div-icon",
  html: "<h3>44 520р</h3><div class='custom-div-icon__arrow'></div>",
  iconSize: [98, 40],
  iconAnchor: [15, 42],
});

let cities = {
  Moscow: {
    lat: "55.7522200",
    lon: "37.6155600",
  },
  "Saint-Petersburg": {
    lat: "59.9386300",
    lon: "30.3141300",
  },
  Ekaterinburg: {
    lat: "56.8519000",
    lon: "60.6122000",
  },
};

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
// функция принимает позицию - массив с широтой и долготой
// и сообщение, отображаемое над маркером (tooltip)
function getMap(position, tooltip) {
  // если карта не была инициализирована
  if (map === null) {
    // второй аргумент, принимаемый методом setView - это масштаб (zoom)
    map = L.map("map").setView(position, 15);
  } else {
    // map.flyTo(position);
  }
  L.marker(position, { icon: myIcon })
    .addTo(map)
    .bindPopup(tooltip)
    .openPopup();
  // без этого карта работать не будет
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // добавляем маркер с сообщением
  // L.marker(position, { icon: myIcon })
  //   .addTo(map)
  //   .bindPopup(tooltip)
  //   .openPopup();
}

// получить текущее местоположение

function getPosition() {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
  });
}

document.addEventListener("DOMContentLoaded", getPosition);

function success({ coords }) {
  const { latitude, longitude } = coords;
  const currentPosition = [latitude, longitude];
  // вызываем функцию, передавая ей текущую позицию и сообщение
  getMap(
    currentPosition,
    ' <div class="map__tooltip_current"><div class="map__img"><img src="./assets/img/slider-item.jpg" alt="" /></div><div class="map__tooltip-info"><h4>Москва, Ул. Льва Толстого, дом 23, корп.1</h4><h5>44 287 ₽ в месяц</h5></div></div>'
  );
  getMap(
    [cities.Ekaterinburg.lat, cities.Ekaterinburg.lon],
    ' <div class="map__tooltip_current"><div class="map__img"><img src="./assets/img/slider-item.jpg" alt="" /></div><div class="map__tooltip-info"><h4>Москва, Ул. Льва Толстого, дом 23, корп.1</h4><h5>44 287 ₽ в месяц</h5></div></div>'
  );
}

function error({ message }) {
  console.log(message);
}
const $cities = document.getElementById("cities");
// for (const city in cities) {
//   // создаем кнопку

//   // текстовое содержимое кнопки - название города

//   // получаем широту и долготу
//   const { lat, lon } = cities[city];

//   // записываем название города, широту и долготу
//   // в соответствующие data-атрибуты
//   $button.dataset.city = city;
//   $button.dataset.lat = lat;
//   $button.dataset.lon = lon;

//   // добавляем кнопку в контейнер
//   $cities.append($button);
// }

$cities.addEventListener("click", ({ target }) => {
  // нас интересует только нажатие кнопки

  // получаем название города, широту и долготу из data-атрибутов
  const { city, lat, lon } = target.dataset;
  const position = [lat, lon];
  // вызываем функцию, передавая ей позицию и название города
  getMap(position, city);
});
