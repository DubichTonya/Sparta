// video-youtube
var youtube = document.querySelectorAll( ".youtube" );
for (var i = 0; i < youtube.length; i++) {
    // var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    var source = "img/video-bg.jpg";
    var image = new Image();
            image.src = source;
            image.addEventListener( "load", function() {
                youtube[ i ].appendChild( image );
            }( i ) );

            youtube[i].addEventListener( "click", function() {
                var iframe = document.createElement( "iframe" );
                iframe.setAttribute( "frameborder", "0" );
                iframe.setAttribute( "allowfullscreen", "" );
                iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                this.innerHTML = "";
                this.appendChild( iframe );
            } );
};

// слайдер

$('.slider').slick({
  dots: true,
  dotsClass: "slider-dots",
  nextArrow: '<button type="button" class="slider__next slider__btn">Вперед</button>',
  prevArrow: '<button type="button" class="slider__prev slider__btn">Назад</button>'

});


//mail
$("form").submit(function () { //Change
  var form = $(this).attr('class').split(' ')[0];
  var msg = "&form=" + form + "&" + $(this).serialize();
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: msg
  }).done(function () {
    var formObj = $('.' + form);
    var f_h = $(formObj).children('.form_wrp').height();
    var f_w = $(formObj).children('.form_wrp').width();
    var content = "";

    $(formObj).height(f_h);
    $(formObj).width(f_w);

    content = "<div class='rezult' style='display:none;'>";
    content += "<div class='msg_submit_wrp'>";
    content += "<div class='msg_submit'>";
    content += "Спасибо, что оставили заявку!<br> С Вами скоро свяжутся."
    content += "</div>";
    content += "</div>";
    content += "</div>";

    $(formObj).children('.form_wrp').after(content);
    $(formObj).children('.form_wrp').fadeOut();
    $(formObj).children('.rezult').fadeIn();

    setTimeout(function () {
      // Done Functions
      $(this).trigger("reset");
    }, 1000);
  });
  return false;
});




// modal

  $('.md-button').on('click', function (e) {
    e.preventDefault;
    $(".md-modal").addClass('md-show');
  })

  $('.md-overlay, .md-close').on('click', function (e) {
    $(".md-modal").removeClass('md-show');
  })





});
