var chatRoomController = function(){
	var view = new messageView();
	var users = [];
	var messages = [];
	//observer = $.observer(messages);
	var initialize = function(){
		$.subscribe("messagePost", view, function(e){
			var messageCount = messages.length -1;
			view.post(messages[messageCount]);
		});
		users.push(new userModel("ryan", "1"));
		users.push(new userModel("janice", "2"));
		users.push(new userModel("kody", "3"));
		users.push(new userModel("vanessa", "4"));
	}
	var post = function(userName, message){
		messages.push({
			userName: userName,
			message: message
		});
		$.publish(this, "messagePost");
	};
	var getLastMessage = function(){
		
		return messages[messages.length-1];
	}
	return {
		initialize:initialize,
		post:post,
		getLastMessage:getLastMessage
	};
};
