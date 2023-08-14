$(document).ready(function() {
  $("ul#topnav li").hover(function() {
    $(this).css({ 'background' : 'rgba(0, 0, 0, 0.4)'});
    $(this).find("span").show();
  } , function() {
    $(this).css({ 'background' : 'none'});
    $(this).find("span").hide();
  });
});