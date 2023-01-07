function goBack() {
    window.history.back();
}

$(document).ready(function () {

    $('.check_box>label, .radio_box>label').on({
        'touchstart': function () {
            $(this).addClass('active');
        },
        'touchend': function () {
            $(this).removeClass('active');
        }
    });

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

    // 모달 닫기 스크립트------
    const modalWrap = document.querySelectorAll('.modal_bg');
    modalWrap.forEach((item) => {
        const closeBtn = item.querySelectorAll('.close_btn');

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal_bg')) {
                $(item).fadeOut(200);
                scrollOn();
            };
        });

        closeBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                $(item).fadeOut(200);
                scrollOn();
            });
        });
    });

    /** 알림 박스 */
    function alarmBox() {

        const alarmBox = $('.alarm_box');
        const alarmBtn = $('.alarm_btn,.mail_btn');
        let listNum = $('.alarm_box .list').length;
        let listNum2 = $('.alarm_section .list').length;

        $(document).mouseup(function (e) {
            if ($('.alarm_wrap').has(e.target).length === 0) {
                alarmBox.fadeOut(200);
                alarmBtn.removeClass('open');
            };
        });

        alarmBtn.click(function () {
            let listNum = $('.alarm_box .list').length;
            console.log(listNum);
            if ($(this).hasClass('open')) {
                $(this).siblings('.alarm_box').fadeOut(200);
                alarmBtn.removeClass('open');
            } else {
                $(this).siblings('.alarm_box').fadeIn(200);
                alarmBtn.addClass('open');
            }

            if (listNum > 0) {
                $('.alarm_box .empty_box').css('display', 'none');
            } else {
                $('.alarm_box .empty_box').css('display', 'flex');
            };
        });

        $(document).on('click', '.read_btn', function () {
            $(document).find('.alarm_box .list').removeClass('not_read');
            $(document).find('.alarm_section .list').removeClass('not_read');
        });

        // if(listNum > 0 || listNum2 > 0){
        //     $('.alarm_box .empty_box').css('display','none');
        //     $('.alarm_section .empty_box').css('display','none');
        // }else{
        //     $('.alarm_box .empty_box').css('display','flex');
        //     $('.alarm_section .empty_box').css('display','flex');
        // };

    }
    alarmBox();

    /** 언어 선택 박스 */
    function languageBox() {

        const languageBox = $('.language_box');
        const languageBtn = $('.language_btn');

        $(document).mouseup(function (e) {
            if ($('.language_wrap').has(e.target).length === 0) {
                languageBox.fadeOut(200);
                languageBtn.removeClass('on');
            };
        });

        languageBtn.click(function () {
            $(this).toggleClass('on');

            if (!$(this).hasClass('on')) {
                languageBox.fadeOut(200);
                languageBox.removeClass('on');
            } else {
                languageBox.fadeIn(200);
                languageBox.addClass('on');
            }
        });
    }
    languageBox();

    // 예제 모달
    $(".test_btn").click(function () {
        $(".modal_name").fadeIn(200);
        scrollOff();
    });
    // 예제 모달
    $(".test_btn_02").click(function () {
        $(".modal_name_02").fadeIn(200);
        scrollOff();
    });

    // 로그인 모달창
    $('#header_pc .user .sign_in a').click(function () {
        $(".modal_bg.login_main").fadeIn(200);
        scrollOff();
    });

    $('#header_mb .sign_inup .login').click(function () {
        $(".modal_bg.login_main").fadeIn(200);
        scrollOff();
    });

    // 비밀번호입력 모달창
    $('.login_main .login_btn').click(function () {
        $(".modal_bg.login_main").fadeOut(200);
        $(".enter_pw").fadeIn(200);
        scrollOff();
    });

    // 회원가입 모달창
    $('#header_pc .user .sign_up a').click(function () {
        $(".sign_up_modal").fadeIn(200);
        scrollOff();
    });

    // 탭
    const tab = document.querySelectorAll(".tab_list");
    const tabSect = document.querySelectorAll(".tab_sect");

    tab.forEach((item, idx) => {
        item.addEventListener("click", () => {
            let has = item.classList.contains("active");

            if (has) {
                return false;
            } else {
                tab.forEach((items, indx) => {
                    items.classList.remove("active");
                });
                tabSect.forEach((items, indx) => {
                    items.style.display = "none";
                });

                let val = item.getAttribute("data-tab");
                let el = document.getElementById(val);

                item.classList.add("active");
                el.style.display = "block";
            }
        });
    });

    // 모바일 100vh
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    /** 셀렉트박스 펼쳐지는 함수 */ 
    function selectBox() {
        const selectBox = $('.select_box_wrap');
        const selectClick = $('.select_list');
        // 셀렉트박스 오픈
        $(document).on('click', '.select_box_wrap', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
            } else {
                // selectList.hide();
                selectBox.removeClass('open');
                $(this).addClass('open');
            };
        });

        // 셀렉트 리스트 클릭
        $(document).on('click', '.select_list', function () {
            const selectData = $(this).html();
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                selectClick.removeClass('selected');
                $(this).addClass('selected');
                $(this).closest('.select_box_wrap').find('.select_title').html(selectData);
                $(this).closest('.select_box_wrap').find('.select_title').addClass('active');
            };
        });

        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if ($('.select_box_wrap').has(e.target).length === 0) {
                // selectList.stop().hide();
                $('.select_box_wrap').removeClass('open active');
            };
        });


    }
    selectBox();

    // 모바일 햄버거---------------------
    $('.hamburger').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#header_mb .side_menu").removeClass('active');
            $("#header_mb .side_bg").fadeOut(500);
            scrollOn();
        } else {
            $(this).addClass('active');
            $("#header_mb .side_menu").addClass('active');
            $("#header_mb .side_bg").fadeIn(500);
            scrollOff();
        };
    });

    $('#header_mb .nav .open > a').click(function () {
        const title = $(this).closest('.open');
        if (title.hasClass('active')) {
            title.removeClass('active');
            title.find('.sec_depth').slideUp(300);
        } else {
            title.addClass('active');
            title.find('.sec_depth').slideDown(300);
        }
    });

    // 말풍선 닫기
    $('.alert_box .close_button').click(function(){
        $(this).parents('.alert_box').hide();
    });

});