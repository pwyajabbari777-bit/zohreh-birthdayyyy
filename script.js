// ==========================
// OPEN LETTER
// ==========================

const openBtn = document.getElementById("openLetter");
const letterSection = document.getElementById("letterSection");

openBtn.addEventListener("click", () => {

    // نمایش بخش نامه
    letterSection.classList.add("show");

    // اسکرول نرم
    setTimeout(() => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 200);

    // باز شدن در
    setTimeout(() => {

        letterSection.classList.add("open");

    }, 700);

});


// ==========================
// ENDING HUG ANIMATION
// ==========================

const ending = document.querySelector(".ending-hug");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            ending
