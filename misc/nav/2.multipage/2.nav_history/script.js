$(function() { 
  //zdarzenie popstate - zmiana adresu
  $(window).on("popstate", function(e) {
    hash = e.target.location.hash;
    if (hash === "") {
      hash = "#section-1";
    }
    updatePage(hash);
  });

  $("nav").on("click", "a", function(e) {    
    var hash = e.target.hash;

    /*
     * HISTORIA
     */ 
    window.history.pushState(null, null, hash);
    updatePage(hash);  
    
    e.preventDefault();
  });
  
});

/*
 * NAWIGACJA
 */     
function updatePage(hash) {
  // wyświetlenie aktywnej strony
  $(".page").each(function(i, el) {
    $(el).toggleClass("active", hash === "#"+$(el)[0].id);
  });
  
  // wyróżnienie aktywnego linku
  $("nav li a").each(function(i, el) {
    $(el).toggleClass("active", hash === $(el)[0].hash);
  });
}
