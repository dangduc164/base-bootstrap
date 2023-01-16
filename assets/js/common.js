$(document).ready(function() {
    //show hide password
    $(".toggle-password").click(function() {
        let inputPassword = $(this).parent().find("#pwd");

        $(this).toggleClass("show")
        if (inputPassword.attr("type") == "password") {
            inputPassword.attr("type", "text");
        } else {
            inputPassword.attr("type", "password");
        }
    });

    //custom dropdown
    $(".dropdown .dropdown-item").click(function() {
        var text = $(this).html();
        $(".dropdown .dropdown-item").removeClass("selected")
        $(this).addClass("selected")
        $(this).parent().parent().find(".c-dropdown-toggle").html(text);
    });


    //show and hide group-btn 
    $("#tab1 .tab-content__box").click(function() {
        $(this).toggleClass('show')
    })

    $(".p-dashboard__nav-top__toggle").click(function() {
        $(this).toggleClass("show")
    })


    $(".p-list-accounts-linked__main__box").hover(function() {
        $(this).find('.p-list-accounts-linked__main__box-content').toggleClass('show')
    })

    //show tooltip input 
    $('#id').hover(function() {
        $('.desc').toggleClass('show')
    })
})