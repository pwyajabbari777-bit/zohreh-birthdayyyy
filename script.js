// ===============================
// Happy Birthday Zohreh
// Script.js
// ===============================

// وقتی صفحه کامل لود شد
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===============================
// دکمه هدیه
// ===============================

const btn = document.querySelector(".btn");
const intro = document.getElementById("intro-overlay");
const gift = document.getElementById("giftAnimation");
const letter = document.getElementById("letter");

if (btn) {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        // نمایش پیام اول
        if (intro) {

            intro.classList.add("show");

            setTimeout(() => {

                intro.classList.remove("show");

            }, 2500);

        }

        // نمایش انیمیشن هدیه
        if (gift) {

            setTimeout(() => {

                gift.classList.add("show");

            }, 2600);

            setTimeout(() => {

                gift.classList.remove("show");

            }, 5600);

        }

        // اسکرول به نامه
        setTimeout(() => {

            if (letter) {

                letter.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }, 5800);

    });

}

// ===============================
// قلب های متحرک
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);

// ===============================
// نمایش نرم سک
