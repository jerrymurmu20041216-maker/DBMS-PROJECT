// Create Class
document.querySelector(".top-bar button:first-child")
.addEventListener("click", function () {

    let className = prompt("Enter class name:");

    if (className) {
        alert("Class '" + className + "' created successfully!");
    }
});


// Join Class
document.querySelector(".top-bar button:last-child")
.addEventListener("click", function () {

    let code = prompt("Enter class code:");

    if (code) {
        alert("Joined class with code: " + code);
    }
});


// Open class cards
let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        let subject = card.querySelector("h3").innerText;

        alert("Opening " + subject + " class...");
    });

});


// Profile button
document.getElementById("profile")
.addEventListener("click", function(event) {

    event.preventDefault();

    alert("Profile page coming soon!");
});


// Navigation links
document.querySelectorAll("nav a")
.forEach(function(link) {

    link.addEventListener("click", function(event) {

        if (this.id !== "profile") {
            event.preventDefault();
            alert(this.innerText + " page is under development.");
        }

    });

});