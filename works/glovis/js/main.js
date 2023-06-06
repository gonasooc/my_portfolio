$(function(){
    // 메뉴 풀다운 
    $('.gnb').mouseenter(function(){
        $('#header').addClass('on');
        $('#header .util .lang-box .btn_lang').addClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideDown(150);
    });
    $('.gnb').mouseleave(function(){
        $('#header').removeClass('on');
        $('#header .util .lang-box .btn_lang').removeClass('on');
        $('#header .gnb_bg, #header .depth2').stop().slideUp(150);
    });

    // 언어 선택 박스
    $('#header .lang-box').click(function(){
        $('#header .btn_lang').addClass('on');
        $('#header .lang-list').addClass('on');
    });
    $('#header .lang-box').mouseleave(function(){
        $('#header .btn_lang').removeClass('on');
        $('#header .lang-list').removeClass('on');
    });

    // 모달 팝업 기능
    $('.modal-tab li').click(function(){
        var index_num = $(this).index();
        console.log(index_num);
        $('.cover').fadeIn();
        $('.modal-list_wrap').addClass('on');
        $('.modal-list li').eq(index_num).show().siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.modal-list_wrap .btn_close').click(function(){
        $('.modal-list_wrap').removeClass('on');
        $('.cover').fadeOut();
    });

    // 메인컨테이너1 hover 구현
    $('#main .mainCon1 ul li').mouseenter(function(){
        $(this).addClass('on').find('a').parent().siblings().find('a').css({'filter':'brightness(60%)'});
    });
    $('#main .mainCon1 ul li').mouseleave(function(){
        $(this).removeClass('on').find('a').parent().siblings().find('a').css({'filter':'brightness(100%)'});
    });

    // 비디오 연속 재생
    $("#video01").bind("ended", function(){
        document.getElementById("video02").play();
    });
    $("#video02").bind("ended", function(){
        document.getElementById("video03").play();
    });
    $("#video03").bind("ended", function(){
        document.getElementById("video01").play();
    });

    var video;
    var videoNum = 0;
    var videoArr = ['./videos/main_video01.mp4', './videos/main_video02.mp4', './videos/main_video03.mp4', './videos/main_video04.mp4', './videos/main_video05.mp4', './videos/main_video06.mp4', './videos/main_video09.mp4', './videos/main_video10.mp4', './videos/main_video14.mp4', './videos/main_video15.mp4', './videos/main_video17.mp4', './videos/main_video18.mp4', './videos/main_video21.mp4'];

    function addVideo(){
        $('#video').attr('src', videoArr[videoNum]);
        video = $('#video').get(0);
        video.play();
        chkEnded();
    }

    addVideo();

    function chkEnded(){
        video.onended = function(){
        console.log('재생 종료');
        if(videoNum == videoArr.length - 1){
            videoNum = 0;
        } else {
            videoNum++;
        }
        addVideo();
        }
    }
    
    // 스크롤 다운 버튼
    $('.scroll_down, .m_scroll_down').click(function(){
        var scrollValue = $('#scrollArea').offset().top;
        $('body, html').animate({'scrollTop':scrollValue});
    });

    // 스크롤 시 섹션에 애니메이션 구현
    var mainCon1Value = $('.mainCon1').offset().top;
    var mainCon2Value = $('.mainCon2').offset().top;
    $(window).scroll(function(){
        var windowScrollValue = $(this).scrollTop();
        // console.log(windowScrollValue);
        if(windowScrollValue > mainCon1Value - 600){
            $('.mainCon1').addClass('on');
            if(windowScrollValue > mainCon2Value - 600){
                $('.left-box, .right_top-box').addClass('on');
            }
        } 
    });
 
    // 푸터 패밀리 버튼 구현
    $('.btn_family').click(function(){
        $(this).toggleClass('on');
        $('.family-list').slideToggle();
    });


    const swiper = new Swiper('.news-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
      
        // If we need pagination
        pagination: {
          el: '.news-slide .swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.news-slide .swiper-button-next',
          prevEl: '.news-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.news-slide .swiper-scrollbar',
        },
      });

    const swiper2 = new Swiper('.visual .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // If we need pagination
        pagination: {
            el: '.visual .swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.visual .swiper-button-next',
            prevEl: '.visual .swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.visual .swiper-scrollbar',
        },
    });

    const swiper3 = new Swiper('.m-news-slide .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.m-news-slide .swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.m-news-slide .swiper-button-next',
          prevEl: '.m-news-slide .swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.m-news-slide .swiper-scrollbar',
        },
      });


    // 반응형 이미지 변경
    $(window).resize(function(){
        var num = $(this).width();
        console.log(num);    
        if(num <= 1170){
            $('.modal-title').find('img').attr('src','./images/m_mainVis_tit1.png');
            $('.modal-list01').find('.modal-img').attr('src', './images/m_mainVis_pop1.jpg');
            $('.modal-list02').find('.modal-img').attr('src', './images/m_mainVis_pop2.jpg');
            $('.modal-list03').find('.modal-img').attr('src', './images/m_mainVis_pop3.jpg');
            $('.modal-list04').find('.modal-img').attr('src', './images/m_mainVis_pop4.jpg');
            $('.modal-list05').find('.modal-img').attr('src', './images/m_mainVis_pop5.jpg');
            $('.modal-list06').find('.modal-img').attr('src', './images/m_mainVis_pop6.jpg');
            
            if(num <= 758){
                $('.modal-title').find('img').attr('src','./images/m_mainVis_tit2.png');
                $('.mainCon1 > h3').find('img').attr('src', './images/m_mainCon1_tit.png')
                $('.mainCon1 .btn_more').find('img').attr('src', './images/m_main_over_btn.png');
                $('.mainCon2 .btn_more').attr('src', './images/m_main_over_btn.png');
                 
            }
        } else {
            $('.modal-title').find('img').attr('src','./images/mainVis_tit1.png');
            $('.mainCon1 > h3').find('img').attr('src', './images/mainCon1_tit.png')
            $('.mainCon1 .btn_more').find('img').attr('src', './images/main_over_btn.png');
            $('.mainCon2 .btn_more').attr('src', './images/main_over_btn.png');
            $('.modal-list01').find('.modal-img').attr('src', './images/mainVis_pop1.jpg');
            $('.modal-list02').find('.modal-img').attr('src', './images/mainVis_pop2.jpg');
            $('.modal-list03').find('.modal-img').attr('src', './images/mainVis_pop3.jpg');
            $('.modal-list04').find('.modal-img').attr('src', './images/mainVis_pop4.jpg');
            $('.modal-list05').find('.modal-img').attr('src', './images/mainVis_pop5.jpg');
            $('.modal-list06').find('.modal-img').attr('src', './images/mainVis_pop6.jpg');
        }   
      });
      
      var width_num = $(window).width();
      if(width_num <= 1170){
            $('.modal-title').find('img').attr('src','./images/m_mainVis_tit1.png');
            $('.modal-list01').find('.modal-img').attr('src', './images/m_mainVis_pop1.jpg');
            $('.modal-list02').find('.modal-img').attr('src', './images/m_mainVis_pop2.jpg');
            $('.modal-list03').find('.modal-img').attr('src', './images/m_mainVis_pop3.jpg');
            $('.modal-list04').find('.modal-img').attr('src', './images/m_mainVis_pop4.jpg');
            $('.modal-list05').find('.modal-img').attr('src', './images/m_mainVis_pop5.jpg');
            $('.modal-list06').find('.modal-img').attr('src', './images/m_mainVis_pop6.jpg');
            if(width_num <= 758){
                $('.modal-title').find('img').attr('src','./images/m_mainVis_tit2.png');
                $('.mainCon1 > h3').find('img').attr('src', './images/m_mainCon1_tit.png')
                $('.mainCon1 .btn_more').find('img').attr('src', './images/m_main_over_btn.png');
                $('.mainCon2 .btn_more').attr('src', './images/m_main_over_btn.png');
            }
      } else {
            $('.modal-title').find('img').attr('src','./images/mainVis_tit1.png');
            $('.mainCon1 > h3').find('img').attr('src', './images/mainCon1_tit.png')
            $('.mainCon1 .btn_more').find('img').attr('src', './images/main_over_btn.png');
            $('.mainCon2 .btn_more').attr('src', './images/main_over_btn.png');
            $('.modal-list01').find('.modal-img').attr('src', './images/mainVis_pop1.jpg');
            $('.modal-list02').find('.modal-img').attr('src', './images/mainVis_pop2.jpg');
            $('.modal-list03').find('.modal-img').attr('src', './images/mainVis_pop3.jpg');
            $('.modal-list04').find('.modal-img').attr('src', './images/mainVis_pop4.jpg');
            $('.modal-list05').find('.modal-img').attr('src', './images/mainVis_pop5.jpg');
            $('.modal-list06').find('.modal-img').attr('src', './images/mainVis_pop6.jpg');
      }

      
      $('.m-gnb > li').click(function(){
          $(this).toggleClass('on').find('.m-depth2').slideToggle().parent().siblings().find('.m-depth2').slideUp().parents('li').removeClass('on');
      });

      $('.btn_hamburger').click(function(){
          $('.m-gnb_wrap').addClass('on');
          $('body, html').css({'overflow':'hidden'});
      });
      $('.m-btn_close').click(function(){
        $('.m-gnb_wrap').removeClass('on');
        $('body, html').css({'overflow':'auto'});
      });
});

