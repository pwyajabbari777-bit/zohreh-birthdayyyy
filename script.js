// ==========================
// HAPPY BIRTHDAY ZOHREH
// ==========================

const openBtn = document.getElementById("openLetter");
const doorScene = document.getElementById("doorScene");
const letterSection = document.getElementById("letterSection");

// باز شدن نامه
openBtn.addEventListener("click", () => {

    doorScene.classList.add("show");

    setTimeout(() => {
        doorScene.classList.add("open");
    }, 300);

    setTimeout(() => {
        doorScene.classList.remove("show");
        doorScene.classList.remove("open");

        document.querySelector(".hero").style.display = "none";

        letterSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1800);

});

// ==========================
// HEARTS
// ==========================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "absolute";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-40px";

    heart.style.fontSize = (16 + Math.random()*18) + "px";

    heart.style.opacity = Math.random();

    heart.style.animation =
        `fall ${6+Math.random()*5}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,700);

// ==========================
// STYLE FOR HEARTS
// ==========================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{

transform:translateY(-20px) rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ==========================
// PARALLAX
// ==========================

window.addEventListener("mousemove",(e)=>{

    const sully=document.querySelector(".sully");
    const boo=document.querySelector(".boo");

    const x=(e.clientX/window.innerWidth-.5)*8;
    const y=(e.clientY/window.innerHeight-.5)*8;

    sully.style.transform=
    `translate(${x}px,${y}px)`;

    boo.style.transform=
    `translate(${-x}px,${-y}px)`;

});
