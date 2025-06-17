var process = {};

const delay = ms => new Promise(res => setTimeout(res, ms));
function hover(starting, elementId){
    let element = document.getElementById(elementId);
    if(!(elementId in process)){
        process[elementId] = [element, 254, (starting)?-1:1, true];
        changing(elementId);
    }else{
        process[elementId][2] = (starting)?-1:1
        if(!process[elementId][3]){
                process[elementId][3] = true;
                changing(elementId);
        }
    }
}

async function changing(elementId){
    let elementList = process[elementId]
    elementList[1] = (elementList[2] == -1)? 254:201;
    while(!(elementList[1] <= 200 || elementList[1] >= 255)){
        elementList[1] += elementList[2];
        elementList[0].style.backgroundColor = "rgb(" + elementList[1] + ", 0, 0)";
        await delay(5);
    }
    elementList[3] = false;
}
