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
	function Challah() {};
	
	//Declare variables.
	Challah.prototype.colors	=	Challah.prototype.colors || {
		//Set colors. 
		"black":	"#000", 
		"blue":		"#08B8FB", 
		"cerulean":	"#007BA7", 
		"error":	"#F82B00",
		"green":	"#00B443", 
		"grey":		"#444", 
		"ketchup":	"#B80000", 
		"red":		"#F82B00", 
		"success":	"#00B443", 
		"warning":	"#F8B100", 
		"yellow":	"#F8B100"
	};
	Challah.prototype.effects	=	Challah.prototype.effects || {
		//Set effects. 
	}
	
	/**
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
	 * 
	 * @param string message
	 * @param string|null color
	 * @param string|null effect
	 * @return Challah
	 */
	Challah.prototype.log	=	function(message, color, effect) { 
		//Declare variables.
		var	color	=	color || "black";
		var	color	=	"color: " + (Challah.prototype.get("colors", color) || color);
		
		//If there is a message, log to console. 
		if (message.length)	console.log("%c%s", color, message);
		
		//Return this.
		return this;
	};
	
	//Bake Challah.
	return new Challah();
})(Challah);

//Set global alias functions.
var	_ce	=	function(m, c, e) { return Challah.error(m, c, e); }
var	_cl	=	function(m, c, e) { return Challah.log(m, c, e); }