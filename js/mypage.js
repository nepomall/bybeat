$(document).ready(function () {

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

    // 회원탈퇴 스크립트
    function withdrawalJs() {
        const chk = $('#agree');
        chk.click(function () {
            if (chk.is(':checked')) {
                $('.withdrawal_btn').attr('disabled', false);
            } else {
                $('.withdrawal_btn').attr('disabled', true);
            };
        });

        const modalBtn = $('.withdrawal_btn');
        const modalBox = $('.withdrawal_modal');

        modalBtn.click(() => {
            modalBox.fadeIn(200);
            scrollOff();
        });
    }
    withdrawalJs();

    // 멤버쉽
    // 모달 닫기 공통
    $('.btn_modal').click(function () {
        $(this).closest('.modal_bg').fadeOut(200);
        $('body').removeClass('scrollOff');
    })
    // user_info 페이지
    $('.user_info .btn_apply').click(function () {
        $('.user_info.complete_modal').fadeIn(200);
    })

    $('.btn_mento_change').click(function () {
        $('.user_info.reconfirm').fadeIn(200);
    })

    // mento_change 페이지
    $('.mento_change .btn_apply').click(function () {
        $('.mento_change.complete_modal').fadeIn(200);
    })

    // membership 페이지
    $('.membership .btn_apply').click(function () {
        $('.membership_check.overlap_modal').fadeIn(200);
        $('.membership_check.duplicate_modal').fadeIn(200);
    })

    $('.membership .btn_apply').click(function () {
        $('.membership_change').fadeIn(200);
    })
    
    $('.btn_apply.no').click(function() {
        console.log('qa')
        $('.membership_change.cancel').fadeIn(200);
    })



    // mypage_album_regist 페이지
    // 판매중/비판매용 라디오버튼 탭메뉴
    $('.tab_content').last().fadeOut(200);
    const btn_tab = $("input[type='radio']")

    btn_tab.click(function () {
        const tab_id = $(this).attr('data-tab');
        $('.tab_content').hide();
        $('#' + tab_id).show();
    });

    // 모달
    $('.btn_add').click(function () {
        $('.album_regist.add_music_modal').fadeIn(200);
        $('body').addClass('scrollOff');
    })

    $('.btn_modal.choice').click(function () {
        $('.album_regist.complete_model').fadeIn(200);
    })

    $('.album_regist .btn_apply').click(function () {
        $('.album_check_model').fadeIn(200);
        $('.album_complete_model').fadeIn(200);
    })

    // 모달 내에서 add_btn 클릭 시, list 보임
    $('.btn_modal.choice').click(function () {
        $('.add_music_contents').fadeIn(200);
    })

    // li 클릭시 활성화
    $('.album_regist .tag_list > li').click(function () {
        $(this).toggleClass('active')
    })

    // mypage_album_regist_edit 페이지
    $('.album_regist.edit .btn_add_close').click(function () {
        $('.album_regist.delete_check').fadeIn(200);
    })

    $('.album_regist.delete_check .btn_modal').click(function () {
        $('.album_regist.delete_check').fadeOut(200);
        $('.album_regist.delete_complete').fadeIn(200);
        $('.add_music_list>li').addClass('delete_active')
    })
    
    $('.album_regist.delete_complete').click(function() {
        $(this).closest('.modal_bg').fadeOut(200);
    })

    $('.btn_close_file.stems').click(function() {
        $('.steams_delete_complete').fadeIn(200);
        $('.steams_error').fadeIn(200);
    })

    // 개인정보 관리 페이지 멘토 뮤지션 전환 팝업
    $('.user_info .mento_area > button').on('click', function(){
        $('.reconfirm.modal_bg').fadeIn(200);
        scrollOff();
    })

    // 멘토 뮤지션 전환 신청 페이지 완료 버튼 누름
    $('.user_info.mento_change .btn_apply').on('click', function(){
        $('.complete_modal').fadeIn(200);
        scrollOff();
    })

    // 파일 첨부 프리뷰 스크립트-------------------
    function previewFiles(e){
        let sel_files = [];
        sel_files = [];


        let anyFiles = e.target.files;
        let fileArr = Array.prototype.slice.call(anyFiles);
        let index = 0;

        fileArr.forEach(function(f){
            const fileSize = document.getElementById('file').files[0].size;
            const maxSize = 20 * 1024 * 1024;
            const fileName = $("#file").val();

            if(fileSize < maxSize){
                sel_files.push(f);
                const reader = new FileReader();
                reader.onload = function(e){
                    let html = `
                    <li>
                        <span class="evidential_file">"${fileName}"</span>
                        <button type="button" class="btn_close">
                            <img src="../../images/icon/icon_close_bold.svg" alt="리스트 삭제 버튼">
                        </button>
                    </li>
                    `;
                    $('.file_list').append(html);
                    index++;
                };
                reader.readAsDataURL(f);
                
                $('.drop_zone').addClass('active');
            };

        });

    };

    const fileInput = $('#file');
    fileInput.on('change', previewFiles);
    $(document).on('click', '.file_list .btn_close', function(){
        $(this).closest('li').remove();
        const fileNum = $('.file_list li').length;
        const fileData = fileInput.val("");

        if(fileNum == 0 && fileData){
            $('.drop_zone').removeClass('active');
        };
    });

});