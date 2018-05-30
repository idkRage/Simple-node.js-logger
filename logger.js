/*

 *******************************************
 *                                         *
 *        Copyright: Rage aka Wawy         *
 *       Project started: 10.5.2018        *
 *                                         *
 *******************************************
 
*/


//Require all modules
const colors = require("colors");


//Simple error logger
function logg(t,m,a){ //Pass argumnets like: type("info", "log", "warning", "error", "success"), message, additional text(colored yellow)
	new Logger(t,m,a);
};

function Logger(type, msg, additions){
	if(!type){ this.log("error", "You forgot to pass the 'type' argument for `Logger()` function"); return };
	if(!msg){ this.log("error", "You forgot to pass the 'message' argument for `Logger()` function"); return };
	
	this.message = msg;
	this.type = type;
	
	
	//Check if there is a third argument
	if(additions){
		this.logWidthAdditions(this.type, this.message, additions);
	} else {
	    this.log(this.type, this.message);
	}
};



//Some case blocks to figure out what type the message is
Logger.prototype = {
	
	
	//Normal log, only two arguments
	log: function(a,b){
	    switch(a){
		
		    case "log":
			console.log("\n");
		    console.log("[Log] ".green + b);
		    break;
			
			case "info":
			console.log("\n");
		    console.log("[Info] ".cyan + b);
		    break;
			
		    case "warning":
			console.log("\n");
		    console.log("[Warning] ".yellow + b);
		    break;
			
			case "success":
			console.log("\n");
		    console.log("[Success] ".magenta + b + "!");
		    break;
		 
		    case "error":
			console.log("\n");
		    console.log("[Error] ".red + b + "!");
		    break;
	    }
    },
	
	
	//Used if there is a third argument
	logWidthAdditions: function(a,b,c){
	    switch(a){
		
		    case "log":
			console.log("\n");
		    console.log("[Log] ".green + b + " " + c.magenta);
		    break;
			
			case "info":
			console.log("\n");
		    console.log("[Info] ".cyan + b + " " + c.magenta);
		    break;
			
			case "warning":
			console.log("\n");
		    console.log("[Warning] ".yellow + b + " " + c.magenta);
		    break;
			
				case "success":
			console.log("\n");
			console.log("[Sucess] ".magenta + b + " " + c.magenta + "!");
		    break;
			
			case "error":
			console.log("\n");
		    console.log("[Error] ".red + b + " " + c.magenta);
		    break;
	    }
    },
};


//Ignore, just exporting it as the `logg` function
module.exports = logg;
