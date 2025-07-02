var jumpPower = 10;

//Call from prep page html to start game
function startGame(){
    //Manage all key presses
    document.body.onKeyDown = function(e) {
            if(e.key == " "){
                    jump();
            }
    }
}
//Check for each frame
//Height necessary to determine roation speed
function jump(){
    //Momentum will be decreased by 1 until hit ground where function will stop
    let momentum = jumpPower;
}
//Avoid calling function for all objects, only closest
function checkCollision(object){

}
//For any death events
function restart(){

}
//Move onto next game, open next game prep page
function endLevel(){

}
