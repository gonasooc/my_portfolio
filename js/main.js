$(function(){

    $('.skill, .license, .memo1').addClass('on');

    $('.btn_top_wrap').click(function(){
        $('body, html').animate({'scrollTop':0}, 500)
    });

    $('.tab-list li').click(function(){
        const tabIndexNum = $(this).index()-1;
        $('.works-box ul').hide();
        $('.works-box ul').eq(tabIndexNum).show();
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('#m_tab-list').change(function(){
        const mTabIndexNum = $(this).prop('selectedIndex')-1;
        // select로 index를 담는 방식
        $('.works-box ul').hide();
        $('.works-box ul').eq(mTabIndexNum).show();
        if(mTabIndexNum === -1){
            $('.works-box ul').show();
        }
    });

    $('.btn_all').click(function(){
        $('.works-box ul').show();
    });

    $('.responsive-list > li').click(function(){
        const IndexNum = $(this).index();
        $('.detail-box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.responsive-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.desktop-list > li').click(function(){
        const IndexNum = $(this).index();
        $('.detail-box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.desktop-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.mobile-list > li').click(function(){
        const IndexNum = $(this).index();
        $('.detail-box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.mobile-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.etc-list > li').click(function(){
        const IndexNum = $(this).index();
        $('.detail-box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.etc-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.btn_detail-close, .cover').click(function(){
        $('.cover').fadeOut();
        $('.detail-box').fadeOut().removeClass('on');
        $('.detail').hide();
        $('body, html').css({'overflow':'auto'});
    });

    $(window).scroll(function(){
        const windowScrollValue = $(this).scrollTop();
        const contactNum = $('.contact_wrap').offset().top - 700;
        const workNum = $('.works_wrap').offset().top - 500;
        if(windowScrollValue >= 80){
            $('#header, .btn_top_wrap').addClass('on');
        } else {
            $('#header, .btn_top_wrap').removeClass('on');
        }

        if(windowScrollValue > contactNum){
            $('.biz-card').addClass('on');
        } else {
            $('.biz-card').removeClass('on');
        }

        if(windowScrollValue > workNum){
            $('.works-box > ul > li').addClass('on');
        } else {
            $('.works-box > ul > li').removeClass('on');
        }
    });


    var typed = new Typed('.typing', {
        strings: ["@gonasooc", "a creative man.", "a man for your team.", "a wordsmith."],
        typeSpeed: 60,
        loop: true
      });


    $('.html-bar').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#e44d26',
        radius: '2px',
        height: '3px'
    });
    $('.css-bar').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#264de4',
        radius: '2px',
        height: '3px'

    });
    $('.js-bar').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: '#f7df1e',
        radius: '2px',
        height: '3px'
    });
    $('.vue-bar').LineProgressbar({
        percentage: 20,
        fillBackgroundColor: '#41b883',
        radius: '2px',
        height: '3px'
    });
    $('.jq-bar').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#116baf',
        radius: '2px',
        height: '3px'
    });
    $('.b-bar').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#563d7c',
        radius: '2px',
        height: '3px'
    });
    $('.ps-bar').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#00c8ff',
        radius: '2px',
        height: '3px'
    });
    $('.ai-bar').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#ff7c00',
        radius: '2px',
        height: '3px'
    });
    // $('.oa-bar').LineProgressbar({
    //     percentage: 90,
    //     fillBackgroundColor: '#e43b01',
    //     radius: '2px',
    //     height: '3px'
    // });

    const aboutNum = $('.about_wrap').offset().top - 80;
    const worksNum = $('.works_wrap').offset().top - 160;
    const contactNum = $('.contact_wrap').offset().top - 160;
    $('.about').click(function(){
        $('body, html').animate({'scrollTop':aboutNum});
    });
    $('.works').click(function(){
        $('body, html').animate({'scrollTop':worksNum});
    });
    $('.contact').click(function(){
        $('body, html').animate({'scrollTop':contactNum});
    });

    $('.detail-cover').mouseenter(function(){
        $(this).addClass('on');
    });
    $('.detail-cover').mouseleave(function(){
        $(this).removeClass('on');
    });


    $('.etc-detail-list .detail-img1').click(function(){
        $(this).addClass('on');
        $('.detail-cover').removeClass('on');    
        $(this).mousemove(function(event){
            var bgX = event.pageX / 10 * 2,
            bgY = event.pageY;
            $('.etc-detail-list .detail-img1.on').css({"background-position": `${bgX}% ${bgY}%`})
        });
    });
    $('.etc-detail-list .detail-img1').mouseleave(function(){
        $(this).removeClass('on').css({"background-position":"center center"});
    }); 
});