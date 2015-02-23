(function($) {
    hljs.initHighlightingOnLoad();
    $.featherlight.defaults.afterOpen = function() {
        $('body').addClass("noscroll");
    };
    $.featherlight.defaults.afterClose = function() {
        $('body').removeClass("noscroll");
    };
    $('.lightbox').featherlightGallery();
})($);
