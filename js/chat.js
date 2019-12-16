var chatArray = [
	"Hi. I'm Wysa, your wise young smile :-) assistant.",
	"How are you feeling today?",
	"Not too good..",
	"Tell me what happened..",
	"My stocks tanked.",
	"That sounds stressful.",
	"Breathe with the shape for 2 min then lets talk..",
	"Breathing now ...",
	"Ok, did that.",
	"So you're stressed because your stocks tanked. Feeling anxious?",
	"Feeling bad about myself.",
	"What can I do?",
	"The situation is what it is. Your thoughts are making you feel bad about yourself.",
	"Shall we try challenging those thoughts?",
	"Okay.."
];


if(window.innerWidth < 1000){
	$('.chat-container').css('height', (window.innerHeight-200)+'px');
}

function chatLoop(i) {

	if(window.innerWidth < 1000){
		if (!chatArray[i]){
			$('.chat').empty();
			chatLoop(0);
		}else if(chatArray[i]) {
			if(i == 6 || i == 11){
				$('.chat').empty();
			}

	    	if(i == 2 || i == 4 || i == 8 || i == 10 || i == 14){
	    		$('.chat').append('<div class="right-chat">'+
										'<p class="right-chat-text">'+chatArray[i]+'</p>'+
									'</div>');
	    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		setTimeout(function(){chatLoop(i+1);}, 1500);
	    	}else{
	    		if(chatArray[i].indexOf('http') > -1){
	    			$('.chat').append('<div class="left-chat">'+
											'<div class="left-chat-text" style="width:80%; padding:7px; background: white;">'+
												'<img src="'+chatArray[i]+'" alt="link" style="width:100%;"/>'+
											'</div>'+
										'</div>');
		    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		}else{
	    			$('.chat').append('<div class="left-chat '+((i == 0 || i == 6 || i == 12)?'logo-margin"':'"')+'>'+
	    									((i == 0 || i == 6 || i == 12)?'<div class="logo-gif"><img src="./images/two__.gif" alt="icon" style="width:100%;"></div>':'')
											+'<div class="left-chat-text">'+
												'<p class="left-chat-highlight">'+chatArray[i]+'</p>'+
											'</div>'+
										'</div>');
		    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		}
	    		setTimeout(function(){chatLoop(i+1);}, 1500);
	    	}
	    }
	}else{
		if (!chatArray[i]){
			$('.chat').empty();
			chatLoop(0);
		}else if(chatArray[i]) {
			if(i == 6 || i == 11){
				$('.chat').empty();
			}

	    	if(i == 2 || i == 4 || i == 8 || i == 10 || i == 14){
	    		$('.chat').append('<div class="right-chat">'+
										'<p class="right-chat-text">'+chatArray[i]+'</p>'+
									'</div>');
	    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		setTimeout(function(){chatLoop(i+1);}, 1500);
	    	}else{
	    		if(chatArray[i].indexOf('http') > -1){
	    			$('.chat').append('<div class="left-chat">'+
											'<div class="left-chat-text" style="width:30%; padding:7px; background: white;">'+
												'<img src="'+chatArray[i]+'" alt="link" style="width:100%;"/>'+
											'</div>'+
										'</div>');
		    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		}else{
	    			$('.chat').append('<div class="left-chat '+((i == 0 || i == 6 || i == 12)?'logo-margin"':'"')+'>'+
	    									((i == 0 || i == 6 || i == 12)?'<div class="logo-gif"><img src="./images/two__.gif" alt="icon" style="width:100%;"></div>':'')
											+'<div class="left-chat-text">'+
												'<p class="left-chat-highlight">'+chatArray[i]+'</p>'+
											'</div>'+
										'</div>');
		    		$('.chat-container').scrollTop($('.chat-container').prop('scrollHeight'));
	    		}
	    		setTimeout(function(){chatLoop(i+1);}, 1500);
	    	}
	    }	
	}
}

chatLoop(0);
