/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.title', {
	opacity: 0,
	reset: false,
	duration: 1200,
	delay: 100,
	easing: 'ease-in-out',
});

ScrollReveal().reveal('.image-content', {
	opacity: 0,
	reset: true,
	duration: 1750,
	delay: 250,
	easing: 'ease-in-out',
});

ScrollReveal().reveal('.form-content', {
	opacity: 0,
	reset: true,
	duration: 1550,
	delay: 200,
	origin: 'bottom',
	distance: '-20%',
	easing: 'ease-in-out',
});
