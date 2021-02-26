$(function(){

    $('a').attr('href', 'javascript:;');

    $('.btn_top_wrap').click(function(){
        $('body, html').animate({'scrollTop':0}, 500)
    });

    $('.tab-list li').click(function(){
        const tabIndexNum = $(this).index()-1;
        console.log(tabIndexNum);
        $('.works-box ul').hide();
        $('.works-box ul').eq(tabIndexNum).show();
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.btn_all').click(function(){
        $('.works-box ul').show();
    })

    $('.responsive-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.responsive-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.desktop-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.desktop-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.mobile-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.mobile-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.btn_detail-close').click(function(){
        $('.cover').fadeOut();
        $('.detail-box').fadeOut();
        $('.detail').hide();
        $('body, html').css({'overflow':'auto'});
    });



    var typed = new Typed('.typing', {
        strings: ["a creative man.", "a man for your team.", "a wordsmith.", "pixel perfect."],
        typeSpeed: 60,
        loop: true
      });



})