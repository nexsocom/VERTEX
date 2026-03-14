// Loader
window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".loader").style.display="none";
    },1500);
});

// Scroll to work section
document.querySelector(".scrollBtn").addEventListener("click", () => {
    document.getElementById("work").scrollIntoView({behavior:"smooth"});
});

// Scroll to contact
document.querySelectorAll(".contactBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    });
});

// Hero scroll animation (subtle parallax)
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.heroContent h1');
    const scrollY = window.scrollY;
    heroText.style.transform = `translateY(${scrollY * 0.3}px)`;
    heroText.style.opacity = `${1 - scrollY / 800}`;
});

// Video hover play
document.querySelectorAll(".videoCard video").forEach(video=>{
    video.addEventListener("mouseenter",()=>{video.play()});
    video.addEventListener("mouseleave",()=>{video.pause()});
});
