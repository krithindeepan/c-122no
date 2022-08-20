function setup() {
    canvas=createCanvas(900,600)
}
var SpeechRecognition=window.webkitSpeechRecognition
recognition=new SpeechRecognition()
x=0
y=0
to_number=0
draw_apple=""
function start() {
    document.getElementById("status").innerHTML="System Is Listening To You Please Speak"
    recognition.start()
}
recognition.onresult=function (event) {
    console.log(event)
        content=event.results[0][0].transcript
        console.log(content)
        to_number=Number(content)
        if(Number.isInteger(to_number)) {document.getElementById("status").innerHtml="Started Drawing Apple "
        draw_apple="set"
    }
       
           
            document.getElementById("status").innerHtml="Started Drawing Apple " 
    
}
function draw() {
    console.log(x,y)
    if(draw_apple=="set") {
        for(i=1;i<=to_number;i++)
        {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        draw_apple=""
        }
    }
}