$(document).ready(function() {
	var play_durum = 0;
	var design_durum = 0;
	var gist_durum = 0;
	var gmail_durum = 0;
	var linkedin_durum = 0;
	var sites_durum = 0;
	var dgs_durum = 0;
	$("#play").click(function(){
		if (play_durum == 0){
			$("#play_a").animate({width: "800px"},500);
			play_durum = 1;
		}else if (play_durum === 1){
			$("#play_a").animate({width: "250px"},500);
			play_durum = 0;
		}
	});
	$("#design").click(function(){
		if (design_durum == 0){
			$("#design_a").animate({width: "800px"},500);
			design_durum = 1;
		}else if (design_durum == 1){
			$("#design_a").animate({width: "250px"},500);
			design_durum = 0;
		}
	});
	$("#gist").click(function(){
		if (gist_durum == 0){
			$("#gist_a").animate({width: "800px"},500);
			gist_durum == 1;
		}else if (gist_durum == 1){
			$("#gist_a").animate({width: "250px"},500);
			gist_durum == 0;
		}
	});
	$("#gmail").click(function(){
		if (gmail_durum == 0) {
			$("#gmail_a").animate({width: "800px"},500);
			gmail_durum = 1;
		}else if (gmail_durum == 1){
			$("#gmail_a").animate({width: "250px"},500);
			gmail_durum = 0;
		}
	});
	$("#linkedin").click(function(){
		if (linkedin_durum == 0){
			$("#linkedin_a").animate({width: "800px"},500);
			linkedin_durum = 1;
		}else if(linkedin_durum == 1){
			$("#linkedin_a").animate({width: "250px"},500);
			linkedin_durum = 0;
		}
	});
	$("#sites").click(function(){
		if (sites_durum == 0){
			$("#sites_a").animate({width: "800px"},500);
			sites_durum = 1;
		}else if (sites_durum == 1){
			$("#sites_a").animate({width: "250px"},500);
			sites_durum = 0;
		}
	});
	$("#dgs").click(function(){
		if (dgs_durum == 0){
			$("#dgs_a").animate({width: "800px"},500);
			dgs_durum = 1;
		}else if (dgs_durum == 1){
			$("#dgs_a").animate({width: "250px"},500);
			dgs_durum = 0;
		}
	});
})
