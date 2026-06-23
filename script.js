const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const resultDisplay = document.getElementById("result");

submitBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    resultDisplay.style.color = "red";

    if (name.trim() === "") {
        resultDisplay.textContent = "Name cannot be empty.";
        return;
    }

    if (!email.includes("@")) {
        resultDisplay.textContent = "Enter a valid email.";
        return;
    }

    if (password.length < 6) {
        resultDisplay.textContent = "Password must be at least 6 characters.";
        return;
    }

    resultDisplay.style.color = "green";
    resultDisplay.textContent = "Form submitted successfully!";
});