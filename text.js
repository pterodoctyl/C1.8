jQuery.prototype.text = function(text){
	element = this.elements[0];
	if (typeof(text) == 'string'){
		element.textContent = text;
	}
	else if (typeof(text) == 'function'){
		element.textContent = text();
	}
	return element.textContent;
}