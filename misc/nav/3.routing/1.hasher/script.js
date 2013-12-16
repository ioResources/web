$(function() {

  //konfiguracja hashera
  function parseHash(newHash, oldHash){
    $("#content h1").html(newHash);
    console.log("hasher.changed: "+oldHash+" -> "+newHash);
  }
  hasher.initialized.add(parseHash);
  hasher.changed.add(parseHash);
  hasher.init();

});
