let map = null;
let marker = null;
let markerArray = [];
let togglerMap = false;
let formMap = document.querySelector(".main-form");

function setMap() {
    togglerMap = true;

    // информация о текущем объекте
    getObjectPoint();

    async function getObjectPoint() {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/todos`
        );
        if (response.ok) {
            let result = await response.json();
            // TODO удалить result
            result = {
                lat: "55.7590447",
                lon: "37.6175600",
            };
            setMarker(result);
            getObjectListPoints(new FormData(formMap));
        }
    }
}
// установить начальную точку
function setMarker(obj) {
    let coord = [+obj.lat, +obj.lon];
    map = L.map("map").setView(coord, 17);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
}

const btnMap = document.querySelector("#btn-map");
const btnList = document.getElementById("btn-list");

btnList.addEventListener("click", () => (togglerMap = false));

btnMap.addEventListener("click", setMap);

let listPoint;

// получить остальные точки
async function getObjectListPoints(form) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: "POST",
        body: form,
    });
    if (response.ok) {
        listPoint = await response.json();
        // TODO удалить listPoint
        listPoint = {
            0: {
                lat: "55.7590447",
                lon: "37.6155600",
                price: 40000,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
            },
            1: {
                lat: "55.7590447",
                lon: "37.614094",
                price: 35555,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
            },
            2: {
                lat: "55.7590447",
                lon: "37.6175600",
                price: 50000,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
            },
            3: {
                lat: "55.7560447",
                lon: "37.6145600",
                price: 30000,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
            },
        };
        setOuterMarkers(listPoint);
    }
}

// установить точки

function setOuterMarkers(list) {
    // удалить старые точки
    if (markerArray.length) {
        markerArray.forEach((v) => map.removeLayer(v));
    }
    for (const key in list) {
        const currentItem = list[key];
        marker = L.marker([+currentItem.lat, +currentItem.lon], {
            icon: myIcon(currentItem.price),
        })
            .addTo(map)
            .bindPopup(tooltip(currentItem));
        markerArray.push(marker);
    }
}
function myIcon(price) {
    return L.divIcon({
        className: "custom-div-icon",
        html: `<h3>${price} р</h3><div class='custom-div-icon__arrow'></div>`,
        iconSize: [98, 40],
        iconAnchor: [50, 52],
    });
}

function tooltip(obj) {
    return `<div class="map__tooltip_current"><div class="map__img"><img src="${obj.photo}" alt="" /></div><div class="map__tooltip-info"><h4>${obj.title}</h4><h5>${obj.price} ₽ в месяц</h5></div></div>`;
}

let btnFilterSubmit = document.querySelector(".main-form__button_type_submit");

btnFilterSubmit.addEventListener("click", (e) => {
    if (!togglerMap) return;
    let formFilters = new FormData(formMap);
    e.preventDefault();
    getObjectListPoints(formFilters);
});
