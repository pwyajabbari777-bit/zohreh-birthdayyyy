// ===============================
// Happy Birthday Zohreh
// ===============================

// ساخت قلب‌های شناور
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💜";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);

// اسکرول به نامه

const btn = document.querySelector(".btn");

const letter = document.querySelector(".letter");

btn.addEventListener("click",()=>{

    letter.scrollIntoView({

        behavior:"smooth"

    });

});

// ظاهر شدن نرم نامه

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0px)"}
],
{
duration:1200,
fill:"forwards"
}
);

}

});

});

observer.observe(letter);
// =========================
// Music Player
// =========================

const musicButton = document.querySelector(".musicBtn");
const music = document.getElementById("birthdayMusic");

if(musicButton && music){

    musicButton.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            musicButton.innerHTML="⏸ توقف آهنگ";

        }else{

            music.pause();

            musicButton.innerHTML="🎧 پخش آهنگ";

        }

    });

}
