/*

Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. 
Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. 
Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

Розміри першого <div> елемента мають бути 30px на 30px.
Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

На що буде звертати увагу ментор при перевірці:
Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися
*/

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
