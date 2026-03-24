// ================= HERO PARALLAX =================

const heroContent = document.querySelector(".heroContent");

if (heroContent) {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    heroContent.style.transform = `translateY(${scroll * 0.25}px)`;
    heroContent.style.opacity = 1 - scroll / 500;
  });
}


// ================= VIDEO HOVER =================

// ALLEEN gallery videos hover play
document.querySelectorAll(".cinematicItem video").forEach(video => {

  video.muted = true; // nodig voor autoplay

  video.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(() => {}); // voorkomt errors
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

});



// ================= SERVICE PARALLAX =================

const heroImage = document.querySelector(".serviceHero img");

if (heroImage) {
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    heroImage.style.transform = `translateY(${scroll * 0.35}px)`;
  });
}


// ================= NAVBAR SCROLL =================

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {

    const href = this.getAttribute('href');
    if (!href.startsWith('#')) return;

    e.preventDefault();

    let target = document.querySelector(href);
    if (!target) return;

    let offset = 0;

    if (href === '#contact') {
      offset = 120;
    }

    if (href === '#specialisaties') {
      const specGrid = document.querySelector('.specGrid');
      if (specGrid) target = specGrid;
      offset = 0;
    }

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });

  });
});
