$(document).ready(function(){
	'use strict';
	
	// Locations Menu Show/Hide
	$("#filter-locations, #filter-locations-arrow").click(function(){
		var x = document.getElementById("filter-locations-options");

		if (x.style.display === "none") {
			$("#filter-locations-options").slideDown(200);
			$("#filter-locations-arrow").removeClass("closed");
		}
		else {
			$("#filter-locations-options").slideUp(200);
			$("#filter-locations-arrow").addClass("closed");
		}
	});
	
	// Activites Menu Show/Hide
	$("#filter-activities, #filter-activities-arrow").click(function(){
		var x = document.getElementById("filter-activities-options");

		if (x.style.display === "none") {
			$("#filter-activities-options").slideDown(200);
			$("#filter-activities-arrow").removeClass("closed");
		}
		else {
			$("#filter-activities-options").slideUp(200);
			$("#filter-activities-arrow").addClass("closed");
		}
	});
	
	// Studios Menu Show/Hide
	$("#filter-studios, #filter-studios-arrow").click(function(){
		var x = document.getElementById("filter-studios-options");

		if (x.style.display === "none") {
			$("#filter-studios-options").slideDown(200);
			$("#filter-studios-arrow").removeClass("closed");
		}
		else {
			$("#filter-studios-options").slideUp(200);
			$("#filter-studios-arrow").addClass("closed");
		}
	});
});