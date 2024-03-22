$(document).ready(function()
{
    $("#toggle").click(function()
    {
        $(".block").toggleClass("aa")
    })
    
    $("#toggle").click(function()
    {
        $(".s3").toggleClass("bb")
    })
    

	
    $("#a2").mouseenter(function()
	{
		$("#a2").css("border-bottom","3px solid #512a10")
		$("#a2").css("padding-bottom","10px")
	})
	
    $("#a2").mouseleave(function()
	{
		$("#a2").css("border-bottom","0px")
		$("#a2").css("padding-bottom","0px")
	})
	
    $("#a3").mouseenter(function()
	{
		$("#a3").css("border-bottom","3px solid #512a10")
		$("#a3").css("padding-bottom","10px")
	})
	
    $("#a3").mouseleave(function()
	{
		$("#a3").css("border-bottom","0px")
		$("#a3").css("padding-bottom","0px")
	})
	
    $("#a4").mouseenter(function()
	{
		$("#a4").css("border-bottom","3px solid #512a10")
		$("#a4").css("padding-bottom","10px")
	})
	
    $("#a4").mouseleave(function()
	{
		$("#a4").css("border-bottom","0px")
		$("#a4").css("padding-bottom","0px")
	})
	
    $("#a5").mouseenter(function()
	{
		$("#a5").css("border-bottom","3px solid #512a10")
		$("#a5").css("padding-bottom","10px")
	})
	
    $("#a5").mouseleave(function()
	{
		$("#a5").css("border-bottom","0px")
		$("#a5").css("padding-bottom","0px")
	})

	
	$("#bt1").mouseenter(function()
	{
		$("#bt1").css("background-color","#512a10")
		$("#bt1").css("border","1px solid #512a10")
	})

	$("#bt1").mouseleave(function()
	{
		$("#bt1").css("background-color","#b08670")
		$("#bt1").css("border","0px")
	})


	$("#bt2").mouseenter(function()
	{
		$("#bt2").css("opacity","1")
	})
	
    $("#bt2").mouseleave(function()
	{
		$("#bt2").css("opacity","0.5")
	})

	$("#a6").mouseenter(function()
	{
		$("#a6").css("border-top","5px solid #a06d51")
		$("#a6").css("padding-top","16px")
	})
	$("#a6").mouseleave(function()
	{
		$("#a6").css("border-top","0px")
		$("#a6").css("padding-top","0px")
	})
	
	$("#a7").mouseenter(function()
	{
		$("#a7").css("border-top","5px solid #a06d51")
		$("#a7").css("padding-top","16px")
	})
	$("#a7").mouseleave(function()
	{
		$("#a7").css("border-top","0px")
		$("#a7").css("padding-top","0px")
	})
	
	$("#a8").mouseenter(function()
	{
		$("#a8").css("border-top","5px solid #a06d51")
		$("#a8").css("padding-top","16px")
	})
	$("#a8").mouseleave(function()
	{
		$("#a8").css("border-top","0px")
		$("#a8").css("padding-top","0px")
	})
	
	$("#a9").mouseenter(function()
	{
		$("#a9").css("border-top","5px solid #a06d51")
		$("#a9").css("padding-top","16px")
	})
	$("#a9").mouseleave(function()
	{
		$("#a9").css("border-top","0px")
		$("#a9").css("padding-top","0px")
	})
	
	$("#a10").mouseenter(function()
	{
		$("#a10").css("border-top","5px solid #a06d51")
		$("#a10").css("padding-top","16px")
	})
	$("#a10").mouseleave(function()
	{
		$("#a10").css("border-top","0px")
		$("#a10").css("padding-top","0px")
	})
	
	
	$("#bt9").mouseenter(function()
	{
		$("#bt9").css("background-color","#512a10")
	})

	$("#bt9").mouseleave(function()
	{
		$("#bt9").css("background-color","#a06d51")
	})

	
	$("#bt3").mouseenter(function()
	{
		$("#bt3").css("background-color","#512a10")
	})

	$("#bt3").mouseleave(function()
	{
		$("#bt3").css("background-color","#a06d51")
	})
	
	$("#bt4").mouseenter(function()
	{
		$("#bt4").css("background-color","#512a10")
	})

	$("#bt4").mouseleave(function()
	{
		$("#bt4").css("background-color","#a06d51")
	})
	
	$("#bt5").mouseenter(function()
	{
		$("#bt5").css("background-color","#512a10")
	})

	$("#bt5").mouseleave(function()
	{
		$("#bt5").css("background-color","#a06d51")
	})
	
	$("#bt6").mouseenter(function()
	{
		$("#bt6").css("background-color","#512a10")
	})

	$("#bt6").mouseleave(function()
	{
		$("#bt6").css("background-color","#a06d51")
	})
	$("#bt7").mouseenter(function()
	{
		$("#bt7").css("background-color","#512a10")
	})

	$("#bt7").mouseleave(function()
	{
		$("#bt7").css("background-color","#a06d51")
	})
	
	$("#bt8").mouseenter(function()
	{
		$("#bt8").css("background-color","#512a10")
	})

	$("#bt8").mouseleave(function()
	{
		$("#bt8").css("background-color","#a06d51")
	})
	
})

