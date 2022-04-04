const addModalBtnContainer = document.querySelector(".modal-edit-card-object__add-btn");
const photoContainer = document.querySelector(".modal-edit-card-object__photo-container");
const modalObj = document.querySelector(".modal-edit-card-object");
let idObj = modalObj.dataset.objectid;

async function sendPhoto(formData, file, idObj) {
  //TODO поменять url
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idObj}`, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    addPhotoContainer(file, result.id);
  } else {
    //TODO исправить после смены url
    alert("Ошибка загрузки файла(Пока не поменян url так и должно быть)");
  }
}
// логика для отображения файлов с фото
addModalBtnContainer.addEventListener("change", (e) => {
  for (let index = 0; index < e.target.files.length; index++) {
    let file = e.target.files[index];
    let formData = new FormData();
    formData.append("photo", file);
    //TODO когда будет запрос  - убрать вызов функции
    addPhotoContainer(file);
    //
    sendPhoto(formData, file, idObj);
  }
});
// логика для отображения нового инпута

function addPhotoContainer(file, idPhoto) {
  const newFile = document.createElement("div");
  const image = document.createElement("img");
  const imageContainer = document.createElement("div");
  const checkboxContainer = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.dataset.photoid = idPhoto;
  newFile.classList.add("modal-edit-card-object__photo-container-item");
  // предосмотр фото
  let reader = new FileReader();
  reader.onloadend = function () {
    image.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    image.src = "";
  }
  imageContainer.append(image);
  checkboxContainer.textContent = file.name;
  imageContainer.classList.add("modal-edit-card-object__img");
  checkboxContainer.classList.add("checkbox-container");
  checkbox.classList.add("checkbox-container__checkbox");
  newFile.append(imageContainer);
  checkboxContainer.prepend(checkbox);
  newFile.append(checkboxContainer);
  photoContainer.append(newFile);
  setNewInput(addModalBtnContainer);
}

function setNewInput(btn) {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "file");
  newInput.setAttribute("multiple", "true");
  newInput.setAttribute("accept", "image/*");
  btn.append(newInput);
}

// логика для удаления фото

const deleteBtnModalRditObject = document.querySelector(".modal-edit-card-object__btn_delete");

deleteBtnModalRditObject.addEventListener("click", deletePhoto);
// запрос на удаление картинки
function deletePhoto() {
  const deletePhotoList = photoContainer.querySelectorAll(".checkbox-container__checkbox:checked");
  async function deleteFetch(idObj, idPhoto, photo) {
    //TODO поменять url
    let response = await fetch(`https://jsonplaceholder.typicode.com/${idPhoto}/${idObj}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const element = photo.closest(".modal-edit-card-object__photo-container-item");
      element.remove();
    } else {
      alert("Ошибка удаления файлов");
    }
  }
  for (let index = 0; index < deletePhotoList.length; index++) {
    const photo = deletePhotoList[index];
    const photoId = photo.dataset.photoid;
    deleteFetch(idObj, photoId, photo);
  }
}
