//Put id of each button, will connect associated content
var locations = ["hider", "aboutMe", "introduction", "experience", "abilities", "languages", "skills"]
for(let x = 0; locations.length > x; x++){
    let item = document.getElementById(locations[x]);
    item.addEventListener("input", function(){
            document.getElementById(locations[x] + "Content").style.display = (this.checked)?"grid":"none";
            //Hide all other radios as they do not self-update
            if(this.type == "radio"){
                for(let y = 0; locations.length > y; y++){
                    let otherItem = document.getElementById(locations[y]);
                    if(y != x && otherItem.type == "radio"){
                        //hide all other radios
                        document.getElementById(locations[y] + "Content").style.display = "none";
                    }
                }
            }
    })
}
