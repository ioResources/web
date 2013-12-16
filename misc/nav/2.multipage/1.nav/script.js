$(function() {
  
  $("nav").on("click", "a", function(e) {    
    var hash = e.target.hash;
    
    // wyświetlenie aktywnej strony
    $(".page").each(function(i, el) {
      $(el).toggleClass("active", hash === "#"+$(el)[0].id);
    });
    
    // wyróżnienie aktywnego linku
    $("nav li a").each(function(i, el) {
      $(el).toggleClass("active", hash === $(el)[0].hash);
    });
    
    e.preventDefault();
  });
  
  
});
