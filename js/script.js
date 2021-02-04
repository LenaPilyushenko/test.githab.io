$(document).ready(function () {

	// slider
	$('.main-slider').slick({
        slidesToShow: 1,
		infinite:true,
        slidesToScroll: 1, 
		dots: true,
    });    
    
    // catalog button
    $i = 0; 
    $('.menu-toggle-cont').click(function () { 
        if ($i == 0) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown('fast'); 
            $i = 1; 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp('fast'); 
            $i = 0; 
        } 
    });

    // catalog menu
    $( '.dropdown-menu .dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        $el.toggleClass('active-dropdown');
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
        
        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
            $el.removeClass('active-dropdown');
        } );
        
         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }
        
        return false;
    } );

});