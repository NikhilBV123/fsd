document.getElementById("myForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    if (!username || !email || !password) {

        error.textContent = "All fields are required.";

    }
    else if (!email.includes("@") || !email.includes(".")) {

        error.textContent = "Invalid email format.";

    }
    else if (password.length < 6) {

        error.textContent = "Password must be 6 characters.";

    }
    else {

        error.textContent = "";
        alert("Form submitted successfully!");

    }

});