var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
	translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

	$('.animate-this').css({
	'-webit-transform': translate,
	'-moz-transform': translate,
	'transform': translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
	
	var isHovered = $('.animate-this:hover').length > 0;
	console.log(isHovered);
	
	//if(!$(e.target).hasClass('animate-this')) {
	if(!isHovered) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
				lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

		lFollowX = (20 * lMouseX) / 100;
		lFollowY = (10 * lMouseY) / 100;
	}
});

moveBackground();


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
	  autoplay: true,
	  autoplayspeed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })



	$(document).ready(function() {

		var counters = $(".count");
		var countersQuantity = counters.length;
		var counter = [];
	  
		for (i = 0; i < countersQuantity; i++) {
		  counter[i] = parseInt(counters[i].innerHTML);
		}
	  
		var count = function(start, value, id) {
		  var localStart = start;
		  setInterval(function() {
			if (localStart < value) {
			  localStart++;
			  counters[id].innerHTML = localStart;
			}
		  }, 40);
		}
	  
		for (j = 0; j < countersQuantity; j++) {
		  count(0, counter[j], j);
		}
	  });


	jQuery(document).ready(function($){
		//set animation timing
		var animationDelay = 2500,
			//loading bar effect
			barAnimationDelay = 3800,
			barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
			//letters effect
			lettersDelay = 50,
			//type effect
			typeLettersDelay = 150,
			selectionDuration = 500,
			typeAnimationDelay = selectionDuration + 800,
			//clip effect 
			revealDuration = 600,
			revealAnimationDelay = 1500;
		
		initHeadline();
		
	
		function initHeadline() {
			//insert <i> element for each letter of a changing word
			singleLetters($('.cd-headline.letters').find('b'));
			//initialise headline animation
			animateHeadline($('.cd-headline'));
		}
	
		function singleLetters($words) {
			$words.each(function(){
				var word = $(this),
					letters = word.text().split(''),
					selected = word.hasClass('is-visible');
				for (i in letters) {
					if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
				}
				var newLetters = letters.join('');
				word.html(newLetters).css('opacity', 1);
			});
		}
	
		function animateHeadline($headlines) {
			var duration = animationDelay;
			$headlines.each(function(){
				var headline = $(this);
				
				if(headline.hasClass('loading-bar')) {
					duration = barAnimationDelay;
					setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
				} else if (headline.hasClass('clip')){
					var spanWrapper = headline.find('.cd-words-wrapper'),
						newWidth = spanWrapper.width() + 10
					spanWrapper.css('width', newWidth);
				} else if (!headline.hasClass('type') ) {
					//assign to .cd-words-wrapper the width of its longest word
					var words = headline.find('.cd-words-wrapper b'),
						width = 0;
					words.each(function(){
						var wordWidth = $(this).width();
						if (wordWidth > width) width = wordWidth;
					});
					headline.find('.cd-words-wrapper').css('width', width);
				};
	
				//trigger animation
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}
	
		function hideWord($word) {
			var nextWord = takeNext($word);
			
			if($word.parents('.cd-headline').hasClass('type')) {
				var parentSpan = $word.parent('.cd-words-wrapper');
				parentSpan.addClass('selected').removeClass('waiting');	
				setTimeout(function(){ 
					parentSpan.removeClass('selected'); 
					$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
				}, selectionDuration);
				setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
			
			} else if($word.parents('.cd-headline').hasClass('letters')) {
				var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
				hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
				showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
	
			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
					switchWord($word, nextWord);
					showWord(nextWord);
				});
	
			} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
				$word.parents('.cd-words-wrapper').removeClass('is-loading');
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
				setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
	
			} else {
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, animationDelay);
			}
		}
	
		function showWord($word, $duration) {
			if($word.parents('.cd-headline').hasClass('type')) {
				showLetter($word.find('i').eq(0), $word, false, $duration);
				$word.addClass('is-visible').removeClass('is-hidden');
	
			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
					setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
				});
			}
		}
	
		function hideLetter($letter, $word, $bool, $duration) {
			$letter.removeClass('in').addClass('out');
			
			if(!$letter.is(':last-child')) {
				 setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
			} else if($bool) { 
				 setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
			}
	
			if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
				var nextWord = takeNext($word);
				switchWord($word, nextWord);
			} 
		}
	
		function showLetter($letter, $word, $bool, $duration) {
			$letter.addClass('in').removeClass('out');
			
			if(!$letter.is(':last-child')) { 
				setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
			} else { 
				if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
				if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
			}
		}
	
		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}
	
		function takePrev($word) {
			return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
		}
	
		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}
	});