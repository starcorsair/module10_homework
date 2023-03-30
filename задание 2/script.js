const button = document.querySelector("#btn");
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
button.addEventListener("click", () => {
  alert(
    `Ширина вашего экрана: ${screenWidth}, высота вашего экрана: ${screenHeight}`
  );
});
