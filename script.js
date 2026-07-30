window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// دکمه هدیه
const giftBtn = document.querySelector(".btn");
const overlay = document.getElementById("intro-overlay");
const letter = document.getElementById("letter");

if (giftBtn && overlay && letter) {
    giftBtn.addEventListener("click", function (e) {
        e.preventDefault();

        overlay.classList.add("show");

        setTimeout(() => {
            overlay.classList.remove("show");

            letter.scrollIntoView({
                behavior: "smooth"
            });
        }, 3000);
    });
}

// قلب‌ها
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation = `fall ${4 + Math.random() * 3}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 500);

// استایل انیمیشن قلب
const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(-50px) rotate(0deg);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);

// نمایش نرم بخش‌ها
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// پیام پایان
let showed = false;

window.addEventListener("scroll", () => {

    if (showed) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {

        showed = true;

        setTimeout(() => {

            alert("🤍\n\nForever & Always\n\nI Love You Zohreh ❤️");

        }, 800);

    }

});
