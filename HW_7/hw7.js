const man = {
  name: "vasya",
  age: "35",
  prof: "driver",
  email: "sladkiyvasya@gmail.com",
  phone: "+380999999999",
  car: "daewoo lanos"
}

const cutObj = function (obj,propertiesArr) {
  let newObj = Object.assign({}, obj);
  propertiesArr.forEach( el => delete newObj[el]);
  return newObj;
}
console.log(man);
console.log(cutObj(man,['prof', 'car']));