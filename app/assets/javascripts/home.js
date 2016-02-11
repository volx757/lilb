$(document).ready(function(){
    var owl = $('.owl-carousel')
    owl.owlCarousel({
        lazyLoad: true,
        items: 1,
        center: true,
        loop: true
    })



    owl.trigger('next.owl.carousel').trigger('next.owl.carousel').trigger('next.owl.carousel').trigger('next.owl.carousel')

    $('#thisone').on('click', function () {
        fbShare('https://www.rarelilb.com', "Rare Lil'B", 'rare facebook posts by the Based God', 'http://localhost:3000/public/wisdom00239.png', 600, 300)
    })
})
function fbShare(url, title, descr, image, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}