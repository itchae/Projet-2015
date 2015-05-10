function changerScreen(altstyle){
	document.getElementById("SP").setAttribute('href',altstyle);
}

function changerPrint(altprint){
	document.getElementById("PP").setAttribute('href',altprint);
}

function changerStyle(altstyle, altprint){
	changerScreen(altstyle);
	changerPrint(altprint);
}
