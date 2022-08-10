// const john = {
//     name: 'John',
//     birthYear: 1990,
//     job: 'Developer'
// }

// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// const jane = new Person('Jane', 1985, 'designer');
// const mark = new Person('Mark', 1975, 'manager');

// console.log(jane)
// console.log(mark)


// const Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
// }

// const vec1 = new Vec(1, 2);
// const vec2 = new Vec(3, 5);

// // a manita vec1 mas vec2 = (x1 + x2, y1 + y2) = (1 + 3, 2 + 5) = (4, 7)

// Vec.prototype.plus = function(other) {
//     return new Vec(this.x + other.x, this.y + other.y)
// }

// Vec.prototype.minus = function(other) {
//     return new Vec(this.x - other.x, this.y - other.y)
// }

// Vec.prototype.length = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
// }


// console.log('vec1', vec1)
// console.log('vec2', vec2)




// console.log('plus', vec1.plus(vec2))
// console.log('minus', vec1.minus(vec2))
// console.log('length', vec1.length())

// Herencia

// const Person = function(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
// }

// // const john = new Person('John');

// const Developer = function(name, birthYear, skills, yearsOfExperience) {
//     Person.call(this, name, birthYear);

//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
// }

// const john = new Developer('John', 'JAvascript', 10)

// console.log(john)

// const Group = function() {
//     this.members = [];
// }

// const grupo = new Group();

// Group.prototype.has = function(value) {
//     return this.members.includes(value);
// }

// Group.prototype.add = function(value) {
//     if(!this.has(value)) {
//         this.members.push(value)
//     }
// }

// Group.from = function(array) {
//     let group = new Group();
//     for (let i = 0; i < array.length; i++) {
//         group.add(array[i])
//     }

//     return group
// }

// let listaDeElementos = [1, 2, 3, 4, 5]
// let group = Group.from(listaDeElementos)

// console.log(group)

// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     const today = new Date();
//     const year = today.getFullYear()

//     console.log(year - this.birthYear)
// }


// const john = new Person('John', 1994, 'developer')
// const jane = new Person('Jane', 1995, 'designaer')
// const mark = new Person('MArk', 1974, 'accountant')

// john.calculateAge();

// console.log(john)
// console.log(jane)
// console.log(mark)

// CLASES

// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// class Person {
//     constructor(name, birthYear, job) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.job = job;
//     }

//     calculateAge() {
//         const today = new Date();
//         const year = today.getFullYear()

//         console.log(year - this.birthYear)
//     }
// }

// const john = new Person('John', 1994, 'developer')
// const jane = new Person('Jane', 1995, 'designaer')
// const mark = new Person('MArk', 1974, 'accountant')

// console.log(john)
// console.log(jane)
// console.log(mark)
