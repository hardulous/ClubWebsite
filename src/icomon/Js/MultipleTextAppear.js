
const text =document.querySelector(".animate-text").children; // selecting all text to show 

const textLength = text.length;
let index =0;
const textInTimer=3000,
      textOutTimer=2800;

function animateText() {
    
    if(index===0){
        text[textLength-1].classList.remove("text-in","text-out");
    }
    else{
        text[index-1].classList.remove("text-in","text-out");
    }

    text[index].classList.add("text-in")

    setTimeout(function(){
        text[index].classList.add("text-out")
    },2800)

    const Id= setTimeout(function () {
        
        if(index === textLength-1){
            index=0
        }
        else{
            index++;
        }

        animateText();

    },3000)  // after every 3 sec new text will appear
}

window.onload = animateText(); // when dom has been made then this animateText() will get executed
