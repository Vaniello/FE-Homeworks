//////Первое + четвертое задание

area.addEventListener('click', function() {
  var posX = event.pageX - this.offsetLeft - this.clientLeft;
  var posY = event.pageY - this.offsetTop - this.clientTop;
  var elem = document.createElement('div');
  for (var i = 0; i < document.querySelectorAll('.input-figure').length; i++) {
    if (document.querySelectorAll('.input-figure')[i].checked === true) {
      var figure = document.querySelectorAll('.input-figure')[i].value;
      break
    }
  }
  for (var j = 0; j < document.querySelectorAll('.input-color').length; j++) {
    if (document.querySelectorAll('.input-color')[j].checked === true) {
      var color = document.querySelectorAll('.input-color')[j].value;
      break
    }
  }
  elem.classList.add('elem', figure, color);
  elem.style = 'left:' + posX + 'px; top:' + posY + 'px;';
  this.appendChild(elem);
})


//////////Второе задание

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 },
  { 'name': 'john', 'age': 20 },
  { 'name': 'julia', 'age': 30 },
  { 'name': 'amanda', 'age': 22 }
];

var pluck = function(arr, prop) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i][prop]);
  }
  return newArr
}

console.log(pluck(characters,'name'));



/////////Третье задание

var numbers = [5, 54, 96, -85, -6, 36, 12, 13, 20, -78, 53];

var map = function(fn,array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(fn(array[i]));
  }
  return newArr
}

var f1 = function(a) {
  a *= 2;
  return a
}

console.log(numbers);
console.log(map(f1,numbers));