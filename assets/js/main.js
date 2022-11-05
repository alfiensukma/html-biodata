jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

// move section
function About() {
  const element = document.getElementById("about");
  element.scrollIntoView();
}
function Education() {
  const element = document.getElementById("education");
  element.scrollIntoView();
}
function Skills() {
  const element = document.getElementById("skills");
  element.scrollIntoView();
}
function Project() {
  const element = document.getElementById("project");
  element.scrollIntoView();
}


// var selector = 'nav ul li a';

// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });

// class active navbar
// var addClassOnScroll = function () {
// 	var windowTop = $(window).scrollTop();
// 	$('section[id]').each(function (index, elem) {
// 		var offsetTop = $(elem).offset().top;
// 		var outerHeight = $(this).outerHeight(true);

// 		if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
// 			var elemId = $(elem).attr('id');
// 			$("nav ul li a.active").removeClass('active');
// 			$("nav ul li a[href='#" + elemId + "']").addClass('active');
// 		}else{
// 			$("nav ul li a.active").removeClass('active');
// 		}
// 	});
// };

// $(function () {
// 	$(window).on('scroll', function () {
// 		addClassOnScroll();
// 	});
// });