// =========================
// Happy Birthday Zohreh
// =========================

const openBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const door = document.getElementById("door");
const particles = document.getElementById("particles");

// نامه اول مخفی باشد
letter.style.display = "none";

// باز شدن نامه
openBtn.addEventListener("click", () => {

    door.classList.add("show");

    setTimeout(() => {

        door.classList.remove("show");

        letter.style.display = "flex";

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

});

// =========================
// ذرات بنفش
// =========================

function createParticle() {

    const p = document.createElement("div");

    p.innerHTML = Math.random() > 0.5 ? "💜" : "✨";

    p.style.position = "absolute";
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "-40px";
    p.style.fontSize = (14 + Math.random() * 18) + "px";
    p.style.opacity = "0.8";
    p.style.pointerEvents = "none";

    p.animate(
        [
            {
                transform: "translateY(0px) rotate(0deg)",
                opacity: 0.9
            },
            {
                transform: `translateY(${window.innerHeight + 100}px) rotate(${360 + Math.random()*360}deg)`,
                opacity: 0
            }
        ],
        {
            duration: 7000 + Math.random() * 3000,
            easing: "linear"
        }
    );

    particles.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 10000);

}

// هر ۱.۵ ثانیه فقط یک ذره (بدون لرزش)
setInterval(createParticle, 1500);

// =========================
// نمایش نرم عکس
// =========================

const memory = document.querySelector(".memory img");

if(memory){

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.animate(
                    [
                        {
                            opacity:0,
                            transform:"translateY(40px)"
                        },
                        {
                            opacity:1,
                            transform:"translateY(0)"
                        }
                    ],
                    {
                        duration:1000,
                        fill:"forwards"
                    }
                );

                observer.unobserve(entry.target);

            }

        });

    });

    observer.observe(memory);

}
