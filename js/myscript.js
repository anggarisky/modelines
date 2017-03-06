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