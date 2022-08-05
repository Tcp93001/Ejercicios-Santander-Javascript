// Sesion 6 RETO 1
// let Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
// }

// let vec1 = new Vec(1, 2);
// let vec2 = new Vec(2, 3); // vec2 = {x: 2, y: 3}

// let vec3 = new Vec(4, 2);

// // vec2 = {x: 2, y: 3}
// // vec1.plus(vec2)
// Vec.prototype.plus = function(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
// }

// Vec.prototype.minus = function(other) {
//     return new Vec(this.x - other.x, this.y - other.y)
// }

// Vec.prototype.length = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
// }


// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }


// console.log(vec2.plus(vec1))
// console.log(vec1.plus(vec3))
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length(vec1)); // 2.23606797749979


// SESION 6 RETO 2

// let Group = function() {
//     this.members = []
// }

// Group.prototype.add = function(value) {
//     if(!this.has(value)) this.members.push(value);
// }

// Group.prototype.has = function(value) {
//     return this.members.includes(value);
// }

// Group.from = function(collection) {
//     let group = new Group();
//     console.log('grupo', group)
//     for(let i = 0; i < collection.length; i++) {
//         group.add(collection[i])
//     }

//     return group
// }

// let arrayInicial = [1, 2, 3, 4, 5]
// let group = Group.from(arrayInicial);

// console.log(group)
// console.log(group.has(6)) // false
// group.add(10)
// console.log(group.has(10)) // true
// console.log(group)

// console.log(arrayInicial)

// SESION 6 RETO 3

// let Triangle = function(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// let triangle = new Triangle(5, 2, 3);

// console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
// console.log(triangle.getPerimeter()); // 6
