function listToRadioForm(l) {
	var text = "<form id='rf'>";

    var i;
    for (i = 0; i < l.length; i++) { 
        text += "<input type='radio' name='time' value="+l[i]+">"+l[i]+"<br>";
    }
    text += "<button type='submit' onclick='replace();'>Add event to calendar</button></form>";
    return text;              
}

function replace2() {
    var free = ["de 10-11-2018 13:00 à de 10-11-2018 13:00", "de 10-11-2018 13:00 à de 10-11-2018 16:00", "de 11-11-2018 10:00 à de 11-11-2018 13:00"];
    var text;
    text=listToRadioForm(free);
	document.getElementById("schedular").innerHTML=text;
}

function replace() {
	document.getElementById('schedular').innerHTML='Your event has been scheduled between 10-11-2018 13:00 and 10-11-2018 13:00';
	setTimeout(refresh, 3000);
}

function refresh() {
    window.location.reload();
}
