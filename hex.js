const letters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const button = document.querySelector(".btn");
const color = document.querySelector(".color");
button.addEventListener("click", () => {
  let hexletter = "#";
  for (let i = 1; i <= 6; i++) {
    const randomnu=getRandomNumber()
    hexletter += letters[randomnu];

  }

  if (hexletter == "#000000") {
    document.body.style.backgroundColor = "pink";
    color.textContent = hexletter;
  } else {
    document.body.style.backgroundColor = hexletter;
    color.textContent = hexletter;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random()*letters.length);
}
