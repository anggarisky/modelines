function change_preview_image(x) {

	// untuk ambil source image dari data-pattern
	var spare = x.getAttribute('data-rep');

	// untuk membuat suatu path location image baru
	var locationNew = 'img/' + spare;

	// untuk me replace source image terbaru di klik
	var previewImage = document.getElementById('preview_image').src = locationNew;

}

$(document).ready(function(){
	$('.btn-next').click(function(){
		
		$('.nav-tabs > .active').next('li').find('a').trigger('click');
	  
	});
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#back-top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#back-top').fadeOut(500);   // Else fade out the arrow
    }
});
$('#back-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});