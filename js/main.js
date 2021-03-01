$(function(){

    // $('a').attr('href', 'javascript:;');

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


    // var swForClose = true;
    $('.responsive-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.responsive-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
        // swForClose = false;
        // console.log(swForClose);
    });

    $('.desktop-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.desktop-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
        // swForClose = false;
        // console.log(swForClose);

    });

    $('.mobile-list > li').click(function(){
        const IndexNum = $(this).index();
        console.log(IndexNum);
        $('.detail-box').fadeIn();
        $('.cover').fadeIn();
        $('.mobile-detail-list .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
        // swForClose = false;
        // console.log(swForClose);

    });

    $('.btn_detail-close').click(function(){
        $('.cover').fadeOut();
        $('.detail-box').fadeOut();
        $('.detail').hide();
        $('body, html').css({'overflow':'auto'});
        // swForClose = true;
        // console.log(swForClose);

    });
    
    // if(swForClose == false){
    //     $('body, html').click(function(e){
    //         if(!$(e.target).hasClass('.detail-box')){
    //             $('.cover').fadeOut();
    //             $('.detail-box').fadeOut();
    //             $('.detail').hide();
    //             $('body, html').css({'overflow':'auto'});
    //             swForClose = true;
    //             console.log(swForClose);
    //         }
    //     });
    // }

    $('.gnb > li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })

    $(window).scroll(function(){
        const windowScrollValue = $(this).scrollTop();
        console.log(windowScrollValue);
        if(windowScrollValue >= 80){
            $('#header, .btn_top_wrap').addClass('on');
        } else {
            $('#header, .btn_top_wrap').removeClass('on');
        }
    })



    var typed = new Typed('.typing', {
        strings: ["@gonasooc", "a creative man.", "a man for your team.", "a wordsmith."],
        typeSpeed: 60,
        loop: true
      });

    // $('#progressbar1').LineProgressbar({
    //     percentage: 95
    // });

    $('.html-bar').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#e44d26',
        radius: '2px'
    });
    $('.css-bar').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#264de4',
        radius: '2px'
    });
    $('.js-bar').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: '#f7df1e',
        radius: '2px'
    });
    $('.jq-bar').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#116baf',
        radius: '2px'
    });
    $('.b-bar').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#563d7c',
        radius: '2px'
    });
    $('.ps-bar').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#00c8ff',
        radius: '2px'
    });
    $('.ai-bar').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#ff7c00',
        radius: '2px'
    });


    const aboutNum = $('.about_wrap').offset().top - 80;
    const worksNum = $('.works_wrap').offset().top - 160;
    const contactNum = $('.contact_wrap').offset().top - 160;
    // console.log(contactNum);
    $('.about').click(function(){
        $('body, html').animate({'scrollTop':aboutNum});
    })
    $('.works').click(function(){
        $('body, html').animate({'scrollTop':worksNum});
    })
    $('.contact').click(function(){
        $('body, html').animate({'scrollTop':contactNum});
    })


})