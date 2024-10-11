//these functions display additional information for players
function xOne(){ 
    alert("The RSA is comprised of the former United States after 23 coastal states became uninhabitable. Chicago, IL, was established as the new capital.");
}

function xTwo(){
    alert("In the desperate circumstances of the 'Washington Collapse' a handful of para-military organisations, chief among them the 'Dogs of War', and '2nd Coming' began securing former RSA assets in order to secure control over the states.")
}

function xThree(){
    alert("Formally recognised as Feskaudian, named for Nina Feskau; the chief scientist who identified it, this mineral is highly diverse. However, it is thought to be extremely rare in Mars' geological makeup.")
}

function xFour(){
    alert("Cephaloforms are similar to Earth's cephalopods. However they are significantly larger, and have needle-like barbs on their tentacles instead of suction cups.");
}

function xFive(){
    alert("Misidentified as a virus by panicked pathologists, Kosong Ni is in fact a swarm of microscopic organisms that break down organic matter to sludge, leaving people and animals as brown puddles on the ground");
}

function xSix(){
    alert("The Quantum Vacuum Thruster has been a hypothetical since the early 2000's, but the controversies surrounding it prevented its development until now.")
}

//function for option buttons
function route(page, dest, url){
    document.getElementById(dest).style.display='block'; document.getElementById(page).style.display='none';
    document.body.style.backgroundImage = "url(" + url + ")";
    var audio = document.getElementById("beep");
    audio.play();

}

//setting volume / volume button functions
var song = document.getElementById("music");
var vol = 0.5;

function volUp(){
    vol += 0.1;
    song.volume = vol;
}

function volDown(){
    vol -= 0.1;
    song.volume = vol;
}

function mute(){
    vol = 0;
    song.volume = vol;
}