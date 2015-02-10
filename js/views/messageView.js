var messageView = function(){
	$el = document.getElementById("chatRoom1");
	post = function(message){
		var oldscrollHeight = $el.attr("scrollHeight") - 20;
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
		debugger
		userMessageEl.innerHTML= message.message;
		/*var div = $('element.autoscrolling');
		setInterval(function(){
    		var pos = div.scrollTop();
   			div.scrollTop(++pos);
		}, 100);*/
		/*var newscrollHeight = $el.attr("scrollHeight") - 20; //Scroll height after the request
			if(newscrollHeight > oldscrollHeight){
				$el.animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
			}*/				
		//this.$el.scrollTop = this.$el.scrollHeight;
		//$("#chatRoom1").animate({ scrollTop: $("#chatRoom1").attr("chatRoom1.scrollHeight") }, 3000);
		//chatroom1.userMessageEl.scrollTop = chatRoom1.scrollHeight;
		//messageEntryEl.scrollIntoView();
		//$("this.userMessageEl").scrollintoview();
	};

	return {$el: $el,
			post: post};
};