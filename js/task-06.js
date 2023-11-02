function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input[type=number]");

const startWidth = 30;
const startHeight = 30;
const delta = 10;

function destroyBoxes(){
  boxes.textContent = '';
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = startWidth + i * delta + "px";
    div.style.height = startHeight + i * delta + "px";
    boxes.insertAdjacentElement("beforeend", div);
  }
  input.value = '';
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});
destroyBtn.addEventListener("click", destroyBoxes);
