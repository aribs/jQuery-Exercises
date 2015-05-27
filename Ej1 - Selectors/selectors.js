// Put a border in the following elements

// all the elements: Example
//$("*").css("border", "solid 1px");

// the div with the id of myContent
	//$("#myContent").css("border", "solid 1px");
// li elements
	//$("li").css("border", "solid 1px");
// li with the basic class
	//$(".basic").css("border", "solid 1px");
// The first li element with css selectors
	//$("li:first").css("border", "solid 1px");
// The second li element with traversing filters
	//$("#myContent").css("border", "solid 1px");
// The last p with css selectors
	//$("li:last-child").css("border", "solid 1px");
// The last p with traversing filters
	//$("li:last").css("border", "solid 1px");
// The label element that has an element with the id love
	//$("label").has("#love").css("border", "solid 1px");
// The li element that has no new class
	//$("li").not(".new").css("border", "solid 1px");
// The a element with href property is 'http://www.api.jquery.com/'
	//$("a[href='http://www.api.jquery.com/']").css("border", "solid 1px");
	//$("a").prop("href","http://www.api.jquery.com/").css("border", "solid 1px");
// The a element with href property starts by http://www.
	//$('a[href^="http://www."]').css("border", "solid 1px");
// The a element with href property contains api
	//$('a[href^="api"]').css("border", "solid 1px");
// The p elements
	//$('p').css("border", "solid 1px");
// The p elements inside myContent div
	//$('#myContent').has('p').css("border", "solid 1px");
// The parent element to the jquery-ui element
	//$('p').parent().css("border", "solid 1px");
// The siblings to the slogan p
	
// The p elements not inside myContent div
	//$('p').not('#myContent').css("border", "solid 1px");
// The li elements that starts with jQuery. Tip: http://www.w3schools.com/jsref/jsref_substring.asp
