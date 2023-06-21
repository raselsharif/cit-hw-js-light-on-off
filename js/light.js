


let lightOn=document.querySelector(".lightOn");
let lightOff=document.querySelector(".lightOff");

let light=document.querySelector(".light");

lightOn.addEventListener("click", function(){
    light.src="images/pic_bulbon.gif";
})
lightOff.addEventListener("click", function(){
    light.src="images/pic_bulboff.gif";
})