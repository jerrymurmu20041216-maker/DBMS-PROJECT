console.log("Teacher Dashboard Loaded!");

const activityItems =
    document.querySelectorAll(".activity");

activityItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateX(10px)";
        item.style.transition = "0.3s";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateX(0)";
    });

});