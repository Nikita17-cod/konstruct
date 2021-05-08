// $(document).ready(function () {

//   $('.header-navbar__hamburger').on('click', function () {
//     $(this).toggleClass('active');
//     $('.header-navbar__list').toggleClass('active');
//   });

// });
$(document).ready(function() {
    $('.navbar__burger').click(function(event) {
        $('.navbar__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});