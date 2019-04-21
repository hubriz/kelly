
(function(){
    
    // Set Homepage Image to full width and responsive
    var homeBanner = $('.main-section .flexslider');
    
    homeBanner.flexslider({
        controlNav : false,
        directionNav: false
    });
    
    
    // Isotope Gallery
    var iso = $('.portfolio-list .grid'),
        x = $('.this-filter a');
    
    iso.isotope({
        itemSelector : '.element-item',
    	filter : ''
    });
    
    x.click(function(e){
        e.preventDefault();
    	var d = $(this);
        
        if(d.hasClass('is-checked')){
        	return;
        }
        
        x.filter('.is-checked').removeClass('is-checked');
        d.addClass('is-checked');
        
        var s = d.data('filter');
        
        iso.isotope({
        	filter : s
        });
        
    }); 
    
    // Modal
    var m = $('.grid');
    
    m.magnificPopup({
        delegate : 'a',
        type : 'image',
        gallery : {
            enabled: true
        },
        image : {
            verticalFit: true
        },
        zoom : {
            enabled: true,
            duration: 300,
            opener: function(element){
                return element.find('img')
            }
        }
    });
    
    
    
    
})(window.jQuery);