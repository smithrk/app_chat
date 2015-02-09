var userModel = function(userName, Id){
	var userName = userName;
	var Id = Id;
	if(!userName && !Id){
		return null;
	}
	var messages = [
	
	"What it is y'all?",
	"Hi ",
	"Message Three",
	"Message Four",
	"Message Five"];

	function submitMessage(speed){
		if(appChatRoom.chatRoom.messagePointer >= messages.length){
			appChatRoom.chatRoom.messagePointer = 0;
		}
		debugger
		if(appChatRoom.chatRoom.messagePointer > 0){
		var message = "@" + appChatRoom.chatRoom.getLastMessage().userName 
						  + " " + messages[appChatRoom.chatRoom.messagePointer];
		}
		else{
			var message = messages[appChatRoom.chatRoom.messagePointer];
		}
		appChatRoom.chatRoom.post(userName, message);
		appChatRoom.chatRoom.messagePointer++;
		var randomTime = Math.random()*(5000-1000) + 1000;
		setTimeout(submitMessage, randomTime);
	}
	(function initialize(){
		if(!appChatRoom.chatRoom.messagePointer){
		appChatRoom.chatRoom.messagePointer = 0;
		}
		var randomTime = Math.random()*(5000-1000) + 1000;
		setTimeout(submitMessage, randomTime);
	})();
	return {submitMessage:submitMessage}
}

