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
