$(function () {
    //$("#pg2_txt1").animate({"left": "0%"}, {duration: 800, easing:'easeInQuad',});
    //$("#test").animate({"left": "30%"}, {duration: 800, easing: 'easeInQuad',});

})
//fullPage関係の設定
$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ['#cd9cc1', '#d3e3a2', '#fff9a2', '#ffd194', '#f9a383', '#f8a5a6'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        onLeave: function(index, direction){
            if(index == 1 && direction == 'down'){
                $('#pg2_txt1').animate({'left': '5%'}, 1000);
                $('#pg2_txt2').animate({'left': '7%'}, 1200);
                $('#pg2_txt3').animate({'left': '9%'}, 1400);
            }else if(index == 2 && direction == 'up'){
                $('#pg2_txt1').animate({'left': '100%'}, 1400);
                $('#pg2_txt2').animate({'left': '100%'}, 1200);
                $('#pg2_txt3').animate({'left': '100%'}, 1000);
            }
        },
    });
});
