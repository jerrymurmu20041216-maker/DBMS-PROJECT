
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    
    if (email.includes("teacher")) {
        window.location.href = "teacher-dashboard.html";
    } else {
        window.location.href = "student-dashboard.html";
    }

});