/*
 * Megan Yates
 * March 27th, 2016
 * CS1520 - Programming Languages for Web Applications
 *
 * BONUS ONE
 *
 * Details from http://www.mattbowytz.com/bonus1/bonus-recs.html
 * Using javascript and/or jQuery, you will make a call to an api to retrieve search terms for a "type ahead" search
 * When the user begins to type something, it should filter out the data list and present the relevant results
 * Upon display of the results, the user should be able to click on them and it will take you to google search results for that term
 * The url is "http://www.mattbowytz.com/simple_api.json"
 * You will need to append a query param called "data" and you can request "all", "interests", or "programming"
 * Style for the results should match the existing form as closely as possible
 */

var results;

(function() { // The anonymous function will fire on page load
	// Retrive data from API
	$.getJSON('http://www.mattbowytz.com/simple_api.json?data=all', function(data){
		console.log(data);	
		results = data.data.interests;
		for(var i = 0; i < data.data.programming.length; i++) // Add both arrays to global array results
			results.push(data.data.programming[i]);
	});
})();


function generateList(){ // Upon a keyup event (found in html file with search bar), call function 
	var text = document.getElementById("searching").value.toLowerCase(); // Retrieve text in search bar 
	if($("#searching").val() == ""){ // If none, do not display the list of results array
		$("#list").hide();
	}
	else $("#list").show();

	var output = "";
	var i;
	for(i = 0; i < results.length; i++){ // Loop through every item in the results array
		var substring = results[i].toLowerCase().substring(0, text.length); // Grab the beginning letters of the item in the array up to the length of text in search bar
    	if(substring == text){ // If the substring and text are a match, display in list and add Google link
			output += '<li><a href="https://www.google.com/webhp?hl=en#hl=en&q=' + results[i] + '">' + results[i] + '</a></li>';
    	}
    }
    $("#list").html(output);
}
		