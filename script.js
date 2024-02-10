var yesBtn = document.getElementById("yes");
var noBtn = document.getElementById("no");

yesBtn.addEventListener("click", function yesBtn() {
   document.getElementById("animation").src = "animation2.gif" 
   document.getElementById("background").src = "background1.gif"
   document.getElementById("container").innerHTML = "";
});


onload = init;

function init() {
    var onclick = clickUpdates();
    var noBtn = document.getElementById("no");
    noBtn.addEventListener("click", onclick, false);
}


function clickUpdates() {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
            // function click 1 here
            document.getElementById("no").innerHTML = "Are you sure?"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "150px"
            document.getElementById("yes").style.height = "150px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 1:
            // function click 2 here
            document.getElementById("no").innerHTML = "Realy sure?"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "200px"
            document.getElementById("yes").style.height = "200px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 2:
            // function click 3 here
            document.getElementById("no").innerHTML = "Think again"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "300px"
            document.getElementById("yes").style.height = "300px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 3:
            // function click 4 here
            document.getElementById("no").innerHTML = "Surely not?"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "400px"
            document.getElementById("yes").style.height = "400px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 4:
            // function click 5 here
            document.getElementById("no").innerHTML = "You might regret that"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "500px"
            document.getElementById("yes").style.height = "500px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 5:
            // function click 6 here
            document.getElementById("no").innerHTML = "Give it another thought"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "600px"
            document.getElementById("yes").style.height = "600px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;

            case 6:
            // function click 7 here
            document.getElementById("no").innerHTML = "Are you absolutely certain?"
            document.getElementById("yes").style.background = "red"
            document.getElementById("yes").style.width = "700px"
            document.getElementById("yes").style.height = "700px"
            document.getElementById("p1").innerHTML = "Choose wisely!!!"
            document.getElementById("p1").style.color = "red";
            break;
            default:
            // function click 1 here
            console.log("All clicks are done.");
            break;
            
            
        }
        count = count<7?count+1:7;
    }
    
    return next;
}