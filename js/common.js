$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})


	// BURGER_MENU
	let menu_mob = document.querySelector('.header_mobile_menu_content')
	let header_menu_open = document.querySelector('.header_mobile_content_button_menu')
	let header_menu_close = document.querySelector('.header_mobile_content_button_close')


	header_menu_open.addEventListener('click', function(){
		header_menu_close.classList.toggle('dn')
		header_menu_open.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	})

	header_menu_close.addEventListener('click', function(){
		header_menu_open.classList.toggle('dn')
		header_menu_close.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
		sub_menu_mobile.classList.toggle('dn'); 
	})

	
});