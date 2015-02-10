var userModel = function(userName, Id){
	var userName = userName;
	var loggedIn = false;
	var Id = Id;
	if(!userName && !Id){
		return null;
	}
	var messages = [
	
	"Hello everyone!",
	"Hi ",
	"Hey ",
	"Hola ",
	"bonjour",
	"ahoj",
	"hallo",
	"Dia duit",
	"здравствуйте"];

	function submitMessage(message){
		appChatRoom.chatRoom.post(userName, message);
	}
	function aiMessage(speed){
		if(appChatRoom.chatRoom.messagePointer >= messages.length){
			appChatRoom.chatRoom.messagePointer = 0;
		}
		if(appChatRoom.chatRoom.messagePointer > 0){
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
	function initializeAi(){
		if(!appChatRoom.chatRoom.messagePointer){
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

