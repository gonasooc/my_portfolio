$(function(){
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



})