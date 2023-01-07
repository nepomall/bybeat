$(document).ready(() => {
    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };


    // -------------- 무료 요금제 옵션 선택 모달 --------------
    $('.price_wrap .free button').click(function () {
        $('.option_select_modal').fadeIn(200);
        scrollOff();
        
        // 확인 눌렀을때
        $('.modal_bg .button_wrap>button:nth-child(2)').click(function(){
            $('.option_select_modal').fadeOut(200);
            $('.option_done_modal').fadeIn(200);
        })
    })
    
    // -------------- 무료 요금제 옵션 선택 완료 모달 --------------
    $('.option_done_modal button').click(function(){
        $('.option_done_modal').fadeOut(200);
        scrollOn();
    })
    
    // -------------- 마이페이지 > 요금제 변경 모달 --------------
    $('.my_payment_wrap .option button').click(function(){
        if($(this).parents('.option').hasClass('active')) {
            $('.change_price_modal').fadeOut(200);
            scrollOn();
        } else {
            $('.change_price_modal').fadeIn(200);
            scrollOff();
        }
    })
    
})