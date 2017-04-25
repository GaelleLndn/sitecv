/***********NAVBAR FFIXED TOP*************/

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});



$('.nav a').click(function () {
    $('.navbar-collapse').collapse('hide');
});



/*********** WAYPOINTS *************/


$(document).ready(function () {


   $("#fade-in-left").css("opacity", 0);

   $("#fade-in-left").waypoint(function () {
       $("#fade-in-left").addClass("fadeInLeft");
   }, {offset: "100%"});



$("#zoom-in").css("opacity", 0);

   $("#zoom-in").waypoint(function () {
       $("#zoom-in").addClass("zoomIn").css("opacity",1);
   }, {offset: "100%"});


$("#fade-in-right").css("opacity", 0);

   $("#fade-in-right").waypoint(function () {
       $("#fade-in-right").addClass("fadeInRight");
   }, {offset: "100%"});

//compétences

$("#1_competence").css("opacity", 0);

   $("#1_competence").waypoint(function () {
       $("#1_competence").addClass("fadeInLeft");
   }, {offset: "100%"});


$("#2_competence").css("opacity", 0);

   $("#2_competence").waypoint(function () {
       $("#2_competence").addClass("bounceInDown").css("opacity",1);
   }, {offset: "100%"});


$("#3_competence").css("opacity", 0);

   $("#3_competence").waypoint(function () {
       $("#3_competence").addClass("bounceInRight").css("opacity",1);
   }, {offset: "100%"});


$("#4_competence").css("opacity", 0);

   $("#4_competence").waypoint(function () {
       $("#4_competence").addClass("bounceInLeft").css("opacity",1);
   }, {offset: "100%"});


$("#5_competence").css("opacity", 0);

   $("#5_competence").waypoint(function () {
       $("#5_competence").addClass("bounceInUp").css("opacity",1);
   }, {offset: "100%"});   


$("#6_competence").css("opacity", 0);

   $("#6_competence").waypoint(function () {
       $("#6_competence").addClass("bounceInLeft").css("opacity",1);
   }, {offset: "100%"});  


});



/***************** SCROLLSPY ********************/

	 $('body').scrollspy({target: ".navbar", offset: 50}) ;


/****************** SMOOTH SCROLL *****************/

	$("#myNavbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});



/************* OUTILS TOOLTIPS ***************/

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'bottom'
    });
});


/****************** SKILLBAR ANIMATION *****************/



$(document).ready(function(){

var skillsDiv = jQuery('#skills');

jQuery(window).on('scroll', function(){
	var winT = jQuery(window).scrollTop(),
  	winH = jQuery(window).height(),
  	skillsT = skillsDiv.offset().top;
  if(winT + winH  > skillsT){
  	jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  }
});

});



/**************ACCORDION**********************/


$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});



/**************DANSEUR *****************/


$(function(){


		function cligne (){
		$('.oeil-droite').hide();
		$('.bouche').hide();
		$('.blink').show();
		$('.kiss').show();
		}; //OK


		function ouvre (){
		$('.blink').hide();
		$('.kiss').hide();
		$('.oeil-droite').show();
		$('.bouche').show();
		}; //OK

		function moveBras(){
			$('.bras-gauche').animate({marginTop: '-10px'}, 200, function(){	
				$('.bras-gauche').animate({marginTop: '10px'}, 200);	
				});
			$('.bras-droite').animate({marginTop: '10px'}, 200, function(){	
				$('.bras-droite').animate({marginTop: '-10px'}, 200);	
				});
			};

		function replaceBras(){
			$('.bras-gauche').animate({marginTop: '0px'}, 200);
			$('.bras-droite').animate({marginTop: '0px'}, 200);
		};

		function moveJambes1(){
			$('.corps-bas').animate({marginRight: '-30px'}, 200, function(){	
				$('.corps-bas').animate({marginRight: '0px'}, 200);	
				});
			};

			function moveJambes2(){
			$('.corps-bas').animate({marginRight: '30px'}, 200, function(){	
				$('.corps-bas').animate({marginRight: '0px'}, 200);	
				});
			};

			function moveTete1(){
			$('.tete').animate({marginRight: '30px'}, 200, function(){	
				$('.tete').animate({marginRight: '0px'}, 200);
				});
			};

			function moveTete2(){
			$('.tete').animate({marginRight: '-30px'}, 200, function(){	
				$('.tete').animate({marginRight: '0px'}, 200);
				});
			};

			function dance (){
				setTimeout(moveBras, 600);
				setTimeout(moveBras, 1000);
				setTimeout(replaceBras, 1400);
				setTimeout(moveTete1, 1300);
				setTimeout(moveTete1, 1800);
				setTimeout(moveTete2, 2200);
				setTimeout(moveTete2, 2600);
				setTimeout(moveBras, 2600);
				setTimeout(moveBras, 3000);
				setTimeout(replaceBras, 3400);
				setTimeout(moveJambes1, 3000);
				setTimeout(moveJambes1, 3400);
				setTimeout(moveJambes2, 3800);
				setTimeout(moveJambes2, 4200);
				
			};

			


	$('#myBtn').click(function() {
		cligne();
		setTimeout(ouvre, 500);
		setTimeout(dance, 800);
		setTimeout(dance, 4200);
		setTimeout(moveBras, 4200);
		setTimeout(moveBras, 4400);
		setTimeout(replaceBras, 4600);
	});

});




/**********LANGUE PARLEE **********************/


	// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar1 = new ProgressBar.Circle('#langue2', {
  color: '#333',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1800,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#333', width: 4 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var bar2 = new ProgressBar.Circle('#langue1', {
  color: '#333',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1800,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#333', width: 4 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

var bar3 = new ProgressBar.Circle('#langue3', {
  color: '#333',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1800,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#333', width: 4 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});


$("#progbar").waypoint(function(){
       bar1.animate(0.2); 
        bar2.animate(0.35);
         bar3.animate(1.0); // Number from 0.0 to 1.0
    }, {offset: "100%"})
    
