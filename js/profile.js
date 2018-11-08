function listToRadioForm(l) {
	var text = "<form>";

    var i;
    for (i = 0; i < free.length; i++) { 
        text += "<input type='radio' name='time' value="+free[i]+">"+free[i]+"<br>";
    }
    text += "<button type='submit' onclick='replace();'>show</button></form>";
    return text;              
}
function replace() {
	document.getElementById('testjs').innerHTML='ty';        
}
var free = ["de a à b", "de c à d", "de e à f"];
text=listToRadioForm(free)
document.getElementById("testjs").innerHTML=text;
