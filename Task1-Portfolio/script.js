const text = [
    "Web Developer",
    "AIML Student",
    "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

    }

    setTimeout(type,150);

})();

window.onscroll = function(){

    let winScroll =
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrolled =
    (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =
    scrolled + "%";

};