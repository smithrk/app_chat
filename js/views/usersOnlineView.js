//This view creates all of the elements inside of the chatUsers div, assigns their class names, and passes data to the
//DOM via .innerHTML
var usersOnlineView = function(){ 				//namespace function
	$el = document.getElementById("chatUsers");	//variable to clean up code and access chatUsers <div>
	var render = function(users){		//creates elements, assigns classes, and passes data to the DOM via .innerHTML
		this.$el.innerHTML = "";
		var usersOnlineHeaderEl = document.createElement('div');
		usersOnlineHeaderEl.className = "usersOnlineHeader";
		usersOnlineHeaderEl.innerHTML= "Users Online";
		this.$el.appendChild(usersOnlineHeaderEl);
		var userListContainerEl = document.createElement('div');
		userListContainerEl.className = "userListContainer";
		this.$el.appendChild(userListContainerEl);
		for(i=0; i < users.length; i++){
			var userEl = document.createElement('li');
			userEl.className = "userOnlineName";
			userListContainerEl.appendChild(userEl);
			userEl.innerHTML = users[i].getUserName(); 
		};
	};
	return {
		$el: $el,
		render:render
	};
};