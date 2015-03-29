/** 
 * @Name		Challah
 * @Alias		challah.js
 * @URI			http://github.com/mookman288/Challah
 * @Author		PxO Ink
 * @AuthorURI	http://pxoink.net/
 * @License		MIT
 * @Copyright	© 2015 PxO Ink. Most Rights Reserved.
 */

var	Challah	=	(function() {
	//Use strict mode. 
	"use strict";
	
	//Instantiate Challah as an empty bowl. 
	function Challah() { 
		//If there is no console.
		if (typeof window.console === "undefined") {
			//Build console.
			window.console	=	{log: function() {}};
		}
	};
	
	//Declare variables.
	Challah.prototype.colors	=	Challah.prototype.colors || {
		//Set colors. 
		"black":	"#000", 
		"blue":		"#08B8FB", 
		"cerulean":	"#007BA7", 
		"green":	"#00B443", 
		"grey":		"#444", 
		"ketchup":	"#B80000", 
		"red":		"#F82B00", 
		"yellow":	"#F8B100"
	};
	Challah.prototype.effects	=	Challah.prototype.effects || {
		//Set effects. 
		debug:		function() {
			
		},
		error:		function() {
			
		}, 
		success:	function() {
			
		}, 
		warning:	function() {
			
		}
	}
	
	/**
	 * Debug logging wrapper. 
	 * 
	 * @param string message
	 * @param string|null color
	 * @param string|null background
	 * @param string|null effect
	 * @return boolean
	 */
	Challah.prototype.debug	=	function(message, color, background, effect) {
		if (typeof window.console.debug !== "undefined") {
			//Declare variables.
			var	color	=	color || "blue";
			var	color	=	(Challah.prototype.get("effects", color) !== color) ? Challah.prototype.get("effects", color) : 
				("color: " + (Challah.prototype.get("colors", color) || color));
			
			//If there is a message, log to console. 
			if (message.length)	console.debug("%c%s", color, message);
		} else {
			//Declare variables.
			var	color	=	color || "red";
			
			//If there is a message, Challah log.
			if (message.length)	Challah.prototype.log(message, color, background, effect);
		}
		
		//Return true;
		return true;
	}
	
	/**
	 * Error logging wrapper. 
	 * 
	 * @param string message
	 * @param string|null color
	 * @param string|null background
	 * @param string|null effect
	 * @return boolean
	 */
	Challah.prototype.error	=	function(message, color, background, effect) {
		if (typeof window.console.error !== "undefined") {
			//Declare variables.
			var	color	=	color || "red";
			var	color	=	(Challah.prototype.get("effects", color) !== color) ? Challah.prototype.get("effects", color) : 
				("color: " + (Challah.prototype.get("colors", color) || color));
			
			//If there is a message, log to console. 
			if (message.length)	console.error("%c%s", color, message);
		} else {
			//Declare variables.
			var	color	=	color || "red";
			
			//If there is a message, Challah log.
			if (message.length)	Challah.prototype.log(message, color, background, effect);
		}
		
		//Return true;
		return true;
	}
	
	/**
	 * Gets various Challah variables. 
	 * 
	 * @param string key
	 * @param string value
	 * @return Challah
	 */
	Challah.prototype.get	=	function(key, value) { 
		//Get the color.
		return Challah.prototype[key][value] || value;
	};
	
	/**
	 * Logging wrapper. 
	 * 
	 * @param string message
	 * @param string|null color
	 * @param string|null background
	 * @param string|null effect
	 * @return boolean
	 */
	Challah.prototype.log	=	function(message, color, background, effect, error) { 
		//Declare variables.
		var	color	=	color || "black";
		var	color	=	(Challah.prototype.get("effects", color) !== color) ? Challah.prototype.get("effects", color) : 
			("color: " + (Challah.prototype.get("colors", color) || color));
		
		//If there is a message, log to console. 
		if (message.length)	console.log("%c%s", color, message);
		
		//Return true;
		return true;
	};
	
	/**
	 * Sets various Challah variables. 
	 * 
	 * @param string key
	 * @param string value
	 * @return Challah
	 */
	Challah.prototype.set	=	function(key, value) { 
		switch(key) {
			case	"colors":
				//Set the color. 
				Challah.prototype.colors[key]	=	value;
			break;
		}
		
		//Return this.
		return this;
	};
	
	/**
	 * Warning logging wrapper. 
	 * 
	 * @param string message
	 * @param string|null color
	 * @param string|null background
	 * @param string|null effect
	 * @return boolean
	 */
	Challah.prototype.warning	=	function(message, color, background, effect) {
		if (typeof window.console.warn !== "undefined") {
			//Declare variables.
			var	color	=	color || "yellow";
			var	color	=	(Challah.prototype.get("effects", color) !== color) ? Challah.prototype.get("effects", color) : 
				("color: " + (Challah.prototype.get("colors", color) || color));
			
			//If there is a message, log to console. 
			if (message.length)	console.warn("%c%s", color, message);
		} else {
			//Declare variables.
			var	color	=	color || "red";
			
			//If there is a message, Challah log.
			if (message.length)	Challah.prototype.log(message, color, background, effect);
		}
		
		//Return true;
		return true;
	}
	
	//Bake Challah.
	return new Challah();
})(Challah);

//Set global alias functions.
var	_cd	=	function(m, c, b, e) { return Challah.debug(m, c, b, e); }
var	_ce	=	function(m, c, b, e) { return Challah.error(m, c, b, e); }
var	_cl	=	function(m, c, b, e) { return Challah.log(m, c, b, e); }
var	_cw	=	function(m, c, b, e) { return Challah.warning(m, c, b, e); }

/* AMD Starter

(function(name, library) {
    //Based on the method of library loading. 
    if (typeof module != 'undefined') {
        //If modules are being used, export the library as one. 
        module.exports    =     library();
    } else if (typeof define == 'function' && typeof define.amd == 'object') {
        //If AMD is being used, define the library. 
        define(library);
    } else { console.log(name);
        //Otherwise, simply return the library.
        this[name]        =    library();
    }
}('Challah', this, function () {

}));

*/