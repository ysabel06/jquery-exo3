 $('#depart1').click(function(){
 jQuery.fx.off = false;
 $("#violet").show("slow");
 $("#violet").hide("slow");



  });
 $('#depart2').click(function(){
  jQuery.fx.off = false;
  $("#jaune").show("fast");
 $("#jaune").hide("fast");

 $("#orange").mouseenter(function(){
  $(this).hide(1000);
   $(this).show(1000);
});

 
});
$('#depart3').click(function(){
  jQuery.fx.off = false;
  $("#noir").slideUp(1000);
});
$("#gris").click(function(){
  $(this).slideUp(1000);
});
$("#marron").mouseenter(function(){
  $(this).slideToggle(1000);
});
 

$('#depart4').click(function(){
  jQuery.fx.off = false;
  $("#vert").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
  $("#rouge").animate({
    left: '150px',
    opacity: 0.5,
    width: '200px',
    height: '200px'
  }, 3000);
 });
$('#depart5').click(function(){
  jQuery.fx.off = false;
  $("#pink").delay(2000)
  $("#pink").animate({left: '300px',},3000);
  $("#pink").animate({opacity: 0.2,},3000);
  $("#pink").animate({width: '300px',},3000);
  $("#pink").animate({height: '300px',},3000);
  $("#cyan").delay(2000)
  $("#cyan").animate({right: '300px',},3000);
  $("#cyan").animate({opacity: 0.3,},3000);
  $("#cyan").animate({width: '300px',},3000);
  $("#cyan").animate({height: '300px',},3000);


});

$('#desactiver').click(function(){
  jQuery.fx.off = true;
  $("#pink").stop();
  $("#cyan").stop();
});

$('.reload').click(function(){
  location.reload();
});

   












 
 

















	


	





$('#depart2').click(function(){
	jQuery.fx.off = false;
	
	
	
});



$('#depart3').click(function(){
	jQuery.fx.off = false;

	
});





$('#depart4').click(function(){
	jQuery.fx.off = false;

	
	
});



$('#depart5').click(function(){
	jQuery.fx.off = false;

	
});

$('#desactiver').click(function(){
	jQuery.fx.off = true;
	
});

$('.reload').click(function(){
	location.reload();
});