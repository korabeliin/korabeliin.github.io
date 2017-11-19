$( document).ready(function() {
	$(".hamburger").click(function() {
	$(".nav").show(235);
	$(".hamburger").hide(235);
	$(".cross").show(235);
});
	$(".cross").click(function(){
	$(".nav").hide(235);
	$(".cross").hide(235);
	$(".hamburger").show(235);	
	});
});
$(document).ready(function(){
    $("#sticky").stick_in_parent();
  });