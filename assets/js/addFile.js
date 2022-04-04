const addModalBtnContainer = document.querySelector(".modal-edit-card-objec__add-btn");
const addModalBtn = addModalBtnContainer.querySelector("input");
const photoContainer = document.querySelector(".modal-edit-card-object__photo-container");

// логика для отображения файлов с фото
addModalBtn.addEventListener("change", (e) => {
  for (let index = 0; index < e.currentTarget.files.length; index++) {
    let file = e.currentTarget.files[index];
    const newFile = document.createElement("div");
    const image = document.createElement("img");
    const imageContainer = document.createElement("div");
    const checkboxContainer = document.createElement("label");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
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
    setNewInput(addModalBtnContainer, addModalBtn);
  }
});

function setNewInput(btn, input) {
  input.classList.add("modal-edit-card-object__input-file_full");
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "file");
  newInput.setAttribute("multiple", "true");
  newInput.setAttribute("accept", "image/*");
  btn.append(newInput);
}
