/***========================= I could put these scripts in html header but I have used in jS , to practice only in DOM.***/

function waitForSlick(trigger) {
    var interval = setInterval(function () {
        if (window.jQuery.fn.slick != undefined) {
            clearInterval(interval);
            trigger();
        }
    }, 50);
    setTimeout(function () {
        clearInterval(interval);
    }, 15000)
  }

  function waitForjQuery(trigger) {
    var interval = setInterval(function () {
        if (window.jQuery != undefined) {
            clearInterval(interval);
            trigger();
        }else{
          addJQuery()
        }
    }, 50);
    setTimeout(function () {
        clearInterval(interval);
    }, 15000)
  }

  function addJQuery() {
    var jQuery = document.createElement("script");
    jQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jQuery);
  }

  function addScript() {
    var cssScript=''+ 
    "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
    document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
        
    var swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    document.getElementsByTagName('head')[0].appendChild(swiperScript);
    }


    function init() {
        waitForjQuery(function() {
          addScript();
  
          waitForSlick(function() {
            var $ = window.jQuery;
            $('.logos').not('.slick-initialized').slick({
                dots: true,
              infinite: true,
              autoplay: true,
              speed: 300,
              slidesToShow: 5,
              centerMode: true,
            //   prevArrow: '<i class="fa fa-chevron-left left"></i>',
            //   nextArrow: '<i class="fa fa-chevron-left left"></i>',

              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
            });   
  
          });
  
        });
      }
  
      init();

      setTimeout(() => {
        
        document.querySelector("section.companies-section > div > div.logos button.slick-prev.slick-arrow").innerHTML = `<i class="fa fa-chevron-left left"></i>`
        document.querySelector("section.companies-section > div > div.logos button.slick-next.slick-arrow").innerHTML = `<i class="fa fa-chevron-right right"></i>`
      }, 4000); 