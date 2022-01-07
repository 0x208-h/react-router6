// const objectFactory = function() {
//   const obj = {};
//   const Constructor = [].shift.call(arguments)
//   obj.__proto__ = Constructor.prototype
//   const res = Constructor.apply(obj, arguments)
//   return typeof res === 'object' ? res : obj
// }

// const myNew = function(fn, ...args) {
//   const obj = {}
//   obj.__proto__ = fn.prototype
//   const res = fn.apply(obj, args)
//   return res && typeof res === 'object' ? res : obj
// }

// function Person (name) {
//   this.name = name
// }
// Person.prototype.getName = function(){
//   return this.name
// }

// var a = objectFactory(Person, 'seven')
// var a = new Person('seven')
// // var a = myNew(Person, 'seven')

// console.log(a.name)
// console.log(a.getName()) 
// console.log(Object.getPrototypeOf(a) === Person.prototype)

// const Type = {}

// type = ['String', 'Array', 'Number']
// for(var i = 0, type; type = ['String', 'Array', 'Number'][i]; i++) {
//   (function(type) {
//     Type['is' + type] = function(obj) {
//       return Object.prototype.toString.call(obj) === '[object' + type + ']';
//     }
//   })(type)
// }

// Type.isArray([])

// console.log(type = ['String', 'Array', 'Number'][0])

// var mult = (function(){
//   var cache = {};
//   var calculate = function(){
//     var a = 1;
//     for(var i = 0; i < arguments.length; i++) {
//       a = a * arguments[i]
//     }
//     return a;
//   }

//   return function(){
//     var args = Array.prototype.join.call(arguments,',')
//     console.log(arguments, args, cache, 'args')
//     if(args in cache){
//       return cache[args]
//     }
//     return cache[args] = calculate.apply(null, arguments)
//   }
// })()

// console.log(mult(1,3,2))

// Function.prototype.before = function (beforeFn) {
//   var _self = this
//   console.log(this, arguments,  _self.apply(this, arguments), 'this')
//   return function () {
//     beforeFn.apply(this, arguments)
//     return _self.apply(this, arguments)
//   }
// }

// Function.prototype.after = function(afterFn) {
//   var _self = this
//   return function () {
//     var ret = _self.apply(this, arguments)
//     afterFn.apply(this, arguments)
//     return ret
//   }
// }

// var func = function(){
//   console.log(2)
// }

// func = func.before(function(){
//   console.log(1)
// }).after(function(){
//   console.log(3)
// })

// func()

// let ret = 7, div = 1
// while((ret & div) === 0) {
//   div <<= 1
// }
// console.log(div)


var func = function(fn) {
  const args = []
  return function() {
    console.log('this', this)
    if(arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      console.log(arguments.callee.toString(), 'args')
      return arguments.callee
    }
  }
}

var cost = function() {
  var money = 0
  for(let i = 0; i < arguments.length; i++) {
    money += arguments[i]
  }
  return money
}

var cost = func(cost)
console.log(cost.toString(), 'cost')
cost(100)
cost(200)
cost(300)
console.log(cost())
