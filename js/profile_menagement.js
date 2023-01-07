$(function(){

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

    //앨범 삭제 모달
    $(".album_content .delete_btn").click(function () {
        $(".modal_bg.delete_album_modal").fadeIn(200);
        scrollOff();
    });

    // 앨범 삭제 완료 모달
    $('.modal_bg.delete_album_modal .confirm_btn').click(function(){
        $(".modal_bg.delete_album_modal").fadeOut(200);
        $(".modal_bg.delete_done_modal").fadeIn(200);
        scrollOff();
    });

    // 태그선택 버튼 클릭시 태그 선택 박스 활성화
    $('.tag_btn').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $(this).text('닫기');
            $('.tag_select').addClass('on');
        } else {
            $(this).text('태그선택');
            $('.tag_select').removeClass('on');
        }
    });

    // 태그 선택 시 active
    $('.tag_select .tag_list li').click(function(){
        $(this).toggleClass('active');
    });

    //수상이력 삭제 모달
    $(".awards_content .delete_btn").click(function () {
        $(".modal_bg.delete_awrards_modal").fadeIn(200);
        scrollOff();
    });

    // 수상이력 삭제 완료 모달
    $('.modal_bg.delete_awrards_modal .confirm_btn').click(function(){
        $(".modal_bg.delete_awrards_modal").fadeOut(200);
        $(".modal_bg.awards_done_modal").fadeIn(200);
        scrollOff();
    });

    // 경력사항 삭제 모달
    $(".career_content .delete_btn").click(function () {
        $(".modal_bg.career_delete_modal").fadeIn(200);
        scrollOff();
    });

    // 경력사항 삭제 완료 모달
    $('.modal_bg.career_delete_modal .confirm_btn').click(function(){
        $(".modal_bg.career_delete_modal").fadeOut(200);
        $(".modal_bg.career_com_modal").fadeIn(200);
        scrollOff();
    });

 
});