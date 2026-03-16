// HERO PARALLAX

window.addEventListener("scroll",()=>{

const heroContent = document.querySelector(".heroContent")

let scroll = window.scrollY

heroContent.style.transform = `translateY(${scroll*0.25}px)`

heroContent.style.opacity = 1 - scroll/500

})




// VIDEO HOVER PLAY

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>{

video.play()

})

video.addEventListener("mouseleave",()=>{

video.pause()

})

})
