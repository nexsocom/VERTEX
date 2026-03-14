// loader animation

window.addEventListener("load", function(){

setTimeout(function(){

document.querySelector(".loader").style.display="none"

},2000)

})


// scroll

function scrollToWork(){

document.getElementById("work").scrollIntoView({

behavior:"smooth"

})

}



// video hover autoplay

const videos = document.querySelectorAll(".videoCard video")

videos.forEach(video=>{

video.addEventListener("mouseenter",()=>{

video.play()

})

video.addEventListener("mouseleave",()=>{

video.pause()

})

})
