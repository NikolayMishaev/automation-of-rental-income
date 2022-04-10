let map = null;
let marker = null;
let markerArray = [];

function setMap() {
    if (map !== null) return;
    const idObjectOnMap = document.querySelector("#map").dataset.id;

    // информация о текущем объекте
    getObjectPoint(idObjectOnMap);

    async function getObjectPoint(id) {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        if (response.ok) {
            let result = await response.json();
            // TODO удалить result
            result = {
                lat: "55.7590447",
                lon: "37.6175600",
            };
            setMarker(result);
            getObjectListPoints();
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

btnMap.addEventListener("click", setMap);

let listPoint;

// получить остальные точки
async function getObjectListPoints() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
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
                cost: 60000,
                street: "Льва Толстого",
                metro: "Академическая",
                footer: false,
                spaceSize: 50,
                city: "Москва",
                type: false,
                floor: 5,
                classification: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                },
                repair: false,
                state: false,
            },
            1: {
                lat: "55.7590447",
                lon: "37.614094",
                price: 35555,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
                cost: 60000,
                street: "Льва Толстого",
                metro: "Академическая",
                footer: false,
                spaceSize: 50,
                city: "Москва",
                type: false,
                floor: 6,
                classification: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                },
                repair: false,
                state: true,
            },
            2: {
                lat: "55.7590447",
                lon: "37.6175600",
                price: 50000,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
                cost: 60000,
                street: "Льва Толстого",
                metro: "Академическая",
                footer: false,
                spaceSize: 50,
                city: "Москва",
                type: false,
                floor: 6,
                classification: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                },
                repair: false,
                state: false,
            },
            3: {
                lat: "55.7560447",
                lon: "37.6145600",
                price: 30000,
                photo: "./assets/img/slider-item.jpg",
                title: "Москва, Ул. Льва Толстого, дом 23, корп.1",
                cost: 60000,
                street: "Льва Толстого",
                metro: "Академическая",
                footer: false,
                spaceSize: 50,
                city: "Москва",
                type: false,
                floor: 6,
                classification: {
                    0: true,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                },
                repair: false,
                state: false,
            },
        };
        getFilerValues();
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
    e.preventDefault();
    const mapDisplay = document
        .querySelector(".main__map")
        .classList.contains("mix-display-none");
    if (mapDisplay) return;
    getFilerValues();
});

function getFilerValues() {
    let filters = {
        adress: {
            title: "",
            city: "",
            street: "",
            metro: "",
        },
        spaceSize: {
            from: 0,
            to: 0,
        },
        cost: {
            from: 0,
            to: 0,
        },
        price: {
            from: 0,
            to: 0,
        },
        type: {
            0: false,
            1: false,
            2: false,
        },
        floor: {
            from: 0,
            to: 0,
        },
        classification: {
            main: "",
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
        },
        repair: {
            0: false,
            1: false,
        },
        state: {
            0: false,
            1: false,
        },
        footer: {
            0: false,
            1: false,
        },
    };

    filters.adress.city = document.getElementById(
        "main-form-adress-city"
    ).value;
    filters.adress.street = document.getElementById(
        "main-form-adress-street"
    ).value;
    filters.adress.metro = document.getElementById(
        "main-form-adress-underground"
    ).value;
    const fromToList = document.querySelectorAll(
        ".main-form__input_style_two-column"
    );
    filters.spaceSize.from = +fromToList[0].value;
    filters.spaceSize.to = +fromToList[1].value;
    filters.cost.from = +fromToList[2].value;
    filters.cost.to = +fromToList[3].value;
    filters.price.from = +fromToList[4].value;
    filters.price.to = +fromToList[5].value;
    const checkboxList = document.querySelectorAll(
        ".main-form__input_type_checkbox"
    );
    filters.type[0] = checkboxList[0].checked;
    filters.type[1] = checkboxList[1].checked;
    filters.type[3] = checkboxList[2].checked;
    filters.floor.from = +fromToList[6].value;
    filters.floor.to = +fromToList[7].value;
    filters.classification.main = document.getElementById(
        "main-form-filter-input-change-class"
    ).value;
    filters.classification[0] = checkboxList[3].checked;
    filters.classification[1] = checkboxList[4].checked;
    filters.classification[2] = checkboxList[5].checked;
    filters.classification[3] = checkboxList[6].checked;
    filters.classification[4] = checkboxList[7].checked;
    filters.classification[5] = checkboxList[8].checked;
    filters.repair[0] = checkboxList[9].checked;
    filters.repair[1] = checkboxList[10].checked;
    filters.state[0] = checkboxList[11].checked;
    filters.state[1] = checkboxList[12].checked;
    filters.footer[0] = checkboxList[13].checked;
    filters.footer[1] = checkboxList[14].checked;

    let neWlistPoint = Object.keys(listPoint).map((k) => listPoint[k]);
    neWlistPoint = neWlistPoint.filter((point) => {
        return (
            point.price >= filters.price.from &&
            (filters.price.to ? point.price <= filters.price.to : true) &&
            point.cost >= filters.cost.from &&
            (filters.cost.to ? point.cost <= filters.cost.to : true) &&
            (filters.adress.street
                ? point.street === filters.adress.street
                : true) &&
            (filters.adress.metro
                ? point.metro === filters.adress.metro
                : true) &&
            (filters.adress.title
                ? point.title === filters.adress.title
                : true) &&
            (filters.adress.city ? point.city === filters.adress.city : true) &&
            (filters.spaceSize.to
                ? point.spaceSize <= filters.spaceSize.to
                : true) &&
            point.floor >= filters.floor.from &&
            (filters.floor.to ? point.floor <= filters.floor.to : true) &&
            point.spaceSize >= filters.spaceSize.from &&
            (filters.type[0] === point.type ||
                filters.type[1] === point.type ||
                filters.type[2] === point.type) &&
            (filters.classification.main
                ? point.classification[0] === filters.classification[0] &&
                  point.classification[1] === filters.classification[1] &&
                  point.classification[2] === filters.classification[2] &&
                  point.classification[3] === filters.classification[3] &&
                  point.classification[4] === filters.classification[4] &&
                  point.classification[5] === filters.classification[5]
                : true) &&
            (point.repair === filters.repair[0] ||
                point.repair !== filters.repair[1]) &&
            (point.state === filters.state[0] ||
                point.state !== filters.state[1]) &&
            (point.footer === filters.footer[0] ||
                point.footer === filters.footer[1])
        );
    });
    setOuterMarkers(neWlistPoint);
}
