// CONSTANTS
var SIZES = [{
  name: 'small',
  price: 50,
  kk: 20
},
{
  name: 'large',
  price: 100,
  kk: 40
}];
var STUFFINGS = [{
  name: 'cheese',
  price: 10,
  kk: 20,
},
{
  name: 'potato',
  price: 15,
  kk: 10
},
{
  name: 'salad',
  price: 20,
  kk: 5
}];
var TOPPINGS = [{
  name: 'spice',
  price: 15,
  kk: 0
},
{
  name: 'mayo',
  price: 20,
  kk: 5
}];
// !!!!!!!!!

var Hamburger = function () {
  this._size = null;
  this._stuffing = null;
  this._toppings = [];
}

Hamburger.prototype.addSize = function(size) {
  this._size = size;
  return size;
}

Hamburger.prototype.addStuffing = function(stuffing) {
  this._stuffing = stuffing;
  return stuffing;
}

Hamburger.prototype.getStuffing = function () {
  return this._stuffing.name;
}

Hamburger.prototype.addTopping = function(newTopping){
  this._toppings.push(newTopping);
  return newTopping;
}

Hamburger.prototype.calculatePrice = function () {
  var price = this._size.price + this._stuffing.price;
  for (let i = 0; i < this._toppings.length; i++) {
    price += this._toppings[i].price        
  }
  return price;
}

Hamburger.prototype.calculateKk = function () {
  var kk = this._size.kk + this._stuffing.kk;
  for (let i = 0; i < this._toppings.length; i++) {
    kk += this._toppings[i].kk        
  }
  return kk;
}

const findValue = function (arr1, arr2){
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i].checked){
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j].name === arr1[i].value) {
          var burgValue= arr2[j];
          return  burgValue;
        }
      }
    }
  }
}

document.querySelector('.btn').addEventListener('click', function() {
  let burger = new Hamburger();
  burger.addSize(findValue(document.querySelectorAll('[name="burg-size"]'),SIZES));  
  burger.addStuffing(findValue(document.querySelectorAll('[name="burg-stuf"]'),STUFFINGS));

  for (let i = 0; i < document.querySelectorAll('[name="burg-topp"]:checked').length; i++) {
    burger.addTopping(findValue(document.querySelectorAll('[name="burg-topp"]:checked'),TOPPINGS));
  } 
  document.querySelector('.burger-img').setAttribute('src', `img/${burger.getStuffing()}.png`);
  document.querySelector('.result__values').textContent = `Цена: ${burger.calculatePrice()}грн, Калорийность: ${burger.calculateKk()} ккал`;
});