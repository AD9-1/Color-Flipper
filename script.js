const colors = ["black", "red", "green", "white", "purple"];
const color = document.querySelector(".color");
const h2=document.querySelector("h2")
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  if (randomNumber == 0) {
    h2.style.backgroundColor = "white";
    h2.style.color="black"
    document.body.style.backgroundColor = colors[randomNumber];
  } 
  else{ document.body.style.backgroundColor = colors[randomNumber];
    h2.style.backgroundColor = "black";
    h2.style.color="wheat"
}
  color.textContent = colors[randomNumber];
});
const getRandomNumber = () => {
  const random = Math.floor(Math.random() * colors.length);
  return random;
};
