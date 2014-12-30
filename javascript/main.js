(function($) {
    hljs.initHighlightingOnLoad();
    try {
	// This is needed to prevent an uncaught
	// type error when there is no footnote section
	$('.post').sidenotes();
    } catch (e) {};
})($);
