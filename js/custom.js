$(document).ready(function(){
    var bodyHeight          =   $('body').height();
    var windowHeight        =   $(window).height();
    
    var footerHeight        =   $('.footer_menu').height();
    var main_content        =   bodyHeight-footerHeight;
    var topRightCtnrHeight  =   $('#topRightContainer').height();
    var mainRightSideHeight =   $('#mainRightSide').outerHeight();
    var breadcrumbRow       =   $('.breadcrumbRow').outerHeight()  ;
    $('div.desktop_menu_container').css('max-height', ($(window).height()-100)+'px');
    $('div.rightContainer').css('max-height',($('body').height()-50+'px'));
    $('div.leftContainer').css('min-height',($('body').height()-50+'px'));
    /*
     * Startup
     */
    $('#startup').click(function(){
        var desktopContinerHeight   =   $('.desktop_menu_container').height();
        var slideHeight             =   footerHeight+desktopContinerHeight;
        console.log(slideHeight);
        $('.desktop_menu_container').toggle();
        $('.desktop_menu_container').css('bottem',slideHeight+100);
    })
    $('#demo1_menu').easytree();
       function changeTheme() {
        var theme = $('#themes').val();
        var stylesheet = $('.skins');
        var href = stylesheet.attr('href');
        stylesheet.attr('href', '/content/skin-' + theme + '/ui.easytree.css');
    }
});