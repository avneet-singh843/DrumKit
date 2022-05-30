// CHECKING FOR BUTTON CLICK
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", gotclicked);
}
function gotclicked(){                          //NEW FUNCTION MADE FOR addEventListener
  var buttoninnerHTML = this.innerHTML;
  makeSound(buttoninnerHTML);
  addAnimation(buttoninnerHTML);
}

// BUTTON KEYPRESS
document.addEventListener("keydown", function(){  //ANONYMOUS FUNCTION CALLED
  makeSound(event.key);
  addAnimation(event.key);
});


// GETTING SOUND
function makeSound(press){
  switch (press) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;

    case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
      break;

    case "l":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;

    default:console.log(buttoninnerHTML);
  }
}

function addAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

// function itsMe(){
//   console.log(this.style.color = "white");
// }
