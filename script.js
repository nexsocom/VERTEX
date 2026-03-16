// HERO PARALLAX

const heroContent = document.querySelector(".heroContent");

if(heroContent){

window.addEventListener("scroll",()=>{

let scroll = window.scrollY;

heroContent.style.transform = `translateY(${scroll*0.25}px)`;
heroContent.style.opacity = 1 - scroll/500;

});

}



// VIDEO HOVER PLAY

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>video.play());
video.addEventListener("mouseleave",()=>video.pause());

});



// SERVICE PAGE PARALLAX

const heroImage = document.querySelector(".serviceHero img");

if(heroImage){

window.addEventListener("scroll",()=>{

const scroll = window.scrollY;

heroImage.style.transform = `translateY(${scroll*0.35}px)`;

});

}
