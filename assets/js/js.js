(function($) {
  $("html,body").animate({
    scrollTop: 1,
    speed: 0
  });

  setTimeout(function() {
    var mediaMatch = window.matchMedia("(max-width: 900px)");
    if (mediaMatch.matches) {
      $('.l-header__main__background__text').fadeIn();
    }
  }, 100);

  $(window).resize(function() {
    var mediaMatch = window.matchMedia("(max-width: 900px)");
    if (mediaMatch.matches) {
      $('.l-header__main__background__text').show();
    } else {
      $('.l-header__main__background__text').hide();
    }
    careerTabHeight();
  });

  $('.introJs').addClass('display-intro');
  $(window).load(function() {
    setTimeout(function() {
      $('.introJs').addClass('display-loaded');
    }, 400);
    setTimeout(function() {
      $('.introJs').addClass('display-block');
    }, 800);
    setTimeout(function() {
      $('.l-header__main__background__text').css({
        'color': 'black',
        'z-index': '200'
      });
    }, 950);
    setTimeout(function() {
      $('.introJs').removeClass('display-intro display-loaded');
    }, 1200);
    setTimeout(function() {
      $('.introJs').removeClass('display-block');
      var mediaMatch = window.matchMedia("(max-width: 900px)");
      if (mediaMatch.matches) {
        $('.l-header__main__scroll__wrapper').fadeIn();
      }
      $('.l-header__main__side-menu').addClass('l-header__main__side-menu_open');
    }, 1500);
    setTimeout(function() {
      $('.l-header__main__title').fadeIn();
    }, 2000);
    setTimeout(function() {
      $('.l-header__main__img').fadeIn();
    }, 2300);
    setTimeout(function() {
      var mediaMatch = window.matchMedia("(min-width: 901px)");
      if (mediaMatch.matches) {
        $('.l-header__main__scroll__wrapper').fadeIn();
      }
    }, 2500);
  });

  $(window).scroll(function() {
    $('.fade_slide').each(function() {
      var POS = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > POS - windowHeight + 200) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)',
          '-webkit-transform': 'translateY(0)',
          '-moz-transform': 'translateY(0)',
          '-ms-transform': 'translateY(0)'
        });
      }
    });
/*
    if ($(window).scrollTop() > $('.p-main__contact_wrapper').offset().top - $(window).height() + 50) {
      $('.localStorage_fixed').fadeOut();
    } else if($(window).scrollTop() > $('.p-main__about_wrapper').offset().top - $(window).height() + 50) {
      $('.localStorage_fixed').fadeIn();
    } else{
      $('.localStorage_fixed').fadeOut();
    }
*/
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
  });

  $('.l-header__nav__hambugermenu__button').click(function() {
    $('.l-header__nav__hambugermenu__button').toggleClass('open');
    $('body').toggleClass('menu_open');
    $('.l-header__nav__hambugermenu_wrapper').fadeToggle();
  });

  $('.l-header__nav__hambugermenu ul li a').click(function() {
    $('.l-header__nav__hambugermenu__button').click();
  });

  $('.more_button').click(function() {
    $('.p-main__project__contents_box_hide').fadeIn();
    $('.more_button').hide();
  });

  $('.more_button_close').click(function() {
    $('.p-main__project__contents_box_hide').fadeOut();
    $('.more_button').show();
    $('html, body').animate({
      scrollTop: $('#anc_10').offset().top - 600
    }, 500);
  });
  /*
  function slideTest(number) {
    var testHeight = $('.faq_text.current').outerHeight();
    $('.faq_text_box').css('height', testHeight);
    $('.faq_img').hide();
    $('.faq_text').hide().removeClass('current');
    $('.faq_button').removeClass('button_checked');
    $('.faq_button_img').removeClass('current_img');
    setTimeout(function() {
      $('.img_' + number).fadeIn().addClass('current_img');
      $('.text_' + number).fadeIn().addClass('current');
      $('.faq_button_' + number).addClass('button_checked');
      $('.faq_button_img#' + number).addClass('current_img');
    }, 100);
  };
  */
  $('.faq_button_img').click(function() {
    var buttonClickId = event.target.id;
    $('#slick-slide-control' + buttonClickId).click();
    $('.faq_button').removeClass('button_checked');
    $('.faq_button_' + buttonClickId).addClass('button_checked');
  });

  $('.career_button').click(function() {
    careerTabHeight();
    var careerButtonClickId = event.target.id;
    $('.career__tab_text').hide().removeClass('current');
    $('.career__tab_img').hide().removeClass('current');
    $('.career_button').removeClass('selected');
    setTimeout(function() {
      $('.career__tab_img_' + careerButtonClickId).fadeIn().addClass('current');
      $('.career__tab_text_' + careerButtonClickId).fadeIn().addClass('current');
      $('.career_button#' + careerButtonClickId).addClass('selected');
      careerTabHeight();
    }, 50);
  });

  function careerTabHeight(){
    var tabRightHeight = $('.career__tab_img.current').outerHeight();
    var tabLeftHeight = $('.career__tab_text.current').outerHeight();
    $('.career__right__tab').css('height', tabRightHeight);
    $('.career__left__tab').css('height', tabLeftHeight);
  };
})(jQuery);
