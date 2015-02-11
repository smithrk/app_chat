//This is the main controller to access userModel.js, messageModel.js, messageView.js, usersOnlineView.js
//and chatTextEntryView.js.
var chatRoomController = function(){           	//namespace function
	var view = new messageView();				//declaration to create new instances of messageView
	var displayUsersView = new usersOnlineView(); //declaration to create new instances of usersOnlineView
	var users = [];								//array used to store objects of userModel
	var messages = [];							//array used to store objects messageModel
	var element = document.getElementById("chatRoom1");//variable declared to keep code clean when accessing chatRoom1 div element
	var initialize = function(){				//this function adds our subscribers, renders displayUsersView, stores stock ai users and initializes ai
		$.subscribe("messagePost", view, function(e){//subscribes to message post
			var messageCount = messages.length -1; //counter variable for selecting single stock objects
			view.post(messages[messageCount]); //post function call to select a single stock message object
		});
		$.subscribe("users:change", displayUsersView, function(e){//subcribes watch for changes in users[]
			displayUsersView.render(users);		//renders an instance of usersOnlineView() if a change occurs in users[]
		});
		view.initialize();
		displayUsersView.render(users);			//renders an instance of userOnlineView() to create div elements when initialize is called
		users.push(new userModel("ryan", "1"));	//creates a stock ai userModel instance and stores the object in users[]
		users.push(new userModel("janice", "2"));//creates a stock ai userModel instance and stores the object in users[]
		users.push(new userModel("kody", "3"));	//creates a stock ai userModel instance and stores the object in users[]
		users.push(new userModel("vanessa", "4"));//creates a stock ai userModel instance and stores the object in users[]
		users[0].initializeAi();	//passes users object to initializeAi() in userModel.js
		users[1].initializeAi();	//passes users object to initializeAi() in userModel.js
		users[2].initializeAi();	//passes users object to initializeAi() in userModel.js
		users[3].initializeAi();	//passes users object to initializeAi() in userModel.js
		$.publish(this, "users:change");//publish event for users:change subcription
	}
	var post = function(userName, message){//recieves values and pushes them as an object into messages[]
		messages.push({
			userName: userName,
			message: message
		});
		$.publish(this, "messagePost");//publish event for messagePost
	};
	var getLastMessage = function(){ //this is designed to point to to the last message object stored
		
		return messages[messages.length-1];
	}
	var login = function(){			//this is the beginning of the login logic that will be available in a later version
		loggedIn = true;			//this variable will be used to determine if a user is still online
		displayUsersView.render(users);
	};
	var logout =function(){		//this is the beginning of logout logic that will be available in a later version
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
