Ext.define('LearningExt.model.Anie', {
	name: 'Anie', //when we pull this out into a person object this will make more sense
	message: '', //do properties get listed here? I want to let people know this is a property, but I dont
	//want to set it to an empty string. But I have to otherwise the compiler complains

	translate: function(whatSheSaid){
		if(whatSheSaid){
			this.message = whatSheSaid
		}

		if(this.message){
			//TODO: when this is refactored take this chunk of logic and make it unique between people
			//the rest of this is the same
			return this.message.toUpperCase(); //she is just yelling at the moment
		}
		else{
			console.log('how do we handle errors');
		}
	}

});