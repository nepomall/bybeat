$(function(){
    $('.my_album_list .list .btn_more').on('click', function(){
        $(this).next('.more_modal').fadeIn(200);
    })

    // 외부 영역 클릭
    $(document).mouseup(function (e) {
        if ($('.more_modal').has(e.target).length === 0) {
            $('.more_modal').fadeOut(200);
        };
    });

    // 목록 편집 클릭 시
    $('.edit_list_btn').on('click', function() {
        $(this).hide();
        $('.complete_btn').show();
        $('.my_album_list .list').addClass('del_list');
    });

    // 완료 클릭 시
    $('.complete_btn').on('click', function() {
        $(this).hide();
        $('.edit_list_btn').show();
        $('.my_album_list .list').removeClass('del_list');
    });
})