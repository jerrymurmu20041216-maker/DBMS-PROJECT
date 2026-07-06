
const form = document.getElementById("courseForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const courseName =
        document.getElementById("courseName").value;

    alert(`Course "${courseName}" created successfully!`);

    form.reset();

});