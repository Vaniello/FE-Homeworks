var imgName
var price
var telColor = prompt('Введите цвет телефона (есть в наличии чёрный, золотой, серебряный)');

if (telColor === 'золотой' || telColor === 'Золотой') {
  imgName = 'gold';
} else if(telColor === 'серебряный' || telColor === 'Серебряный') {
  imgName = 'silver';
} else if(telColor === 'черный' || telColor === 'Черный' || telColor === 'чёрный' || telColor === 'Чёрный') {
  imgName = 'black';
} else {
  alert('Цвет введен неверно!')
  telColor = null;
}

if (telColor !== null) {
  var telMemory = prompt('Введите память телефона (64, 256, 512)');
    if (telMemory === '64') {
      price = 31000;
    } else if (telMemory === '256') {
      price = 36000;
    } else if (telMemory === '512') {
      price = 41500;
    } else {
      alert('Память введена неверно!');
      telMemory = null;
    }
} 

if (telColor === null || telMemory === null) {
  document.write ('<img src="img/default.png" style="display:block; margin:30px auto;" alt=""><br>');
} else {
  document.write ('<img src="img/' + imgName + '.png" style="display:block;margin:50px auto 20px;" alt=""><br><br><h1 style="color:red; font-family: Arial,sans-serif; text-align:center;">Цена: ' + price + ' грн</h1>');
}