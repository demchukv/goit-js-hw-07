const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const checkInput = () => {
    output.textContent = input.value.trim() === "" ? "Anonymous" : input.value.trim();
}

input.addEventListener('input', checkInput);
