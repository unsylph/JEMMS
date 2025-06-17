var process = {};
function hover(starting, elementId){
    let element = document.getElementById(elementId);
    process[elementId] = [element, 255, (starting)?-1:1];
    if(starting){element.style.backgroundColor = "rgb(200,0,0)";}
    else{element.style.backgroundColor = "red";}
}
