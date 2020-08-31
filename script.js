$(function () {
	$("nav")
		.css("display", "none")
		.removeClass("hidden");
	$(window).scroll(function () {
		// find the trigger point.
		var point = $("#intro h1").offset().top - 30;
		if ($(window).scrollTop() > point) {
			$("nav").slideDown();
		} else {
			$("nav").slideUp();
		}
	});
});