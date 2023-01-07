$(document).ready(function () {
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

  // 음원업로드 페이지 - 음원 업로드 모달
  $(".music_upload_btn").click(function () {
    $(".modal_bg.music_upload_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 링크 복사 모달
  $(".link_btn").click(function () {
    $(".modal_bg.link_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 비공개 전환 모달
  $(".basic_btn_gray.list_del_btn").click(function () {
    $(".modal_bg.secret_change_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 비공개 전환 완료 모달
  $(".secret_change_modal .confirm_btn").click(function () {
    $(".modal_bg.secret_change_modal").fadeOut(200);
    $(".modal_bg.secret_change_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 삭제 철회 모달
  $(".delete_cancel_btn").click(function () {
    $(".modal_bg.delete_cancel_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 삭제 철회 완료 모달
  $(".modal_bg.delete_cancel_modal .confirm_btn").click(function () {
    $(".modal_bg.delete_cancel_modal").fadeOut(200);
    $(".modal_bg.delete_cancel_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 공동작업 음원 삭제 모달
  $(".common_delete_btn").click(function () {
    $(".modal_bg.common_delete_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 공동작업 음원 삭제 완료 모달
  $(".modal_bg.common_delete_modal .confirm_btn").click(function () {
    $(".modal_bg.common_delete_modal").fadeOut(200);
    $(".modal_bg.common_delete_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원관리(목록) 페이지 - 링크 복사 모달
  $(".option_tab .option_list.copy").click(function () {
    $(".modal_bg.link_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 업로드 모달
  $(".upload_wrap .upload_icon").click(function () {
    $(".modal_bg.upload_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 업로드 완료 모달
  $(".modal_bg.upload_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.upload_modal").fadeOut(200);
    $(".modal_bg.upload_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 업데이트 모달
  $(".upload_list .basic_btn_green_border").click(function () {
    $(".modal_bg.update_modal").fadeIn(200);
    scrollOff();
  });

  // 음원 업로드 페이지 - 음원 업데이트 완료 모달
  $(".modal_bg.update_modal .basic_btn_liner_green").click(function () {
    $(".modal_bg.update_modal").fadeOut(200);
    $(".modal_bg.update_ok_modal").fadeIn(200);
    scrollOff();
  });

  // 업로드 음원 선택 함수
  const SwiperImg = document.querySelectorAll(".album_img_big_wrap");

  SwiperImg.forEach((item, idx) => {
    item.addEventListener("click", () => {
      $(item).toggleClass("active");
    });
  });

  // 목록 편집 클릭 이벤트
  const EditListBtn = document.querySelector(".list_edit_btn");

  function ListEditEvent() {
    const ActiveClass = "basic_btn_green_border";

    if (EditListBtn.classList.contains(ActiveClass)) {
      EditListBtn.classList.remove("basic_btn_green_border");
      EditListBtn.classList.add("basic_btn_light_gray");
    } else {
      EditListBtn.classList.add("basic_btn_green_border");
      EditListBtn.classList.remove("basic_btn_light_gray");
    }
  }

  EditListBtn.addEventListener("click", ListEditEvent);

  // 업로드 됐을때 목록 편집 클릭 이벤트
  const UploadEditBtn = document.querySelector(".util_btn_list");
  const EditCompleteBtn = document.querySelector(".list_edit_ok_btn");

  function ListEditEvent() {
    const ActiveClass = "upload";

    if (UploadEditBtn.classList.contains(ActiveClass)) {
      UploadEditBtn.classList.remove("upload");
      EditListBtn.style.display = "block";
    } else {
      UploadEditBtn.classList.add("upload");
      EditListBtn.style.display = "none";
      EditCompleteBtn.addEventListener("click", function () {
        UploadEditBtn.classList.remove("upload");
        EditListBtn.style.display = "block";
      });
    }
  }

  // 선택 삭제 이벤트 -> 음원 타이틀 클릭하면 선택삭제 버튼 활성화처리
  const MusicTitle = document.querySelector(".music_title");
  const ChoiceDelBtn = document.querySelector(
    ".basic_btn_light_gray.list_del_btn"
  );
  const MusicList = document.querySelector(".music_list");

  function ChoiceEvent() {
    if (UploadEditBtn.classList.contains("upload")) {
      ChoiceDelBtn.classList.add("active");
      MusicList.classList.toggle("border");
    }
  }

  MusicTitle.addEventListener("click", ChoiceEvent);

  // 선택삭제 누르고 완료 누를 시 모달
  if (
    $(".basic_btn_light_gray.list_del_btn").hasClass("active") ===
    $(".music_list").hasClass("border")
  ) {
    // 음원관리(목록) 페이지 - 비공개 전환 모달
    $(".list_edit_ok_btn").click(function () {
      $(".modal_bg.secret_change_modal").fadeIn(200);
      scrollOff();
    });
  }

  // 상세 검색 체크박스 클릭 이벤트
  $('.detail_search_btn input:checkbox[id="SearchDetail"]').click(function (e) {
    if ($(this).is(":checked") == true) {
      $(".search_detail_box").show();
    } else {
      $(".search_detail_box").hide();
    }
  });

  // RANGE VALUE
  const WorkRange = document.getElementById("myRange");
  let output = document.querySelector(".range_value");
  output.innerHTML = WorkRange.value + '%';

  WorkRange.oninput = function () {
    let RangeValue = this.value + "%";
    output.innerHTML = RangeValue;
    document.documentElement.style.setProperty("--range-width", RangeValue);
  };

  // 재생 fixed 바
  const PlayIcon = document.querySelector(".play_icon");
  const PlayBar = document.querySelector(".play_bar");
  function PlayBarEvent() {
    PlayBar.classList.toggle("active");
  }

  PlayIcon.addEventListener("click", PlayBarEvent);

  // 옵션 탭
  $(".option_icon").on("click", function () {
    $(this).siblings().toggleClass("active");
  });

  $('.music_management_list .util_btn_list .list_edit_btn').on('click', function(){
    if($('.music_management_list .util_btn_list').hasClass('upload')) {
      $('.music_management_list .music_list').on('click', function(){
        $(this).addClass('on');
      })
    }
  })

  // --------------------------------------- music_detail js -----------------------------------------------
});
