var messageView = function(){
	$el = document.getElementById("chatRoom1");
	post = function(message){
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
		//messageEntryEl.scrollIntoView();
		$("this.userMessageEl").scrollintoview();
	};

	return {
		$el: $el,
		post: post
	}
};