$(function () {
    // login_dormant
    $('.login.main .btn_login').click(function () {
        $('.modal_bg.login_dormant').fadeIn(200);
    })

    // reset_pw
    // $('.btn_apply.email').click(function () {
    //     $('.email_form').fadeOut(200);
    //     $('.pw_form').fadeIn(200);
    // })

    // $('.btn_apply.complete').click(function () {
    //     $('.modal_bg.reset_pw').fadeIn(200);
    // })

    // sign_up
    $('.btn_apply').click(function() {
        $('.signup.complete_modal').fadeIn(200);
    });

    $('.check_box.service .check_box_text').click(function() {
        $('.signup.terms_modal.service').fadeIn(200);
    })
    
    $('.check_box.user .check_box_text').click(function() {
        $('.signup.terms_modal.user').fadeIn(200);
    })

    $('.check_box.location .check_box_text').click(function() {
        $('.signup.terms_modal.location_modal').fadeIn(200);
    })

    $('.check_box.marketing .check_box_text').click(function() {
        $('.signup.terms_modal.marketing_modal').fadeIn(200);
    })

    // 모달 닫기 공통
    $('.btn_modal').click(function () {
        $(this).closest('.modal_bg').fadeOut(200);
    })
    
})