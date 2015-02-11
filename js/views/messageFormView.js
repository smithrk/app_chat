
var messageFormView = function(){					//namespace function
	var $el = document.getElementById("messageFormView");	//variable to clean up coding and access the chatRoom1 <div> in index.html
	var messageFormEl = document.createElement('input');
			messageFormEl.id = "inputMessageBlock";
			messageFormEl.type = "text";
			messageFormEl.name = "firstname";
	var submitButtonEl = document.createElement('button');
			submitButtonEl.id = "inputMessageButton";
			submitButtonEl.innerHTML = "Submit";
	var render = function(){		//creates elements, assigns classes, and passes data to the DOM
			$el.innerHTML = "";
			$el.appendChild(messageFormEl);
			$el.appendChild(submitButtonEl);
	};
	var initialize = function(){
		$($el).submit(function(e){
			e.preventDefault();
			$.publish(this,"userSubmit");
		});
	};
	return {render:render,
			initialize:initialize};

};

