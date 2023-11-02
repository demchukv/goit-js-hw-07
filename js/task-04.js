const form = document.querySelector(".login-form");

const checkFormData = (event) => {
    event.preventDefault();
    if (event.target.elements.email.value.trim() === "" || event.target.elements.password.value.trim() === "") {
        alert("All form fields must be filled in");
        return;
    } else {
        const sendData = {
            email: event.target.elements.email.value.trim(),
            password: event.target.elements.password.value.trim(),
        };
        event.target.reset();
        console.log(sendData);
    }
}

form.addEventListener("submit", checkFormData);