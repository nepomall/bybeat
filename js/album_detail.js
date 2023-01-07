$(function () {
    /** body 스크롤 막음 */ 
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    /** body 스크롤 풀기 */ 
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };

    // 재생버튼 클릭 아이콘 변경
    $('.album_detail .btn_listen').on('click', function () {
        $(this).toggleClass('on');
    })

    // 구매자 앨범 공유 버튼 눌렀을때
    $('.album_detail .album_info .btn_share').on('click', function () {
        $('.share_album_modal').fadeIn(200);
        scrollOff()

        // 공유 확인
        $('.share_album_modal .button_wrap>button:nth-child(2)').on('click', function(){
            $('.share_album_modal').hide();
            $('.mail_send_modal').fadeIn(200);
        })
    })

    $('.mail_send_modal .button_wrap > button').on('click', function(){
        $('.mail_send_modal').fadeOut(200);
        $('.album_detail .share_box').show();
        scrollOn()
    })

    // 구매자 앨범 공유 취소
    $('.album_detail .share_box button').on('click', function () {
        // $('.album_detail .share_box').hide();
        $('.cancel_share_modal').fadeIn(200);
        scrollOff()

        // 철회 팝업 확인 
        $('.cancel_share_modal .button_wrap>button:nth-child(2)').on('click', function(){
            $('.cancel_share_modal').hide();
            $('.cancel_done_modal').fadeIn(200);
        })
    })

    // 댓글 더보기 버튼
    $('.comment_option_box .option_btn').on('click', function(){
        $(this).next('.option_list_wrap').fadeIn(200);
    })

    // 외부 영역 클릭
    $(document).mouseup(function (e) {
        if ($('.option_list_wrap').has(e.target).length === 0) {
            $('.option_list_wrap').fadeOut(200);
        };
    });
})