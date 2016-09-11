$(function(){ 
    $(".backToTop").goToTop(); 
    $(window).bind('scroll resize',function(){ 
        $(".backToTop").goToTop(); 
    }); 
}); 