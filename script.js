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

document.querySelector('a[href="#specialisaties"]').addEventListener('click', function(e){
  e.preventDefault();
  const target = document.querySelector('.specGrid');
  window.scrollTo({
    top: target.offsetTop - 20, // pas dit getal aan voor wat ruimte boven de cards
    behavior: 'smooth'
  });
});

}

// CONTACT SCROLL FIX (optioneel, blijft 120px offset)
const contactLink = document.querySelector('a[href="#contact"]');
const contactSection = document.querySelector('#contact');

if (contactLink && contactSection) {
  contactLink.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
      top: contactSection.offsetTop - 120, // ruimte voor header
      behavior: 'smooth'
    });
  });
}
