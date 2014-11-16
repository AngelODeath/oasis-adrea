$(document).ready(function() {
    $.stratus({
        links: '//soundcloud.com/room1011/aphex-twins-pacman-powerpill'
    });
    
    $("#flipbook").turn({
        width: 1000,
        height: 707.5,
        elevation: 50,
        gradients: true,
        autoCenter: true,
        acceleration: true,
        display: "double"
    });
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#culture_article_1').click(function() {
    });
    
});