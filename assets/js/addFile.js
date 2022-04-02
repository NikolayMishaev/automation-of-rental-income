const addModalBtn = document.querySelector(".modal-edit-card-object__btn input");
const photoContainer = document.querySelector(".modal-edit-card-object__photo-container");

addModalBtn.addEventListener("change", (e) => {
  const newFile = document.createElement("div");
  const image = document.createElement("img");
  const imageContainer = document.createElement("div");
  const checkboxContainer = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newFile.classList.add("modal-edit-card-object__photo-container-item");
  let file = e.currentTarget.files[0];
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
});
