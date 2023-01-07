$(document).ready(function() {
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

    // 음원 삭제 확인 팝업
    $(".info_management .btn_con .del_btn").click(function () {
        $(".modal_bg.delete_confirm_modal").fadeIn(200);
        scrollOff();
    });

    // 음원 삭제 완료 팝업
    $(".modal_bg.delete_confirm_modal .confirm_btn").click(function () {
        $(".modal_bg.delete_confirm_modal").fadeOut(200);
        $(".modal_bg.delete_complete_modal").fadeIn(200);
        scrollOff();
    });

    // 공동 작곡 계약서 팝업
    // 공동 작곡 계약서 동의 버튼 / 공동 작곡 계약서 확인 버튼 클릭 시
    $(".info_management .agree_btn, .info_management .confirm_btn").click(function () {
        $(".modal_bg.contract_modal").fadeIn(200);
        scrollOff();
    });
    // 공동 작곡 계약서 팝업 내 서명 버튼 클릭 시
    $(".modal_bg.contract_modal .confirm_btn").click(function () {
        $('.modal_bg.contract_modal button').hide();
        $('.modal_bg.contract_modal .close_button').show();
    });

    // 공동 작곡가 초대 팝업
    $(".info_management .joint_contract_confirm_con .invite_btn").click(function () {
        $(".modal_bg.invite_modal ").fadeIn(200);
        scrollOff();
    });

    // 공동 작곡가 초대 확인 팝업
    $(".modal_bg.invite_modal .send_btn").click(function () {
        $(".modal_bg.invite_modal").fadeOut(200);
        $(".modal_bg.invite_confirm_modal").fadeIn(200);
        scrollOff();
    });

    // 공동 작곡가 초대 완료 팝업
    $(".modal_bg.invite_confirm_modal .confirm_btn").click(function () {
        $(".modal_bg.invite_confirm_modal").fadeOut(200);
        $(".modal_bg.invite_complete_modal").fadeIn(200);
        scrollOff();
    });

    // 권리 비율 안내 팝업
    // 권리 비율 확인 팝업
    $(".modal_bg.ratio_of_rights_guide_modal .agree_btn").click(function () {
        $('.modal_bg.ratio_of_rights_guide_modal').fadeOut(200);
        $('.modal_bg.ratio_of_rights_confirm_modal').fadeIn(200);
    });
    // 권리 비율 거절 팝업
    $(".modal_bg.ratio_of_rights_guide_modal .refusal_btn").click(function () {
        $('.modal_bg.ratio_of_rights_guide_modal').fadeOut(200);
        $('.modal_bg.ratio_of_rights_refusal_modal').fadeIn(200);
    });

    // 초대가 이미 완료 됐을 때 팝업
    $(".info_management .co_composer_con .send_btn").click(function () {
        $('.modal_bg.invite_already_modal').fadeIn(200);
    });

    // test
    $(".info_management .next_btn").click(function () {
        $('.modal_bg.enter_email_modal').fadeIn(200);
    });

    // 공동 작곡가 권리 비율 설정 합계

    $('.ratio_of_rights_con .ratio').on('keyup', function() {
        let sum = 0;

        $('.ratio_of_rights_con .ratio').each(function() {

            if($(this).val()){
                sum += parseInt($(this).val());
                $('.sum .percent').html(sum + '%');
            }

            if($('.ratio').val() == '') {
                $('.sum .percent').html(0 + '%');
            }
        });
    });
})