//This model defines what a user is, stores generic ai message strings in an array, and containes the ai logic that 
//drives the fake users to decide when and what message to post.
var userModel = function(userName, Id){//namespace function
	var userName = userName;		
	var loggedIn = false;				//variable to preset our loggedIn tracker
	var Id = Id;
	if(!userName && !Id){
		return null;
	}
	var messages = [					//array of generic messages to be displayed by ai users
	
	"Hello everyone!",
	"Hi ",
	"Hey ",
	"Hola ",
	"bonjour",
	"ahoj",
	"hallo",
	"Dia duit",
	"здравствуйте"];

	function submitMessage(message){	//function to be used in a later version when userTextEntry form is available
		appChatRoom.chatRoom.post(userName, message);
	}
	function aiMessage(speed){			//This is a looping function that controls the random timing an user users to decide when to post
		if(appChatRoom.chatRoom.messagePointer >= messages.length){ //conditional statement to restart the message availability
			appChatRoom.chatRoom.messagePointer = 0;
		}
		if(appChatRoom.chatRoom.messagePointer > 0){//conditional statement compiling message to previous poster 
		var message = "@" + appChatRoom.chatRoom.getLastMessage().userName 
						  + " " + messages[appChatRoom.chatRoom.messagePointer];
		}
		else{
			var message = messages[appChatRoom.chatRoom.messagePointer];
		}
		appChatRoom.chatRoom.post(userName, message);
		appChatRoom.chatRoom.messagePointer++;
		var randomTime = Math.random()*(10000-1000) + 1000;
		if(loggedIn === true){
			setTimeout(aiMessage, randomTime);
		};
	}
	function initializeAi(){					//this allows our ai users to have a random delay before their first post
		if(!appChatRoom.chatRoom.messagePointer){//to make the initial posts seem more natural 
		appChatRoom.chatRoom.messagePointer = 0;
		}
		loggedIn = true;
		var randomTime = Math.random()*(10000-1000) + 1000;
		setTimeout(aiMessage, randomTime);
	};
	function getUserName(){					
		return userName;
	};
	return {submitMessage:submitMessage,
			initializeAi:initializeAi,
			getUserName:getUserName,
			loggedIn:loggedIn};
};

