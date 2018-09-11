$(document).ready(function(){
	'use strict';
	
	// Locations Menu Show/Hide
	$("#filter-locations, #filter-locations-arrow").click(function(){
		var x = document.getElementById("filter-locations-options");

		if (x.style.display === "none") {
			$("#filter-locations-options").slideDown(200);
			$("#filter-locations-arrow").removeClass("closed");
			$("#filter-locations-arrow").addClass("opened");
		}
		else {
			$("#filter-locations-options").slideUp(200);
			$("#filter-locations-arrow").removeClass("opened");
			$("#filter-locations-arrow").addClass("closed");
		}
	});
	
	// Activites Menu Show/Hide
	$("#filter-activities, #filter-activities-arrow").click(function(){
		var x = document.getElementById("filter-activities-options");

		if (x.style.display === "none") {
			$("#filter-activities-options").slideDown(200);
			$("#filter-activities-arrow").removeClass("closed");
			$("#filter-activities-arrow").addClass("opened");
		}
		else {
			$("#filter-activities-options").slideUp(200);
			$("#filter-activities-arrow").removeClass("opened");
			$("#filter-activities-arrow").addClass("closed");
		}
	});
	
	// Studios Menu Show/Hide
	$("#filter-studios, #filter-studios-arrow").click(function(){
		var x = document.getElementById("filter-studios-options");

		if (x.style.display === "none") {
			$("#filter-studios-options").slideDown(200);
			$("#filter-studios-arrow").removeClass("closed");
			$("#filter-studios-arrow").addClass("opened");
		}
		else {
			$("#filter-studios-options").slideUp(200);
			$("#filter-studios-arrow").removeClass("opened");
			$("#filter-studios-arrow").addClass("closed");
		}
	});
	
	// Amenities Menu Show/Hide
	$("#filter-amenities, #filter-amenities-arrow").click(function(){
		var x = document.getElementById("filter-amenities-options");

		if (x.style.display === "none") {
			$("#filter-amenities-options").slideDown(200);
			$("#filter-amenities-arrow").removeClass("closed");
			$("#filter-amenities-arrow").addClass("opened");
		}
		else {
			$("#filter-amenities-options").slideUp(200);
			$("#filter-amenities-arrow").removeClass("opened");
			$("#filter-amenities-arrow").addClass("closed");
		}
	});
	
	// Description Show/Hide
	$(".class").hover(function(){
		$(this).find(".description").stop(true,true).delay(400).slideDown(200);
	});
	
	$(".class").mouseleave(function(){
		$(this).find(".description").stop(true,true).slideUp(200);
	});
	
	// Profile Menu Show/Hide
	$("#avatar").click(function(){
		var x = document.getElementById("profile-menu");

		if (x.style.display === "none") {
			$("#profile-menu").slideDown(200);
			$("#profile-arrow").removeClass("closed");
			$("#profile-arrow").addClass("opened");
		}
		else {
			$("#profile-menu").slideUp(200);
			$("#profile-arrow").removeClass("opened");
			$("#profile-arrow").addClass("closed");
		}
	});
});