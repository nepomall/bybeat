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

  // ---------결제 내역 페이지--------
  // 결제 상세 - 메일 발송 모달
  $(".music_box .basic_btn_liner_green").click(function () {
    $(".modal_bg.mail_modal").fadeIn(200);
    scrollOff();
  });

  // 정산 - 계좌 출금 모달
  $(".payment_list_section.calculate .withdraw_btn").click(function () {
    $(".modal_bg.withdraw_modal").fadeIn(200);
    scrollOff();
  });
  // 출금 완료 모달
  $(".modal_bg.withdraw_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.withdraw_modal").fadeOut(200);
    $(".modal_bg.withdraw_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 정산 - 계좌 정보 수정 모달
  $(".payment_list_section.calculate .edit_btn").click(function () {
    $(".modal_bg.withdraw_bank_edit_modal").fadeIn(200);
    scrollOff();
  });
  // 수정 완료 모달
  $(".modal_bg.withdraw_bank_edit_modal .basic_btn_liner_green").click(
    function () {
      $(".modal_bg.withdraw_bank_edit_modal").fadeOut(200);
      $(".modal_bg.withdraw_bank_add_modal").fadeIn(200);
      scrollOff();
    }
  );
  // 수정 완료 모달
  $(".modal_bg.withdraw_bank_add_modal .basic_btn_liner_green").click(
    function () {
      $(".modal_bg.withdraw_bank_add_modal").fadeOut(200);
      $(".modal_bg.withdraw_bank_ok_modal").fadeIn(200);
      scrollOff();
    }
  );
  
  // ------결제하기 페이지-------
  // 필수 동의 입력 모달
  $(".modal_bg.withdraw_bank_add_modal .basic_btn_liner_green").click(
    function () {
      $(".modal_bg.agree_modal").fadeIn(200);
      scrollOff();
    }
  );

  // 결제 완료
  $(".payment_section .button_wrap .basic_btn_liner_green").click(function () {
    $(".modal_bg.payment_modal").fadeIn(200);
    scrollOff();
  });

  $(".track_name .icon").click(function () {
    $(this).toggleClass("on");
  });

});
