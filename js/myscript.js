$(document).ready(function(){

	$('#tweet-submit').hide();
	$('#char-count').hide();


// TWEET BOX ANIMATIONS

	$('.tweet-compose').on('focus', function(){
		$('#tweet-submit').show();
		$('#char-count').show();
		$('.tweet-compose').css('height', '5em');
	});

	$('.tweet-content').on('blur', function(){
		$('#tweet-submit').hide();
		$('#char-count').hide();
		$('.tweet-compose').css('height', '2.5em');
	});


	$('.tweet-compose').on('keyup', function(){
		var tweetString = $('.tweet-compose').val();
		var currentLength = (140 - tweetString.length);
		$('#char-count').html(currentLength);

		if(currentLength <= 10){
		$('#char-count').css('color', 'red');
		} else if(currentLength > 10){
		$('#char-count').css('color', '#999');
		} 

		if(currentLength < 0 ){
		//$('#tweet-submit').disableTweetButton
			$('#tweet-submit').css('background-color', '#999');
			$('#tweet-submit').css('background-image', 'none');
			$('#tweet-submit').css('border-color', '#666');
		} else if (currentLength >= 0){

			$('#tweet-submit').css('background-image', 'linear-gradient(#33bcef,#019ad2)');
			$('#tweet-submit').css('border-color', '#057ed0');
		}
	});

	var date = moment().startOf().fromNow(); 
	
	$('#tweet-submit').on('click',function(e){
		var tweetTweet = $('.tweet-compose').val();

		if(tweetTweet.length <= 140 && tweetTweet.length > 0) {
			var cloneTweet = $('.tweet:first').clone();
			cloneTweet.find('.avatar').prop('src', './img/alagoon.jpg');
			cloneTweet.find('.fullname').html('Rowan Jones');
			cloneTweet.find('.username').html('@RDoutreJones &middot; ');
			cloneTweet.find('.tweet-text').html(tweetTweet);
			cloneTweet.find('.stats').hide();
			cloneTweet.find('.reply').hide();
			cloneTweet.find('.timeHosted').html(date);
			$('#stream').prepend(cloneTweet);
			$('#tweet-submit').hide();
			$('#char-count').hide();
			$('.tweet-compose').css('height', '2.5em');
			$('.tweet-compose').val('');

		}
	});

	
	$('.stats').hide();
	$('.reply').hide();

	$(this).find('#stream').on('click', '.tweet',function(e){
		$(this).find('.stats').toggle(150);
		$(this).find('.reply').toggle(150);
	});

	$('.body').on('click', function(e){

	});

});

// MAKE A NEW TWEET: jQuery functions: 

//clone - 'pass it in a selector.clone, takes that piece and clones it again'
