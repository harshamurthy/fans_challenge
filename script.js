mainHeight = $(window).height();
console.log(mainHeight);

$(function() {
  $('section.main').css({"height": mainHeight});
});
