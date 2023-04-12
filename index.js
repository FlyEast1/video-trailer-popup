const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove
    ("active");
})
// we add an event listener to our btnEl to remove the active//

closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})
// this event listener adds the active to our class of trailer again. when clicking the x we close the video and videoEl.pause pauses the video at where it closed. videoEl.currentTime=0 sets the video back to the initial start point, if you remove the videoEl.pause then the video autostarts when clicked//