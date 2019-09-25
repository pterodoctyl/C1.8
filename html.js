jQuery.prototype.html = function(html){
	element = this.elements[0];
	if (typeof(html) == 'string'){
		element.innerHTML = html;
	} 
	else if (typeof(html) == 'function'){
		element.innerHTML = html();
	}
	return element.innerHTML;
}