function nombre(n){
  var nb = n;
  if (nb<10){
    nb=(("0"+"") +nb);
  }
  else {
    nb=nb;
  }
  return nb;
}

function afficherheure(){
  d = new Date();
  heure=d.getHours();
  minute=d.getMinutes();
  seconde=d.getSeconds();
  
  tm=""+nombre(heure)+":";
  tm+=nombre(minute)+":";
  tm+=nombre(seconde);
  
  return tm;
}

function heure(){
pheure = document.createElement('p');
document.getElementById('contenu').appendChild(pheure);

heureco = document.createTextNode("Heure de connexion : "+ afficherheure());
pheure.appendChild(heureco);
}

