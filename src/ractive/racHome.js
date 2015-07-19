(function(Ractive, $){
	//  Socket connection to enable real-time communication with other clients
	// var socket = app.getSocket();
	// Initiaze Dynamic Data binding
	// For more info look into http://www.ractivejs.org/ Online	
	var ractive = new Ractive({
		el : '#wsRactive', 
		template : "#template",
		data: {
			page : function(a){
				return a === "home";
			},
			IsLeftSlide : function(c){
				return c === "1";
			}
		}
	});

	// Handler of Ractive functions
	ractive.on({
		handleSampleClick : handleSampleClick
	});

	function handleSampleClick(){
		console.log("Click is Handle");
	}

	(function() {
		console.log("Done");
		$.app.init();
		ractive.set({"welcome":{"iis":[{"t":"Inspiring design","i":"comment-o","p":"I aspire create inspiring design, with Great user interface to captivates attention while conveying important information."},{"t":"Efficent code","i":"keyboard-o","p":"I code with reusability and scalability in mind. I venture to maintain the best practices of software design that relate to each respesctive project."},{"t":"Impactful Impression","i":"heart-o","p":"I hope to help my client better serve their customers by providing them service that produce an impacful impression!"}],"t":"Welcome to WSpecs","s":"User friendly design that meets clients specifications!","m":"Learn More!","sl":"Inspire, Improve, \u0026 Serve","ms":"Above all, I want to be a friend to mankind and a servant of the living God!"}});
		ractive.set({"slides":{"s":[{"t":"Inspire","s":"Live to inspire others.","p":"In life we must always strive to positively influence others. \u003Cbr\u003E \r\nSeek out the best in others and let it be known. \u003Cbr\u003E\r\nLive out loud and be a role model!","b":"inspire","i":"ban2","c":"0","l":"about.html"},{"t":"Improve","s":"Never settle in the long run. ","p":"Build on little progress and seek for way to optimize previous solutions. \r\n\u003Cbr\u003Ein the long constructive criticism help build a better character\r\n\u003Cbr\u003EThere is always room for improvement; ","b":"improve","i":"ban2","c":"1","l":"about.html"},{"t":"Serve","s":"Give back to the world!","p":"Life is not simply about survival and being significant. \r\n\u003Cbr\u003EIt\u2019s about making our world and better place. \r\n\u003Cbr\u003EGive back, Befriend the world, and serve God!","b":"serve","i":"ban2","c":"0","l":"about.html"}],"m":"Learn More!"}});
		ractive.set({"showcase":{"t":"Hymnes \u0026 Louanges","p":"This is web application is a digitize verison of the \u0022Hymnes \u0026 Louanges\u0022 Hymnal. In this complete digitize version, the user can search for all the songs. All the songs are sorted by alphabetically and numerically. This application also provide fullscreen presentations of the songs.","d":{"t":"Take a look!","l":"http:\/\/wspecs.com\/hl"},"s":{"t":"View source code!","l":""}}});
		ractive.set({"quote":{"q":"Let no man pull you so low as to hate him.","a":"Martin Luther King Jr","m":"was an American pastor, activist, humanitarian, and leader in the African-American Civil Rights Movement (January 15, 1929 - April 4, 1968)","t":"Quote du Jour!"}});
		ractive.set({"logos":[{"r":"http:\/\/www.bitcauldron.com\/","i":"bit","t":"BitCauldron Software Developer"},{"r":"http:\/\/www.floridainnovationhub.ufl.edu","i":"ufinov","t":"BitCauldron @ UF Innovation Hub"},{"r":"http:\/\/www.hdsupply.com","i":"hds","t":"HD Supply Intern"}]});
	})();

})(Ractive, $);