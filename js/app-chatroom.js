//app-chatroom.js is our central js file that pulls together all of our calls for our individual js 
//controllers, views, and models.
var appChatRoom = (function(){ 
	
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