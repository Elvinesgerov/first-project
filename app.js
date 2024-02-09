let hiddenCourse = document.querySelector(".hidden-course");
let courseText = document.querySelector(".course-text");
let digitalTechnology = document.querySelector(".digital-technology")
let educationCenter = document.querySelector(".education-center")




courseText.addEventListener("mouseover", () => {
    hiddenCourse.style.display = "flex"
})

courseText.addEventListener("mouseleave", () => {

    hiddenCourse.addEventListener("mouseover", () => {
        hiddenCourse.style.display = "flex"
    })

    hiddenCourse.addEventListener("mouseleave", () => {
        hiddenCourse.style.display = "none"
    })
    hiddenCourse.style.display = "none"
})

educationCenter.addEventListener("mouseover", () => {
    digitalTechnology.style.display = "flex"
})

educationCenter.addEventListener("mouseleave", () => {

    digitalTechnology.addEventListener("mouseover", () => {
        digitalTechnology.style.display = "flex"
    })

    digitalTechnology.addEventListener("mouseleave", () => {
        digitalTechnology.style.display = "none"
    })
    digitalTechnology.style.display = "none"
})