// 서영님네 모달 작업중
$(document).ready(() => {
  // body 스크롤 막음
  function scrollOff() {
    $("body")
      .addClass("scrollOff")
      .on("scroll touchmove mousewheel", function (e) {
        e.stopPropagation();
      });
  }
  // body 스크롤 풀기
  function scrollOn() {
    $("body").removeClass("scrollOff").off("scroll touchmove mousewheel");
  }

  // 음원업로드 페이지 - 음원 등록 모달 (버튼 연결해놓음)
  $(".upload_list .basic_btn_liner_green").click(function () {
    $(".modal_bg.music_add_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 링크 복사 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.link_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 비공개 전환 모달(버튼 연결해놓음)
  // html 공개 div에 open이라는 클래스를 따로 추가해두었다.
  $(".music_option.open").click(function () {
    $(".modal_bg.secret_change_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 비공개 전환 완료 모달
  $(".modal_bg.secret_change_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.secret_change_modal").fadeOut(200);
    $(".modal_bg.secret_change_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 삭제 철회 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.delete_cancel_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 삭제 철회 완료 모달
  $(".modal_bg.delete_cancel_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.delete_cancel_modal").fadeOut(200);
    $(".modal_bg.delete_cancel_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 공동작업 음원 삭제 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.common_delete_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 공동작업 음원 삭제 완료 모달
  $(".modal_bg.common_delete_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.common_delete_modal").fadeOut(200);
    $(".modal_bg.common_delete_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 댓글 삭제 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.comment_del_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 답글 삭제 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.recomment_del_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 대표 음원 지정 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.represent_music_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 대표 음원 지정 완료 모달
  $(".modal_bg.represent_music_modal .basic_btn_liner_green").click(
    function () {
      $(".modal_bg.represent_music_modal").fadeOut(200);
      $(".modal_bg.represent_music_save_modal").fadeIn(200);
      scrollOff();
    }
  );

  // 음원 상세페이지 - 음원 삭제 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.music_del_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 음원 삭제 완료 모달
  $(".modal_bg.music_del_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.music_del_modal").fadeOut(200);
    $(".modal_bg.music_del_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 상세페이지 - 변경사항 저장 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.file_change_modal").fadeIn(200);
    scrollOff();
  });

  // ------------------7.18 이후 추가 모달

  // 음원 업로드 페이지 - 음원 등록하기 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.upload_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 등록하기 완료 모달
  $(".modal_bg.upload_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.upload_modal").fadeOut(200);
    $(".modal_bg.upload_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 업데이트 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.update_modal").fadeIn(200);
    scrollOff();
  });
  // 음원 업로드 페이지 - 음원 업데이트 완료 모달
  $(".modal_bg.update_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.update_modal").fadeOut(200);
    $(".modal_bg.update_ok_modal").fadeIn(200);
    scrollOff();
  });
});
