function TextValid(){
	
	if (document.formulaire.nom.value==""){
		alert("vous avez oublié d'indiqué votre nom");
		return false;
	}
	if (document.formulaire.prenom.value==""){
		alert("Veuillez entrez votre prénom");
		return false;
	}
	if (document.formulaire.pseudo.value==""){
		alert("Veuillez entrez le pseudo de votre futur robot");
		return false;
	}
	else 
		return true;
}

function ValidCheckBox() {
   var checked = 0;
   var mybox = document.getElementsByName('utilité');
   for (i=0; i<mybox.length; i++) {
      if (mybox[i].checked==true) {
         checked=1;
      }
   }
   if (checked>0) {
      return true;
   } else {
      alert('Merci de cocher au moins une fonctionnalité');
      return false;
   }
}

function ValidRadioAnimaux(){
var rad = document.getElementsByName("animaux")
if ((rad[0].checked==true)||(rad[1].checked==true)){
  return true;
  }
  else
  alert("Animaux à renseigner");
return false;
}

function ValidRadioEnfant(){
var rad = document.getElementsByName("enfant")
if ((rad[0].checked==true)||(rad[1].checked==true)){
  return true;
  }
  else
  alert("Enfants à renseigné");
return false;
}

function ValidAll(){
var a=TextValid();
var b=ValidCheckBox();
var c=ValidRadioAnimaux();
var d=ValidRadioEnfant();
  if ((a==true)&&(b==true)&&(c==true)&&(d==true)){
     alert('Le formulaire est valide, vous pouvez l\'envoyer');
}
else 
   return false;
}