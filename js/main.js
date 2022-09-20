//---Menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}
//----Slider
$('.owl-carousel').owlCarousel({
	stagePadding: 50,
	loop:true,
	margin:10,
	nav:false,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:2
			}
	}
})