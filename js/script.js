$(function () {
    var w = $(window).width();
    var h = $(window).height();
    $('.slide').width(w);
    $('.slide').height(h);

    $('.slide').css('padding-top',h / 2);

    $(window).resize(function() {
        var w = $(window).width();
        var h = $(window).height();
        $('.slide').width(w);
        $('.slide').height(h);
        $('.slide').css('padding-top', h / 2);
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });

    $('.slide').click(function () {
        var i = $('.slide').index(this);
        var p = $('.slide').eq(i+1).offset().top;
        $('html,body').animate({ scrollTop: p }, 'fast');
        return false;
    });
})
