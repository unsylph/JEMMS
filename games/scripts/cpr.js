//Initalize subject to placeholder until object selected
var subject = document.getElementById("placeholder");
//For convenience in code
const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
//Set up position to make sure dragged objects do not snap to mouse
var pos = [0,0];
//Call from prep page html to start game
function startGame(){

}
//Check if mouse over object on click or release
function checkCollisionPick(element){
    subject = element; 
}
function checkCollisionDrop(){
    if(document.elementsFromPoint(pos[0], pos[1]).includes(document.getElementById(subject.id + "Area"))){
        subject.style.left = document.getElementById(subject.id + "Area").style.left;
        subject.style.top = document.getElementById(subject.id + "Area").style.top;
    }
    subject = document.getElementById("placeholder");
}
const mousemove = (evnt)=>{
    subject.style.left = (parseInt(subject.style.left) + (evnt.pageX - pos[0])) +"px";
    pos[0] = evnt.pageX;
    subject.style.top = (parseInt(subject.style.top) + (evnt.pageY - pos[1])) +"px";
    pos[1] = evnt.pageY;
}
//Set up dragging and dropping
document.addEventListener("mousemove", mousemove);
pad1.addEventListener("mousedown", function(){checkCollisionPick(this);})
document.getElementById("pad1").addEventListener("mouseup", function(){checkCollisionDrop();})
document.getElementById("pad2").addEventListener("mousedown", function(){checkCollisionPick(this);})
document.getElementById("pad2").addEventListener("mouseup", function(){checkCollisionDrop();})
