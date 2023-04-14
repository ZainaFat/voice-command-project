x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "System has started drawing apple";
        draw_apple="set";
    }else{
        document.getElementById("status").innerHTML = "System has not recognised a number";
    }

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas = createCanvas(screen_width-150,screen_height-150);
 canvas.position(30,110);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number+"Apples Drawn";
    speak();
    draw_apple = "";
    for(i = 1;1<=to_number;i++){
     x=Math.floor(Math.random()*700);
     y=Math.floor(Math.random()*400);
     image(apple,x,y,50,50);

    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}



screen_width = 0;
screen_height = 0;
apple = "";
speak_data="";
to_number="";

function preload(){
    apple = loadImage('apple.png');
}

