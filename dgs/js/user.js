$(document).ready(function(){

	var line_number = 0;

	$(".add_button").click(function(){
		if (checkbox_rules()){
			$("tbody").append("<tr><td></td><td></td></tr>");
			line_number++;
			var selected_box = $("input:checkbox:checked");
			$.each(selected_box,function(index, value){
				var move_div_class = "." + $(value).attr("member");
				if ($(value).attr("position") == "left"){
					$(value).attr("position",line_number + "_f_left");
					$(value).prop("checked", false);
					$(value).attr("name","will_get");
					$(move_div_class).appendTo("#final_table tbody tr:last td:first-child");
				}else if($(value).attr("position") == "right"){
					$(value).attr("position",line_number + "_f_right");
					$(value).prop("checked", false);
					$(value).attr("name","will_get");
					$(move_div_class).appendTo("#final_table tbody tr:last td:last-child");
				}
			})
			delete_empty_row();
			height_equals("#final_result","#final_button");
		}
	});

	$(".delete_button").click(function(){
		if (remove_rules()){
			var selected_box = $("input:checkbox:checked");
			$.each(selected_box,function(index, value){
				var move_div_class = "." + $(value).attr("member");
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
		}else{
			alert("Sutundaki bütün veriler silinemez...")
		}
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

var remove_rules = function(){
	var result = [];
	$.each($("#final_table tr"),function(index, value){
		var final_left_checkboxs = $(value).find($("input[position*='f_left']")).size();
		var final_right_checkboxs = $(value).find($("input[position*='f_right']")).size();

		var final_left_checked_checkbox = $(value).find($("input[position*='f_left']:checked")).size();
		var final_right_checked_checkbox = $(value).find($("input[position*='f_right']:checked")).size();

		if((final_left_checkboxs == final_left_checked_checkbox) && (final_right_checkboxs != final_right_checked_checkbox)){
			result.push("0");
		}else if ((final_left_checkboxs != final_left_checked_checkbox) && (final_right_checkboxs == final_right_checked_checkbox)){
			result.push("0");
		}else{
			result.push("1");
		}
	});
	if(result.indexOf("0") != -1){
		return false;
	}else{
		return true;
	}
}
