$(function () {
    //$("#pg2_txt1").animate({"left": "0%"}, {duration: 800, easing:'easeInQuad',});
    //$("#test").animate({"left": "30%"}, {duration: 800, easing: 'easeInQuad',});

})
//fullPage関係の設定
$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        onLeave: function(index, direction){
            if(index == 1 && direction == 'down'){
                $('t1').animate({'left': '50%'}, 1000);
            }else if(index == 2 && direction == 'up'){
                $('t1').animate({'left': '100%'}, 1000);
            }
        },
    });
});
