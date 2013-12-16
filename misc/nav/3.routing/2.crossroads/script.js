$(function() {

  //konfiguracja crossroads
  crossroads.addRoute('/');
  
  var route1 = crossroads.addRoute('kontakt/');
  route1.matched.add(function() {
    console.log("KONTAKT");
  });
  
  crossroads.addRoute('artykuly/');
  
  crossroads.addRoute('artykuly/{id}', function(id) {
    console.log("artykuł: "+id);
  });

  
  crossroads.bypassed.add(function(req) {
    console.log("błąd");  
  });
  
  crossroads.routed.add(function(req, data) {
    console.log("ok");  
  });

  //konfiguracja hashera
  function parseHash(newHash, oldHash){
    crossroads.parse(newHash);
    //~ console.log("hasher.changed: "+oldHash+" -> "+newHash);
    console.log("---");
  }
  hasher.initialized.add(parseHash);
  hasher.changed.add(parseHash);
  hasher.init();

});
