var chatRoomController = function(){
	var view = new messageView();
	var displayUsersView = new usersOnlineView(); 
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
		users[0].initializeAi();
		users[1].initializeAi();
		users[2].initializeAi();
		users[3].initializeAi();
	}
	var post = function(userName, message){
		messages.push({
			userName: userName,
			message: message
		});
		$.publish(this, "messagePost");
	};
	var showUsers = function(){
		displayUsers(users);
	};
	var getLastMessage = function(){
		
		return messages[messages.length-1];
	}
	return {
		initialize:initialize,
		post:post,
		getLastMessage:getLastMessage,
		showUsers:showUsers 
	};
};
