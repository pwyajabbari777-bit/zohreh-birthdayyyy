// =========================
// HAPPY BIRTHDAY ZOHREH
// =========================

const openBtn = document.getElementById("openLetter");
const doorScene = document.getElementById("doorScene");
const hero = document.querySelector(".hero");
const letter = document.getElementById("letterSection");

// =========================
// OPEN LETTER
// =========================

openBtn.addEventListener("click", () => {

    doorScene.classList.add("show");

    setTimeout(() => {
        doorScene.classList.add("open");
    }, 250);

    setTimeout(() => {

        hero.style.display = "none";

        doorScene.classList.remove("show");
        doorScene.classList.remove("open");

        letter.classList.remove("hidden");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1800);

});

// =========================
// FLOATING HEARTS
// =========================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-50px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.opacity=Math.random();

    heart.style.animation=`fall ${5+Math.random()*6}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,700);

// =========================
// HEART ANIMATION
// =========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-30px) rotate(0deg);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// =========================
// PARALLAX
// =========================

window.addEventListener("mousemove",(e)=>{

    const sully=document.querySelector(".sully");
    const boo=document.querySelector(".boo");

    const x=(e.clientX/window.innerWidth-.5)*10;

    const y=(e.clientY/window.innerHeight-.5)*10;

    sully.style.transform=
    `translate(${x}px,${y}px)`;

    boo.style.transform=
    `translate(${-x}px,${-y}px)`;

});
// =========================
// STARS PARALLAX EFFECT
// =========================

const stars = document.getElementById("stars");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    stars.style.transform =
        `translate(${x}px, ${y}px)`;

});

// =========================
// BUTTON GLOW
// =========================

const btn = document.getElementById("openLetter");

setInterval(() => {

    btn.classList.toggle("pulse");

}, 1800);

// =========================
// MAGIC INTRO
// =========================

function flashEffect() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.inset = "0";
    flash.style.background =
        "radial-gradient(circle,#b388ff55,#000000dd)";
    flash.style.zIndex = "9999";
    flash.style.opacity = "0";
    flash.style.transition = ".8s";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        flash.style.opacity = "0";
    }, 900);

    setTimeout(() => {
        flash.remove();
    }, 1700);

}


openBtn.addEventListener("click", flashEffect);
// =========================
// LETTER FADE IN
// =========================

function animateLetter() {

    const items = document.querySelectorAll(".letter-content p");

    items.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";

        setTimeout(() => {

            item.style.transition = "all .8s ease";

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, index * 900);

    });

}

// وقتی نامه باز شد اجرا شود
openBtn.addEventListener("click", () => {

    setTimeout(() => {
        animateLetter();
    }, 2000);

});
// =========================
// SMOOTH PHOTO EFFECT
// =========================

const photo = document.querySelector(".ending-photo img");

if(photo){

window.addEventListener("scroll",()=>{

const rect = photo.getBoundingClientRect();

if(rect.top < window.innerHeight-100){

photo.style.transform="scale(1)";
photo.style.opacity="1";

}else{

photo.style.transform="scale(.92)";
photo.style.opacity=".3";

}

});

}

// =========================
// TITLE EFFECT
// =========================

const title = document.querySelector(".ending-text h1");

if(title){

setInterval(()=>{

title.style.textShadow="0 0 30px #c084fc";

setTimeout(()=>{

title.style.textShadow="0 0 10px #8b5cf6";

},700);

},2000);

    }
