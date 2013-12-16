$(function() {  
  $("nav").on("click", "a", function(e) {
    loadContent(e.target.hash);
    
  });
  
  loadContent(window.location.hash || "#section-1");

  function loadContent(hash) {
    var url = hash.slice(1)+".html";
    
    $.ajax(url) // $.get(url)
    .done(function(data) {
      $("#content")
        .fadeOut(function() {
          $(this).html(data);
        })
        .fadeIn();
    })
    .fail(function() {
      $("#content").html("błąd");
    });
  } 
});
