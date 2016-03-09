$(document).ready(function(){

	var line_number = 0;

	$(".add_button").click(function(){
		if (checkbox_rules()){
			$("tbody").append("<tr><td></td><td></td></tr>");
			line_number++;
			var selected_box = $("input:checkbox:checked");
			$.each(selected_box,function(index, value){
				var move_div_class = "." + $(value).attr("value");
				if ($(value).attr("position") == "left"){
					$(value).attr("position",line_number + "_f_left");
					$(value).prop("checked", false);
					$(move_div_class).appendTo("#final_table tbody tr:last td:first-child");
				}else if($(value).attr("position") == "right"){
					$(value).attr("position",line_number + "_f_right");
					$(value).prop("checked", false);
					$(move_div_class).appendTo("#final_table tbody tr:last td:last-child");
				}
			})
			delete_empty_row();
			height_equals("#final_result","#final_button");
		}
	});

	$(".delete_button").click(function(){
		var selected_box = $("input:checkbox:checked");
		$.each(selected_box,function(index, value){
			var move_div_class = "." + $(value).attr("value");
			if ($(value).attr("position").indexOf("f_left") != -1){
				$(value).attr("position","left");
				$(value).prop("checked", false);
				$(move_div_class).appendTo("#list_left .mutliSelect ul");
			}else if ($(value).attr("position").indexOf("f_right") != -1){
				$(value).attr("position","right");
				$(value).prop("checked", false);
				$(move_div_class).appendTo("#list_right .mutliSelect ul");
			}
		});
		delete_empty_row();
		height_equals("#final_result","#final_button");
	})

})



var delete_empty_row = function(){
	$.each($("#final_table tr"),function(index, value){
		console.log($(value).find("td").find("div").size());
		if ($(value).find("td").find("div").size() == 0){
			$(this).remove();
		}
	})
}

var height_equals = function(div1, div2){
	var size = $(div1).css("height");
	$(div2).css("height", size);
}

var checkbox_rules = function(){
	var number_left_checked = $("#list_left").find("input:checkbox:checked").size();
	var number_right_checked = $("#list_right").find("input:checkbox:checked").size();
	if ((number_left_checked == 0) || (number_right_checked == 0)){
		alert ("Seçilmemiş kutu var...!!!");
		return false;
	}else if ((number_left_checked > 1) && (number_right_checked > 1)){
		alert ("İkili çoklu seçim yapılamaz...!!!");
		return false;
	}else if ((number_left_checked == 1) || (number_right_checked == 1)){
		return true;
	}else{
		alert("Bir şey ters gitti...");
	}
}