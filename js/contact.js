$(document).ready(function () {
				
  $("#page").on("swipeleft",function(){
    $.mobile.changePage("#page2", {transition:"slide"}); 
  });        
    $("#page").on("swiperight",function(){
    $.mobile.changePage("#page3", {transition:"slide", reverse: true}); 
  });  
  
    $("#page2").on("swipeleft",function(){
    $.mobile.changePage("#page3", {transition:"slide"}); 
  });        
    $("#page2").on("swiperight",function(){
    $.mobile.changePage("#page", {transition:"slide", reverse: true}); 
  });  
  
    $("#page3").on("swipeleft",function(){
    $.mobile.changePage("#page", {transition:"slide"}); 
  });        
    $("#page3").on("swiperight",function(){
    $.mobile.changePage("#page2", {transition:"slide", reverse: true}); 
  });                

});

