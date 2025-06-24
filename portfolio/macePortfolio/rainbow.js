var body = document.getElementById("rainbow");
var rgb = [255, 0, 0];
var mode = [true, 1];
const delay = ms => new Promise(res => setTimeout(res, ms));
async function beginRainbow(){while(true){await rainbowIt(); await delay(10);}}
function rainbowIt(){
    if(mode[0]){
        rgb[mode[1]]+=1;
        if(rgb[mode[1]]>=255){mode[0]=false;}
    } else {
        rgb[(mode[1]==0)?2:mode[1]-1]-=1;
        if(rgb[(mode[1]==0)?2:mode[1]-1]<=0){mode=[true,(mode[1]==2)?0:mode[1]+1];}
    }
    body.style.background = "rgb("+rgb[0]+", "+rgb[1]+", " + rgb[2]+")";
    body.style.color = "rgb("+(255-rgb[0])+", "+(255-rgb[1])+", "+(255-rgb[2])+")";
}
