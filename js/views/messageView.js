//This view creates all of the elements inside of the chatRoom1 div, assigns their class names, and passes data to the
//DOM via .innerHTML
var messageView = function(){					//namespace function
	var $el = document.getElementById("chatRoom1");	//variable to clean up coding and access the chatRoom1 <div> in index.html
	var post = function(message){		//creates elements, assigns classes, and passes data to the DOM
			var messageEntryEl = document.createElement('p');
			messageEntryEl.className = "messageEntry";
			var userNameEl = document.createElement('span');
			userNameEl.className = "userName";
			var userMessageEl = document.createElement('span');
			userMessageEl.className = "userMessage";
			messageEntryEl.appendChild(userNameEl);
			messageEntryEl.appendChild(userMessageEl);
			userNameEl.innerHTML= message.userName+": ";
			this.$el.appendChild(messageEntryEl);
			userMessageEl.innerHTML= message.message;
			render();
	};
	var render = function(messages){ 
			var messages = messages || [];
			for(i=0; i < messages.length; i++){
  				post(messages[i].message);
  			};
  			$($el).animate({scrollTop: $($el).get(0).scrollHeight}, 0); //auto scroll from http://stackoverflow.com/questions/24772491/auto-scroll-to-bottom-div
	};
	var initialize = function(){
			$($el).on("hover", function(){
				$($el).stop();
			});
			/*$($el).off("mouseleave", function(){
				$($el).animate({scrollTop: $($el).get(0).scrollHeight}, 2000);
			})*/
	};

	return {$el: $el,
			post: post,
			initialize:initialize};
};