$(document).ready(function () {
  $('#back-to-top').hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    $('#back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 900);
      return false;
    });
  });

  $('#collapse').hide();
  $('#toggler').click(function(){
    const arrow = $('#privacy-arrow-icon');
    if (arrow.hasClass('fa-chevron-down')) {
      arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
      arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
    $('#collapse').toggle();
  });

});

$(window).bind('orientationchange', function (event) {
  location.reload();
});

$.get('https://hitcounter.pythonanywhere.com/count', function (data) {
  $('.result').html(data);
  console.log(data);
});
