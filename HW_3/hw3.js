var mathOperations = [{
  symbol : '+',
  work: function(a,b){
  return a + b;
  }
},
{
  symbol: '-',
  work: function(a,b){
  return a - b;
  }
},
{
  symbol: '/',
  work: function(a,b) {
  return a / b;
  }
},
{
  symbol: '*',
  work:  function(a,b){
  return a * b;
  }
}];

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var calc = function() {
  var a;
  var b;
  var symb;
  while(true) {
    a = prompt('Введите первое числовое значение');
    if (a === null) {
      alert('Хорошего дня!!');
      return      
    }
    if (isNumeric(a) === false) {
      alert('Значение введено неверно');
      continue
    }
    b = prompt('Введите второе числовое значение');
    if (b === null) {
      alert('Хорошего дня!!');
      return      
    }
    if (isNumeric(b) === false) {
      alert('Значение введено неверно');
      continue
    }
    symb = prompt('Введите оператор (+ - * /)');
    if (symb === null) {
      alert('Хорошего дня!!');
      return       
    }
    for (var i = 0; i < mathOperations.length; i++) {
      if(mathOperations[i].symbol === symb){
        document.write('<p style="text-align:center; font-family:Arial; font-size:30px; font-weight: bold; margin: 20px auto">' + a + ' ' + symb + ' ' + b + ' = ' + mathOperations[i].work(+a,+b) + '</p><br>'); 
        return
      }
    }
    alert('Символ введен неверно');
  }
}
calc();