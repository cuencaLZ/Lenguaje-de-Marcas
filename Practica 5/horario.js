function cambiar_color_over(celda){ 
   celda.style.backgroundColor="#66ff33" 
   celda.style.color="red";
   } 
function cambiar_color_out(celda){ 
   celda.style.backgroundColor=""
   celda.style.color="";
   } 
function Click(celda){
    for (var k = 1; k < 7; k++){
        document.getElementById((k).toString()).style.display = "none";
            }
        document.getElementById(celda.attributes["class"].value).style.display = "block";
        }
