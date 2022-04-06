const addModalBtnContainer = document.querySelectorAll(".modal-edit-card-object__add-btn");
const photoContainer = document.querySelectorAll(".modal-edit-card-object__photo-container");
const modalObj = document.querySelector(".modal-edit-card-object");
let idObj = modalObj.dataset.objectid;

async function sendPhoto(formData, file, indexContainer) {
  //TODO поменять url
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idObj}`, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    addPhotoContainer(file, result.id, indexContainer);
  } else {
    //TODO исправить после смены url
    alert("Ошибка загрузки файла(Пока не поменян url так и должно быть)");
  }
}
// логика для отображения файлов с фото

for (let indexBtn = 0; indexBtn < addModalBtnContainer.length; indexBtn++) {
  addModalBtnContainer[indexBtn].addEventListener("change", (e) => {
    for (let index = 0; index < e.target.files.length; index++) {
      let file = e.target.files[index];
      let formData = new FormData();
      formData.append("photo", file);
      //TODO когда будет запрос  - убрать вызов функции
      addPhotoContainer(file, "todos", indexBtn);
      //
      sendPhoto(formData, file, indexBtn);
    }
  });
}

// логика для отображения нового инпута

function addPhotoContainer(file, idPhoto, indexContainer) {
  const newFile = document.createElement("div");
  const imageContainer = document.createElement("div");
  const checkboxContainer = document.createElement("label");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.dataset.photoid = idPhoto;
  newFile.classList.add("modal-edit-card-object__photo-container-item");

  const media = createContainerForInput(indexContainer);

  // предосмотр фото
  let reader = new FileReader();
  reader.onloadend = function () {
    media.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    media.src = "";
  }
  imageContainer.append(media);
  checkboxContainer.textContent = file.name;
  imageContainer.classList.add("modal-edit-card-object__img");
  checkboxContainer.classList.add("checkbox-container");
  checkbox.classList.add("checkbox-container__checkbox");
  newFile.append(imageContainer);
  checkboxContainer.prepend(checkbox);
  newFile.append(checkboxContainer);
  photoContainer[indexContainer].append(newFile);
  setNewInput(addModalBtnContainer[indexContainer]);
}

function createContainerForInput(idx) {
  let element;
  // Проверить на видео
  if (idx === 2) {
    element = document.createElement("video");
    element.controls = "true";
  } else {
    element = document.createElement("img");
  }
  return element;
}

function setNewInput(btn) {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "file");
  newInput.setAttribute("multiple", "true");
  newInput.setAttribute("accept", "image/*");
  btn.append(newInput);
}

// логика для удаления фото

const deleteBtnModalEditObject = document.querySelectorAll(".modal-edit-card-object__btn_delete");

for (let index = 0; index < deleteBtnModalEditObject.length; index++) {
  deleteBtnModalEditObject[index].addEventListener("click", () => deletePhoto(index));
}

// запрос на удаление картинки
function deletePhoto(idx) {
  const deletePhotoList = photoContainer[idx].querySelectorAll(
    ".checkbox-container__checkbox:checked"
  );
  for (let index = 0; index < deletePhotoList.length; index++) {
    const photo = deletePhotoList[index];
    const photoId = photo.dataset.photoid;
    deleteFetch(idObj, photoId, photo);
  }
}

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
function closeModalWindow(modal, e) {
  {
    if (e.target.closest(".modal__close-btn") || e.target.closest(".modal__cancel-btn")) {
      modal.style.display = "none";
    }
  }
}

modalObj.addEventListener("click", (e) => closeModalWindow(modalObj, e));
