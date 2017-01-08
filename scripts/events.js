$(function() {
	init_videos();
	init_teachers();
	init_addresses();
	init_gallery();
	init_header();
	init_reviews();
});

$( window ).on('load', function() {
	resize_videos();
	resize_teachers();
	resize_addresses();
	resize_gallery();
	resize_header();	
	resize_reviews();	

});

$( window ).resize(function() {
	resize_videos();
	resize_teachers();
	resize_addresses();
	resize_gallery();
	resize_header();	
	resize_reviews();	
});