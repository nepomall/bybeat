$(function () {
    var reviewListSwiper = new Swiper('.review_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    slideAct();
});

function slideAct(){
    var view = 0; //보이는 슬라이드 개수
    var realInx = 0; //현재 페이지
    var swiper = undefined;

    //디바이스 체크
    var winWChk = '';
    $(window).on('load resize', function (){
        var winW = window.innerWidth;
        if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
            slideList()
            winWChk = 'mo';
        }
        if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
            slideList()
            winWChk = 'pc';
        }
    }) 
    
    function slideList(){
        //리스트 초기화
        if ($('.user_list_con .user_item').parent().hasClass('swiper-slide')){
            $('.user_list_con .swiper-slide-duplicate').remove();
            $('.user_list_con .user_item').unwrap('swiper-slide');
        }

        //보이는 슬라이드 개수 설정
        if (window.innerWidth > 768){ //PC 버전
            view = 6;
        }else{ //mobile 버전
            view = 2;
        }

        //리스트 그룹 생성 (swiper-slide element 추가)
        var num = 0;
        $('.user_list_con').find('.user_item').each(function(i) {
            $(this).addClass('user_item'+(Math.floor((i+view)/view)));
            num = Math.floor((i+view)/view)
        }).promise().done(function(){
            for (var i = 1; i < num+1; i++) {
                $('.user_list_con').find('.user_item'+i+'').wrapAll('<div class="swiper-slide"></div>');
                $('.user_list_con').find('.user_item'+i+'').removeClass('user_item'+i+'');
            }
        });

        sliderStart()
    }

    //슬라이드 시작
    function sliderStart(){
        //슬라이드 초기화
        if(swiper != undefined) {
            swiper.destroy();
            swiper == undefined;
        }

        //슬라이드 실행
        swiper = new Swiper('.user_slide', {
            slidesPerView: 1,
            initialSlide :Math.floor(realInx/view),
            resistanceRatio : 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    realInx = this.realIndex*view
                }
            },
        });
    }
}