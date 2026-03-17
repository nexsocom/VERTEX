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


// NAVBAR INTERNAL SCROLL FIX
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href.startsWith('#')) return; // skip externe links
    e.preventDefault();

    let target = document.querySelector(href);
    if(!target) return;

    let offset = 0; // standaard: helemaal bovenaan

    if(href === '#contact'){
      offset = 120; // header hoogte
    } else if(href === '#specialisaties'){
      offset = 0; // speciale fix: grid bovenaan, geen ruimte er boven
      // scroll naar de .specGrid ipv de sectie zelf
      const specGrid = document.querySelector('.specGrid');
      if(specGrid) target = specGrid;
    }

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
