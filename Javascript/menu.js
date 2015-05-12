function genereSommaire(){
  var sommaire = document.getElementById('divmenu');
  var contenu = document.getElementById('contenu');
  var H2 = contenu.getElementsByTagName('h2');
  for (var i=0;  i< H2.length; i++) {
    var unId=H2[i].id="h"+(i+1);
    var myI =((i+1)<10)?'0'+(i+1):(i+1);
    var hrf= H2[i].childNodes[0];
    var txt = ' ' + hrf.textContent;
    var a = document.createElement('a');
    a.setAttribute('href',"#"+unId);
    label = document.createTextNode(myI + '.'+ txt );
    a.appendChild(label);
    var br = document.createElement('br');
    sommaire.appendChild(a);
    sommaire.appendChild(br);
    
    }
}

function position(){
  contenu=document.getElementById('contenu');
  contenu.style.width="76%";
  contenu.style.left="7%";
  menu=document.getElementById('divmenu');
  menu.style.position="fixed";
  menu.style.top="42%";
  menu.style.left="10px"
  menu.style.width="16%";
  genereSommaire();
  
  menu.style.border="solid black 1px"
}
