$(document).ready(function(){
    var owl = $('.owl-carousel')
    owl.owlCarousel({
        lazyLoad: true,
        items: 1,
        center: true,
        loop: true
    })

    owl.trigger('next.owl.carousel').trigger('next.owl.carousel').trigger('next.owl.carousel')
})