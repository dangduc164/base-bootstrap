$(document).ready(function() {
      // custom carousel page dining detail
    $('.p-dining__main__box-image-list').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        pagination: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.btn-more-desc').click(function(e){
        e.preventDefault()
        $('.p-dining__intro p ').toggleClass('ellipsis')
    })
})