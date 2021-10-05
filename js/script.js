
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        let buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


function makeSound(key){
    switch (key) {
        case "w":
            let audio = new Audio("sounds/tom-1.mp3");
            break;

        case "a":
            let audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s":
            let audio = new Audio("sounds/tom-3.mp3");
            break;

        case "d":
            let audio = new Audio("sounds/tom-4.mp3");
            break;

        case "j":
            let audio = new Audio("sounds/snare.mp3");
            break;

        case "k":
            let audio = new Audio("sounds/kick-bass.mp3");
            break;
        
        case "l":
            let audio = new Audio("sounds/crash.mp3");    
            break;

        default:
            break;
    }

    audio.play();
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

function buttonAnimation(key) {
    var activeButton = document.querySelector("."+ key);
    activeButton.classList.toggle("pressed");
    setTimeout(() => {
        activeButton.classList.toggle("pressed");
    }, 100);
}
