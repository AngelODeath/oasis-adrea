$(document).ready(function() {
    $.stratus({
        links: 'https://soundcloud.com/foofighters/sets/wasting-light'
    });
    
    $("#flipbook").turn({
        width: 1000,
        height: 707.5,
        autoCenter: true,
		// Elevation

		elevation: 50,
		
		// Enable gradients

		gradients: true,
		
		// Auto center this flipbook

		autoCenter: true
    });
    
});