'use strict';

$(document).ready(function() {

	$('.main-content').scroll3D();
});


$('.showPlaces').on('click', function (){
  $('.text1').fadeIn('slow');
	$('.text2').fadeOut('slow');
	$('.text3').fadeOut('slow');
});

$('.showFood').on('click', function (){
  $('.text2').fadeIn('slow');
	$('.text1').fadeOut('slow');
	$('.text3').fadeOut('slow');
});

$('.showHomes').on('click', function (){
  $('.text3').fadeIn('slow');
	$('.text1').fadeOut('slow');
	$('.text2').fadeOut('slow');
});
