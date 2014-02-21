
$(function () {
  new WOW().init();

  $('.wow').attr('data-wow-offset', '200');

  var $headerImg = $('.header-img'),
      $form = $('form'),
      $thankYou = $('#thank-you'),
      $job = $("#job");

  $headerImg.click(function () {
    $headerImg.toggleClass('rotate');
  });


  // Smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    var locationPath = location.pathname.replace(/^\//,''),
        hrefPath = this.pathname.replace(/^\//,'')
    if (locationPath ===  hrefPath && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = (
        target.length ?
        target :
        $('[name=' + this.hash.slice(1) +']')
      );
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });


  $form.on('submit', function (ev) {
    var form = ev.target,
        email = ev.target.email.value,
        url = ev.target.url.value;


    console.log('Email, url', email, url);

    ev.stopPropagation();

    $job.attr('hidden', '');
    $thankYou.removeAttr('hidden');

    window.analytics.identify(email, {
      email: email
    }, function () {
      window.analytics.track('job', {
        email: email,
        url: url
      });
    });

    $.ajax({
      url: '/api/job',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({ email: email, url: url })
    });

    return false;
  });


  $('a').on('click', function () {
    var a = this;


    if (a.id === 'cv') {
      window.analytics.track('Downloaded CV');
      return;
    }

    window.analytics.track('Clicked Link', {
      text: a.innerText
    });
  });

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  };

  function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  }
});
