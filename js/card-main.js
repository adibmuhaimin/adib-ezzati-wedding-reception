$(function(){
   $('body').on('click', '#btn-open', function(){

    $('body').find('.start-overlay').addClass('animated');
    $('body').find('.start-overlay').addClass('slideOutUp');

    setTimeout(() => {
        $('body').find('.opening-card').addClass('d-none');
        $('body').find('.main-div').removeClass('d-none');
    }, 750);
   })
})