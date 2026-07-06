const deleteButtons =
    document.querySelectorAll(".delete-btn");

deleteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
            confirm("Delete this course?");

        if(answer){

            button.closest(".course-card").remove();

        }

    });

});