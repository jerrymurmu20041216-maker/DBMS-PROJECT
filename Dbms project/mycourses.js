

const searchInput = document.getElementById("searchInput");
const courses = document.querySelectorAll(".course-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    courses.forEach(course => {

        const title =
            course.querySelector("h2").textContent.toLowerCase();

        if (title.includes(value)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });

});




const buttons = document.querySelectorAll(".course-card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const courseName =
            button.parentElement.querySelector("h2").textContent;

        alert(`Opening ${courseName}...`);

       

    });

});