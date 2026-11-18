// Select elements
const stars = document.querySelectorAll("#starRating span");
const ratingValue = document.getElementById("ratingValue");
const feedbackForm = document.getElementById("feedbackForm");
const status = document.getElementById("status");

// Star Rating
stars.forEach((star) => {

    star.addEventListener("click", function () {

        let rating = this.getAttribute("data-value");
        ratingValue.value = rating;

        stars.forEach((s) => {
            s.classList.remove("selected");
        });

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add("selected");
        }

    });

});

// Form Submit
feedbackForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (ratingValue.value === "") {

        alert("Please select a rating.");
        return;

    }

    status.textContent = "Thank you for your feedback!";

    feedbackForm.reset();

    ratingValue.value = "";

    stars.forEach((star) => {
        star.classList.remove("selected");
    });

});