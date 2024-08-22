function identifykey(Keyinnerhtml){
    switch (Keyinnerhtml) {
        case "d":
            var s1=new Audio("sounds/s1.mp3");
            s1.play()
            break;
        case "a":
            var s2=new Audio("sounds/s2.mp3");
            s2.play()
            break;
        case "s":
            var s3=new Audio("sounds/s3.mp3");
            s3.play()
            break;
        case "w":
            var s4=new Audio("sounds/s4.mp3");
            s4.play()
            break; 
        case "j":
            var s5=new Audio("sounds/s5.mp3");
            s5.play()
            break; 
        case "k":
            var s6=new Audio("sounds/s6.mp3");
            s6.play()
            break; 
        case "l":
            var s7=new Audio("sounds/s7.mp3");
            s7.play()
            break;
       
        default:
            break;
       } 
}

function animation(Keyinnerhtml){
    var keyword= document.querySelector("."+Keyinnerhtml);
    keyword.classList.add("pressed");

    setTimeout(function(){
        keyword.classList.remove("pressed");},100);
    }


var noButton= document.querySelectorAll(".drum").length;

for (var i=0; i<noButton; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function() {
        var Keyinnerhtml= this.innerHTML;
        identifykey(Keyinnerhtml);
        animation(Keyinnerhtml);
    });

}
document.addEventListener("keypress",function(event){
    var Keyinnerhtml=event.key;
    identifykey(Keyinnerhtml);
    animation(Keyinnerhtml);
})
