$('.accordion__header').on('click', function() {
  $(this).toggleClass('accordion__header_active')
  $(this).next('.accordion__main').slideToggle(750);
})