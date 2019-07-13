var flags = [
    {
        aze: ["blue", "red", "green"],
        rus: ["white","blue", "red"],
        ger: ["black", "red", "yellow"],
        est: ["blue", "black", "white"],
        hun: ["red", "white", "green"],
           }
]
var newflag =[]
var find = 0;
var nextBtn= document.getElementById("nxtBtn")
function CheckFlag() {

    if (find == 5) {
        document.body.innerHTML = ""
        var suprise = document.createElement("h1")
        suprise.innerText = "CONGRATULATIONS! YOU FOUND ALL FLAGS!"
        suprise.style.color = "red";
        suprise.style.textAlign = "center";
        document.body.append(suprise)
    }
}
var targetBack = document.getElementById("rightdiv").children
nextBtn.addEventListener("click", function () {
    for (let i = 0; i < targetBack.length; i++) {
        targetBack[i].style.backgroundColor = ""
        newflag = []
        console.log(newflag)
            }
})
var colors = document.getElementsByClassName("colors");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var dropZones = document.querySelectorAll(".dragDiv div");

for (let i = 0; i < dropZones.length; i++) {
    dropZones[i].addEventListener("dragenter", myDragEnter);
    dropZones[i].addEventListener("dragleave", myDragleave);
    dropZones[i].addEventListener("dragover", myDragOver);
    dropZones[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()
}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);
}

function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c")
    if (newflag.length != 3) {
        newflag.push(e.target.style.backgroundColor)
    } else {
        newflag = []
        newflag.push(e.target.style.backgroundColor)
}
if (newflag.length == 3 && targetBack[0].style.backgroundColor != ""
        && targetBack[1].style.backgroundColor != ""
        && targetBack[2].style.backgroundColor != "") {
        for (let item in flags) {
            if (flags[item].aze.toString() == newflag.toString() && flags[item].aze.toString() != "true") {
                flags[item].aze = ["true"];
                find++;
                CheckFlag()
                var azeFlag = document.getElementById("aze")
                azeFlag.style.color = "green";
                azeFlag.style.fontSize = "1.1em"
                azeFlag.style.textDecoration = "line-through"
                                return;
            } else if (flags[item].rus.toString() == newflag.toString() && flags[item].rus.toString() != "true") {
                flags[item].rus = ["true"];
                find++;
                CheckFlag()
                var rusFlag = document.getElementById("rus")
                rusFlag.style.color = "green";
                rusFlag.style.fontSize = "1.1em"
                rusFlag.style.textDecoration = "line-through"
                return;
            } else if (flags[item].ger.toString() == newflag.toString() && flags[item].ger.toString() != "true") {
                flags[item].ger = ["true"];
                find++;
                CheckFlag()
                var gerFlag = document.getElementById("ger")
                gerFlag.style.color = "green";
                gerFlag.style.fontSize = "1.1em"
                gerFlag.style.textDecoration = "line-through"
                return;
            }
            else if (flags[item].est.toString() == newflag.toString() && flags[item].est.toString() != "true") {
                flags[item].est = ["true"];
                find++;
                CheckFlag()
                var estFlag = document.getElementById("est")
                estFlag.style.color = "green";
                estFlag.style.fontSize = "1.1em"
                estFlag.style.textDecoration = "line-through"
                return;
            } else if (flags[item].hun.toString() == newflag.toString() && flags[item].hun.toString() != "true") {
                flags[item].hun = ["true"];
                find++;
                CheckFlag()
                var hunFlag = document.getElementById("hun")
                hunFlag.style.color = "green";
                hunFlag.style.fontSize = "1.1em"
                hunFlag.style.textDecoration = "line-through"
                return;
            
            } else {
                console.log("THIS FLAG NOT AVAILABLE OR YOU ALREADY MADE THIS FLAG");
                return;
            }
        }
    }


}

