// Clasing.js
// fallback for browser that don't support classList
// by Jeremias Menichelli - http://jeremenichelli.github.com

if (document.documentElement.classList){
	// Assign function to classLIst ones
	var hasClass = function(el, c){
		return el.classList.contains(c)
	}
	var addClass = function(el, c){
		return el.classList.add(c)
	}
	var removeClass = function(el, c){
		return el.classList.remove(c)
	}
	var toggleClass = function(el, c){
		return el.classList.toggle(c)
	}
} else {
	// Given an element, converts classes into an array
	var classToArray = function(el){
		return el.getAttribute('class').split(/\s/);
	}
	// Given an array, returns a string
	var arrayToClass = function(cs){
		var nc = "";
		for (var i = 0; i < cs.length; i++) {
			nc += cs[i];
			if (i != cs.length-1) nc += " ";
		};
		return nc
	}
	// Checks if an element has a class
	var hasClass = function(el, c){
		var cs = classToArray(el);
		var flag = false;
		for (var i = 0; i < cs.length; i++) {
			if(cs[i] == c) flag = true;
		};
		return flag
	}
	// Adds a class (if there's not already there)
	var addClass = function(el, c){
		if(!hasClass(el, c)){
			var nc = el.getAttribute('class')+" "+c;
			el.setAttribute('class', nc);
		}
	}
	// Removes a class (if it's there)
	var removeClass = function(el, c){
		if(hasClass(el, c)){
			var cs = classToArray(el);
			for (var i = 0; i < cs.length; i++) {
				if(cs[i] == c){
					cs.splice(i,1);
				}
			};
			el.setAttribute('class', arrayToClass(cs));
		}
	}
	// Toggles a class in an element
	var toggleClass = function(el, c){
		hasClass(el, c) ? removeClass(el, c) : addClass(el, c);
	}
}
