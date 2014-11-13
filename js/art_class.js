mainInAni = "zoomIn";
mainOutAni = "zoomOut";
itemInAni = "zoomIn";
itemOutAni = "zoomOut";

$(document).ready(function () {
  
    $("#subpage1").on("swipeleft",function(){
    $.mobile.changePage("#subpage2", {transition:"slide"}); 
  });        
    $("#subpage1").on("swiperight",function(){
    $.mobile.changePage("#subpage2", {transition:"slide", reverse: true}); 
  });  
  
    $("#subpage2").on("swipeleft",function(){
    $.mobile.changePage("#subpage1", {transition:"slide"}); 
  });        
    $("#subpage2").on("swiperight",function(){
    $.mobile.changePage("#subpage1", {transition:"slide", reverse: true}); 
  });                

});