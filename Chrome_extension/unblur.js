///////////////////////////////////////////////////////////////////////////////
// 
// 				 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
// 				           Version 2, December 2004
//
///////////////////////////////////////////////////////////////////////////////
// 
//     Copyright (C) 2015 Kushagra Singh | kushagra14056@iiitd.ac.in
// 
///////////////////////////////////////////////////////////////////////////////

function unblurDoc() {

	$('.autogen_class_views_read2_page_blur_promo').remove();

	$('.page_blur_promo').remove();
	$('.page_blur_promo_overlay').remove();

	$('.between_page_ads').remove();

	$('.text_layer').css('color', '#000');
	$('.absimg').css('opacity', '1.0');
	$('.text_layer').css('text-shadow','black 0px 0px 0px');
	$('.page_blur_promo').remove(); // Removes pesky ads.
	
	setTimeout(unblurDoc, 1000);
};

unblurDoc()
