let registr = document.querySelector("#registr")
let courseRegistr = document.querySelector(".course-registr")
let registrButton = document.querySelector(".course-registr div button")

registr.addEventListener("click", () => {
    courseRegistr.style.border = "10px solid blue";
    registrButton.style.width = "420px";

    setTimeout(() => {
        courseRegistr.style.border = "";
        registrButton.style.width = "";
    }, 2000);
});