var usersOnlineView = function(){
	$el = document.getElementById("chatUsers");
	var displayUsers = function(users){
		
		
		
		
		userEl.innerHTML = users[0].userName;
		
		
		
	};
	var render = function(users){
		this.$el.innerHTML = "";
		var usersOnlineHeaderEl = document.createElement('div');
		usersOnlineHeaderEl.className = "usersOnlineHeader";
		usersOnlineHeaderEl.innerHTML= "Users Online";
		this.$el.appendChild(usersOnlineHeaderEl);
		var userListContainerEl = document.createElement('div');
		userListContainerEl.className = "userListContainer";
		this.$el.appendChild(userListContainerEl);
		var usersOnlineFooterEl = document.createElement('div');
		usersOnlineFooterEl.className = "usersOnlineFooter";
		var usersOnlineSearchImg = document.createElement('img');
		usersOnlineSearchImg.className = "usersOnlineSearchImg";
		for(i=0; i < users.length; i++){
			var userEl = document.createElement('li');
			userEl.className = "userOnlineName";
			userListContainerEl.appendChild(userEl);
			userEl.innerHTML = users[i].getUserName(); 
		};
	};
	return {
		$el: $el,
		displayUsers: displayUsers,
		render:render
	};
};