var appChatRoom = (function(){ 
	$.getScript("/js/plugins/pubSubPlugin.js");
	$.getScript("/js/views/messageView.js");
	$.getScript("/js/models/messageModel.js");
	$.getScript("/js/models/userModel.js");
	$.getScript("/js/controllers/chatRoomController.js");
	var start = function(){
		this.chatRoom = new chatRoomController();	
		this.chatRoom.initialize();
	};
	return {
		start:start,
		chatRoom:this.chatRoom
	}
})();