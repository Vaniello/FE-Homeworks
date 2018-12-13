const IMAGES_COLOR = ['black', 'gold', 'silver'];
const INFOS = ['Info about black', 'Info about gold', 'Info about silver']
let imageNum = 0;

let updateImage = function() {
  $('.slide__image').attr('src', 'img/'+ IMAGES_COLOR[imageNum] +'.png');
  $('.slider__control').removeClass('slider__control_active');
  $('.slide__info').removeClass('slide__info_active');
  $('.slider__control[data-index =' + imageNum +']').addClass('slider__control_active');
  $('.slide__info[data-index =' + imageNum +']').addClass('slide__info_active');
}

for (let i = 0; i < IMAGES_COLOR.length; i++) {
  $('.slider__controls').append('<div data-index="' + i + '" class="slider__control">'+ IMAGES_COLOR[i] +'</div>');
  $('.slider__info').append('<p data-index="' + i +'" class="slide__info">' + INFOS[i] + '</p>');
}
updateImage()

$('.slider__control').click(function() {
  imageNum = $(this).attr('data-index');
  updateImage();
})

$('#opennigButton').click(function() {
  $('.slider__info').addClass('slider__info_open');
  $('#closingButton').removeClass('btn_nonActive');
  $(this).addClass('btn_nonActive');
})

$('#closingButton').click(function() {
  $('.slider__info').removeClass('slider__info_open');
  $('#opennigButton').removeClass('btn_nonActive');
  $(this).addClass('btn_nonActive');
})