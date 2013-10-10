var element_unordered_list = document.getElementById("liste");

function skrivTilUtDataBoks(valgtobj){
var e_velg = document.getElementById("velg");
var e_utdataboks = document.getElementById ("utdataboks");
	e_utdataboks.innerHTML = "Du har valgt " + e_velg.options[valgtobj.selectedIndex].text;
}
function popupboks(beskjed){
	alert("funker ikke ennå!")
}
