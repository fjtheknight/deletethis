function listToRadioForm(l) {
	var text = "<form id='rf'>";

    var i;
    for (i = 0; i < l.length; i++) { 
        text += "<input type='radio' name='time' value="+l[i]+">"+l[i]+"<br>";
    }
    text += "<button type='submit' onclick='replace();'>show</button></form>";
    return text;              
}

function replace2() {
    var free = ["de a à b", "de c à d", "de e à f"];
    var text;
    text=listToRadioForm(free);
	document.getElementById("schedular").innerHTML=text;
}

function replace() {
	document.getElementById('schedular').innerHTML='ty';
	setTimeout(refresh, 3000);
}

function refresh() {
    window.location.reload();
}
