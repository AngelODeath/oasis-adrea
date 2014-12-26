$(document).ready(function() {
    
    function pager(pager_div) {
        console.log(pager_div);
        $(pager_div).children('div').each(function() {
            var class_list = $(this).attr('class').split(/\s+/);
            console.log(this);
        });
        
        this.page = 1;
        
        var self = this;
        
        function display() {
            
        }
        
        function page() {
            self.page ++;
            display();
        }
        
        display();
    }
    
    var flipbook = $("#flipbook");
                  
//     $.stratus({
//         links: '://soundcloud.com/room1011/aphex-twins-pacman-powerpill'
//     });
    
//     flipbook.turn({
//         width: 1000,
//         height: 707.5,
//         elevation: 50,
//         gradients: true,
//         autoCenter: true,
//         acceleration: true,
//         display: "double"
//     });
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#culture_article_1').click(function() {
        console.log('click');
    });
    
    var x = new pager(flipbook);
});