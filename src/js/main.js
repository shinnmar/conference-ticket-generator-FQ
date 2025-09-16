













//👩🏽‍💻 Happy Programmers' Day 🎉
const gdgCallao = "💙 GDG Callao 💙";

function celebrate() {
  console.log(
    `¡Hola, Comunidad! Hoy celebramos el talento 
    y la pasión por el código.
    ¡Feliz Día, Programadores :)!`
  );
  console.log(
    `Gracias por ser parte 
     de ${gdgCallao}`);
}

celebrate();




const uploadBox = document.getElementById("upload-box");
const fileInput = document.getElementById("avatar");

function handleFile(file) {
  if (file) {
    console.log("file uploaded:", file.name);
  }
}

// click the uploadBox - open input file
uploadBox.addEventListener("click", () => {
  fileInput.click();
});

// select the file from input
fileInput.addEventListener("change", () => {
  handleFile(fileInput.files[0]);
});

//when drag the file above the box
uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.classList.add("dragover");
});

//when you close the box
uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("dragover");
});

//when you drop the file
uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.classList.remove("dragover");

  const file = e.dataTransfer.files[0];
  handleFile(file);
});
