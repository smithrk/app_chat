//app-chatroom.js is our central js file that pulls together all of our calls for our individual js 
//controllers, views, and models.
var appChatRoom = (function(){ 
	$.getScript("/js/plugins/pubSubPlugin.js"); //js plugin added to streamline subcriptions and publishing
	$.getScript("/js/views/messageView.js");    //view to create elements inside of <div id="chatroom1">
	$.getScript("/js/views/usersOnlineView.js");//view to create elements for the list of users online
	$.getScript("/js/views/chatTextEntryView.js")//view to create elements for the message entry form
	$.getScript("/js/models/messageModel.js");  //model to define individual message object. userName and message
	$.getScript("/js/models/userModel.js");  //model to define an individual user, contains stock messages, and ai functionality for message posting
	$.getScript("/js/controllers/chatRoomController.js"); //main controller to interact with models and views
	debugger
	var start = function(){							//function access chatRoomController so that we can initialize the application
		this.chatRoom = new chatRoomController();	
		this.chatRoom.initialize();
	};
	return {
		start:start,								//return to provide access to the start
		chatRoom:this.chatRoom 						//return to provide access to functions within chatRoomController
	}
})();
$(function(){										//failed attempt to auto run the start function when index.html loads
	setTimeout(appChatRoom.start(), 500000);
});