var usersOnlineView = function(){
	$el = document.getElementById("chatUsers");
	displayUsers = function(users){
		debugger
		var usersOnlineHeaderEl = document.createElement('div');
		usersOnlineHeaderEl.className = "usersOnlineHeader";
		var userListContainerEl = document.createElement('div');
		userListContainerEl.className = "userListContainer";
		var userEl = document.createElement('p');
		userEl.className = "userOnlineName";
		userListContainerEl.appendChild(userEl);
		userEl.innerHTML= users[0].userName;
		usersOnlineHeaderEl.innerHTML= "Users Online";
		this.$el.appendChild(usersOnlineHeaderEl);
		this.$el.appendChild(userListContainerEl);
		userListContainerEl.scrollIntoView();
	};

	return {
		$el: $el,
		displayUsers: displayUsers
	}
};