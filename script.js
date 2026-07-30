// Smooth Animation
window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🤍";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.opacity=Math.random();

heart.style.pointerEvents="none";

heart.style.animation=`float ${5+Math.random()*5}s linear forwards`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);

// CSS Animation

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

// Fade on scroll

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

observer.observe(sec);

});

// پایان سورپرایز

window.addEventListener("scroll",()=>{

if(window.innerHeight+window.scrollY>=document.body.offsetHeight-5){

setTimeout(()=>{

alert("🤍\n\nForever & Always\n\nI Love You Zohreh ❤️");

},1000);

}

});
