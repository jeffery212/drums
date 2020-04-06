/**
 * This is the drum kit project
 * You are provided with an images folder which contains drum images. 
 * You are required to attache each drum image to each alphabet in the html file (Watch the video to know which button has which image).
 * 
 * You are also provided with a sounds folder.
 * 
 * You are to attach each sound to the images and button in the html.
 * 
 * When you click on each button it should play the curresponding drum sound. 
 * 
 * Also When the curresponding key is pressed on the key board, the drum sound should be made. 
 * 
 * Key to each drum
 * button w = tom-1.mp3
 * button a = tom-2.mp3
 * button s = tom-3.mp3
 * button d = tom-4.mp3
 * button j = kick-bass.mp3
 * button k = snare.mp3
 * button l = crash.mp3
 * 
 * NOTE
 * Codes must be properly commented. 
 * Use of ES6 Syntax is important. 
 */


/*
This section is used to declare the variables
for the audio files to play with so they can
be used in the play function.

Here I made use of some ES6 syntax

Also I set the address/source of the audio file to
each of the variables
*/

let tom2 = new Audio();
tom2.src = "sounds/tom-2.mp3";

let tom1 = new Audio();
tom1.src = "sounds/tom-1.mp3";

let tom3 = new Audio();
tom3.src = "sounds/tom-3.mp3";

let tom4 = new Audio();
tom4.src = "sounds/tom-4.mp3";

let crash = new Audio();
crash.src = "sounds/crash.mp3";

let kick = new Audio();
kick.src = "sounds/kick-bass.mp3";

let snare = new Audio();
snare.src = "sounds/snare.mp3";

/*

Here I declared the functions that will
be used to play the drum sounds.

I made use of the variables I created above

*/

function playtom1(){
    tom1.play();
}

function playtom2(){
    tom2.play();
}

function playtom3(){
    tom3.play();
}

function playtom4(){
    tom4.play();
}

function playcrash(){
    crash.play();
}

function playkick(){
    kick.play();
}

function playsnare(){
    snare.play();
}

/*

The section below is for the creation of the keyboard events
Only the "keydown" occurance was necessary because for this project the "keyhold"
and "keyup" occurances are irrelevant or uneccessary

*/

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(drum) {
	if (drum.keyCode === 65) {
		playtom2();
    }
    
    if (drum.keyCode === 87) {
		playtom1();
    }

    if (drum.keyCode === 83) {
		playtom3();
    }
    
    if (drum.keyCode === 68) {
		playtom4();
    }

    if (drum.keyCode === 74) {
		playcrash();
    }

    if (drum.keyCode === 75) {
		playkick();
    }

    if (drum.keyCode === 76) {
		playsnare();
    }
}
