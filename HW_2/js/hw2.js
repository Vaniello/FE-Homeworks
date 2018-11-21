var phoneMemory = [{
  memoryValue : '32',
  phonePrice : 300
},
{
  memoryValue : "64",
  phonePrice : 400
},
{
  memoryValue : "128",
  phonePrice : 500
},
{
  memoryValue : "256",
  phonePrice : 650
},
{
  memoryValue : "512",
  phonePrice : 800
}];

var phoneColor = [{
  colorName : "серебряный",
  k : 0,
  imgName : "silver"
},
{
  colorName : "черный",
  k : 10,
  imgName : "black"
},
{
  colorName : "золотой",
  k : 20,
  imgName : "gold"
}];

var memory;
var exit1 = false;

while(!exit1) {
  memory = prompt('Введите память телефона:');

  for (var i = 0; i < phoneMemory.length; i++) {
    if (memory === phoneMemory[i].memoryValue) {
      exit1 = true;
      break;
    }
  }

  if (!exit1) {
    alert('Память введена неверно!');
  }
}

var color;
var exit2 = false

while(!exit2) {
  color = prompt('Введите цвет телефона:');

  for (var j = 0; j < phoneColor.length; j++) {
    if(color === phoneColor[j].colorName){
      exit2 = true;
      break;
    }
  }

  if (!exit2) {
    alert('Такого цвета не в наличии');
  }
}

document.write('<img src="img/' + phoneColor[j].imgName + '.png" alt="" style="display:block; margin:50px auto;"<br><h1 style="text-align:center; color:red;">Цена: ' + (phoneMemory[i].phonePrice + phoneColor[j].k) + '$</h1>');