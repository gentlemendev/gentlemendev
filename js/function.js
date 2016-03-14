var isAnimationComplete = false;
$(window).scroll(function(){
	$('.fUp').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700){
			$(this).addClass('fadeInUp');
		}
	});
	$('.leftFade').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700){
			$(this).addClass('fadeInLeft');
		}
	});
	$('.rightFade').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700){
			$(this).addClass('fadeInRight');
		}
	});
	
	$('.count').each(function () {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+700 && !isAnimationComplete){
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 3000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        },
		        complete: function () {
              $(this) = true;
		        }
		    });
		}    
	});

});
$(document).ready(function(){

	$(".image-popup-fit-width").magnificPopup({
		type:'inline',
  		midClick: true,
  		 mainClass: 'mfp-with-zoom',
  		image: {
            verticalFit: false
          }
	});

  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

   $("#test-form").submit(function() { //устанавливаем событие отправки для формы с id=
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!")
            }
    });
});

   $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    preloader: false,
  });
	
	$('.grid').isotope({
	  		itemSelector: '.grid-item',
	  		masonry: {
            
        }
	});

	var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });

  //rotation speed and timer
  var speed = 5000;
  
  var run = setInterval(rotate, speed);
  var slides = $('.slide');
  var container = $('#slides ul');
  var elm = container.find(':first-child').prop("tagName");
  var item_width = container.width();
  var previous = 'prev'; //id of previous button
  var next = 'next'; //id of next button
  slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();

   //if user clicked on prev button
  
  $('#buttons a').click(function (e) {
    //slide the item
    
    if (container.is(':animated')) {
      return false;
    }
    if (e.target.id == previous) {
      container.stop().animate({
        'left': 0
      }, 1500, function () {
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();
      });
    }
    
    if (e.target.id == next) {
      container.stop().animate({
        'left': item_width * -2
      }, 1500, function () {
        container.find(elm + ':last').after(container.find(elm + ':first'));
        resetSlides();
      });
    }
    
    //cancel the link behavior      
    return false;
    
  });
  
  //if mouse hover, pause the auto rotation, otherwise rotate it  
  container.parent().mouseenter(function () {
    clearInterval(run);
  }).mouseleave(function () {
    run = setInterval(rotate, speed);
  }); 
  
  function resetSlides() {
    //and adjust the container so current is in the frame
    container.css({
      'left': -1 * item_width
    });
  }

  $("a[href*='home']").mPageScroll2id();
  $("a[href*='work']").mPageScroll2id();
  $("a[href*='about_us']").mPageScroll2id();
  $("a[href*='our_statisic']").mPageScroll2id();
  $("a[href*='feedback']").mPageScroll2id();
  $("a[href*='contact']").mPageScroll2id();

  $('.navicon').on('click', function (e) {
	  e.preventDefault();
	  $(this).toggleClass('navicon--active');
	  $('.toggle').toggleClass('toggle--active');
  });

});


function rotate() {
  $('#next').click();
}