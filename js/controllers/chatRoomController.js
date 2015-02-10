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
		$.subscribe("users:change", displayUsersView, function(e){
			displayUsersView.render(users);
		});
		displayUsersView.render(users);
		users.push(new userModel("ryan", "1"));
		users.push(new userModel("janice", "2"));
		users.push(new userModel("kody", "3"));
		users.push(new userModel("vanessa", "4"));
		users[0].initializeAi();
		users[1].initializeAi();
		users[2].initializeAi();
		users[3].initializeAi();
		$.publish(this, "users:change");
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
	var login = function(){
		loggedIn = true;
		displayUsersView.render(users);
		//find model in array by something
	};
	var logout = function(){
		var i = users.length -1;
		users[i].loggedIn = false;
		var user = users[i];
		delete user;
		delete users[i];
		users.pop();
		$.publish(this, "users:change");
	};
	return {
		initialize:initialize,
		post:post,
		getLastMessage:getLastMessage,
		login:login,
		logout:logout
	};
};
