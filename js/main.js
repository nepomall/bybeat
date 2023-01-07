$(document).ready(function () {
    // 스크롤 시 투명---------
    $(window).on('scroll', function () {
        const scroll = document.documentElement.scrollTop;
        // console.log(scroll);

        if (scroll > 150) {
            $("header").removeClass('black');
        } else {
            $("header").addClass('black');
        };
    });

    // 숫자 카운트
    $('.count-num').rCounter();

    // 도넛차트---------------------------
    const vw = $(window).width();

    function upChart() {
        let $chart = $('.chart_1'),
            size = parseFloat($chart.outerWidth()),
            clearSet;

        if (vw > 768) {
            $chart.easyPieChart({
                barColor: function (percent) {
                    let ctx = this.renderer.getCtx();
                    let canvas = this.renderer.getCanvas();
                    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(1, "#7be8fa");
                    gradient.addColorStop(0, "#13E880");
                    return gradient;
                },
                trackColor: '#f9fbfc',
                scaleColor: false,
                lineCap: "round",
                lineWidth: 25,
                size: size,
                onStart: $.noop,
                onStop: $.noop,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        } else {
            $chart.easyPieChart({
                barColor: function (percent) {
                    let ctx = this.renderer.getCtx();
                    let canvas = this.renderer.getCanvas();
                    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(1, "#7be8fa");
                    gradient.addColorStop(0, "#13E880");
                    return gradient;
                },
                trackColor: '#f9fbfc',
                scaleColor: false,
                lineCap: "round",
                lineWidth: 12,
                size: size,
                onStart: $.noop,
                onStop: $.noop,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        };

        // $(window).on('resize', function(){
        //     size = parseFloat($chart.outerWidth());

        //     $chart.css({
        //         height: size
        //     });

        //     clearTimeout(clearSet);
        //     clearSet = setTimeout(function(){
        //         $chart.removeData('easyPieChart').find('canvas').remove();
        //         $chart.easyPieChart({
        //             barColor: function(percent) {
        //                 let ctx = this.renderer.getCtx();
        //                 let canvas = this.renderer.getCanvas();
        //                 let gradient = ctx.createLinearGradient(0,0,canvas.width,0);
        //                     gradient.addColorStop(1, "#7be8fa");
        //                     gradient.addColorStop(0, "#13E880");
        //                 return gradient;
        //             },
        //             trackColor: '#f9fbfc',
        //             scaleColor:false,
        //             lineCap: "round",
        //             lineWidth:12,
        //             size: size,
        //             onStart: $.noop,
        //             onStop: $.noop,
        //             onStep: function(from, to, percent) {
        //                 $(this.el).find('.percent').text(Math.round(percent));
        //             }
        //         });
        //     });
        // });

    };
    upChart();

    function decreaseChart() {
        let $chart2 = $('.chart_2'),
            size2 = parseFloat($chart2.outerWidth()),
            clearSet2;

        if (vw > 768) {
            $chart2.easyPieChart({
                barColor: function (percent) {
                    let ctx = this.renderer.getCtx();
                    let canvas = this.renderer.getCanvas();
                    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(1, "#FFB6A6");
                    gradient.addColorStop(0, "#FF7A00");
                    return gradient;
                },
                trackColor: '#f9fbfc',
                scaleColor: false,
                lineCap: "round",
                lineWidth: 25,
                size: size2,
                onStart: $.noop,
                onStop: $.noop,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        } else {
            $chart2.easyPieChart({
                barColor: function (percent) {
                    let ctx = this.renderer.getCtx();
                    let canvas = this.renderer.getCanvas();
                    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                    gradient.addColorStop(1, "#FFB6A6");
                    gradient.addColorStop(0, "#FF7A00");
                    return gradient;
                },
                trackColor: '#f9fbfc',
                scaleColor: false,
                lineCap: "round",
                lineWidth: 12,
                size: size2,
                onStart: $.noop,
                onStop: $.noop,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        // $(window).on('resize', function(){
        //     size2 = parseFloat($chart2.outerWidth());

        //     $chart2.css({
        //         height: size2
        //     });

        //     clearTimeout(clearSet2);
        //     clearSet2 = setTimeout(function(){
        //         $chart2.removeData('easyPieChart').find('canvas').remove();
        //         $chart2.easyPieChart({
        //             barColor: function(percent) {
        //                 let ctx = this.renderer.getCtx();
        //                 let canvas = this.renderer.getCanvas();
        //                 let gradient = ctx.createLinearGradient(0,0,canvas.width,0);
        //                     gradient.addColorStop(1, "#7be8fa");
        //                     gradient.addColorStop(0, "#13E880");
        //                 return gradient;
        //             },
        //             trackColor: '#f9fbfc',
        //             scaleColor:false,
        //             lineCap: "round",
        //             lineWidth:12,
        //             size: size2,
        //             onStart: $.noop,
        //             onStop: $.noop,
        //             onStep: function(from, to, percent) {
        //                 $(this.el).find('.percent').text(Math.round(percent));
        //             }
        //         });
        //     });
        // });

    }
    decreaseChart();

    // 스크롤이벤트---------
    function showJs() {
        // $(window).scroll(function () {
        //     var scrollTop = $(window).scrollTop();
        //     var winH = $(window).innerHeight() / 4;
        //     var mainNavTop = $('.navigation_section').offset().top;
        //     // console.log(olpNavTop);
        
        //     if (scrollTop + winH >= mainNavTop) {
        //       setTimeout(function () {
        //         $('.navigation_section').addClass('active');
        //       }, 100)
        //     } else {
        //       $('.navigation_section').removeClass('active');
        //     }
        //   });
        // const chartTop = $('.donut_info').offset().top;
        const reviewTop = $('.review_info').offset().top;
        let isVisible = false;
        let timer;

        $(window).on('scroll', function () {
            const scroll = document.documentElement.scrollTop;
            var scrollTop = $(window).scrollTop();
            var winH = $(window).innerHeight() / 2;
            var chartTop = $('.donut_info').offset().top;
            console.log(isVisible);

            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;

                    // if (scroll > chartTop - 1000 && !isVisible) {
                    if (scrollTop + winH >= chartTop && !isVisible) {
                        $('.donut_info .chart_wrap').addClass('active');
                        $('.chart_1').data('easyPieChart').update(38);
                        $('.chart_2').data('easyPieChart').update(60);
                        isVisible = true;
                    };

                }, 300);
            };

            if (scroll > reviewTop - 500) {
                $('.review_info .comment_wrap').addClass('active');
            } else {
                $('.review_info .comment_wrap').removeClass('active');
            };

        });

    }
    showJs();

});