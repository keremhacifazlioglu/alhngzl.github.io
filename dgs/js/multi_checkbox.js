$(document).ready(function(){
  $("#list_left .dropdown dt a").on('click', function() {
    $("#list_left .dropdown dd .mutliSelect ul").slideToggle('fast');
  });

  $("#list_left .dropdown dd .mutliSelect ul li a").on('click', function() {
    $("#list_left .dropdown dd .mutliSelect ul").hide();
  });

  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $("#list_left .dropdown dd .mutliSelect ul").hide();
  });

  $("#list_right .dropdown dt a").on('click', function() {
    $("#list_right .dropdown dd .mutliSelect ul").slideToggle('fast');
  });

  $("#list_right .dropdown dd .mutliSelect ul li a").on('click', function() {
    $("#list_right .dropdown dd .mutliSelect ul").hide();
  });

  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $("#list_right .dropdown dd .mutliSelect ul").hide();
  });
/*
  $('.mutliSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
    title = $(this).val() + ",";

    if ($(this).is(':checked')) {
      var html = '<span title="' + title + '">' + title + '</span>';
      $('.multiSel').append(html);
      $(".hida").hide();
    } else {
      $('span[title="' + title + '"]').remove();
      var ret = $(".hida");
      $('.dropdown dt a').append(ret);

    }
  });

  function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
  }
  */
})