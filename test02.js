// function myFunction() {
//     let inVariable = "函数内部变量";
// }
// myFunction();//要先执行这个函数，否则根本不知道里面是啥
// console.log(inVariable);


// 全局变量

// function greet() {
//   console.log(greeting);
// }
// // 打印 'Hello World!'
// greet();

// var greeting = 'Hello World!';


// function greet() {
//     var greeting = 'Hello World!';
//     console.log(greeting);
//   }
//   // 打印 'Hello World!'
//   greet();
//   // 报错： Uncaught ReferenceError: greeting is not defined
//   console.log(greeting);


// var a = 2;
// function foo(){
//     console.log(a)
// }
// function bar(){
//     var a = 3;
//     foo();
// }
// bar()


// var sex = '男';
// function person() {
//     var name = '张三';
//     function student() {
//         var age = 18;
//         console.log(name); // 张三
//         console.log(sex); // 男 
//     }
//     student();
//     console.log(age); // Uncaught ReferenceError: age is not defined
// }
// person();


// function doSomething(){}
// console.log( doSomething.prototype );


// function Parent() {
//     this.name = 'parent1';
//     this.play = [1, 2, 3]
//   }
//   function Child() {
//     this.type = 'child2';
//   }
//   Child1.prototype = new Parent();
//   console.log(new Child())



// function fetchData(callback) {
//   setTimeout(() => {
//       const data = "Data fetched!";
//       callback(data);  // 当数据加载完毕后调用回调函数
//   }, 20000);
// }

// function handleData(data) {
//   console.log("Received:", data);  // 处理回调返回的数据
// }

// fetchData(handleData);  // 向fetchData函数传递handleData作为回调函数

// function fetchData(callback) {
//   setTimeout(() => {
//       const data = "Data fetched!";
//       callback(data);  // 异步操作完成后调用回调
//   }, 2000);  // 模拟异步操作，2秒后执行
// }

// function handleData(data) {
//   console.log("Received:", data);
// }

// fetchData(handleData);  // 异步调用
// console.log("Request sent...");  // 这行会在fetchData完成之前执行


// const greet = () => {
//   console.log("Hello, world!");
// };
// greet();  // 输出 "Hello, world!"


// const multiply = (a,b) => {

//   const result = a + b

//   return result;
// }

// console.log(multiply(100,30))


// function Counter() {
//   this.num = 0;
//   setInterval(() => {
//       this.num++;  // 箭头函数的 this 继承自外部的 Counter 函数
//       console.log(this.num);
//   }, 1000);
// }

// const counter = new Counter();  // 每秒输出 1, 2, 3, ...

// function outer() {
//   let count = 0;  // 外部函数的变量
//   return function inner() {
//       count++;  // 内部函数访问外部函数的变量
//       console.log(count);
//   };
// }

// const counter = outer();  // 调用外部函数，返回内部函数
// counter();  // 输出 1
// counter();  // 输出 2
// counter();  // 输出 3

// function createCounter() {
//   var count = 0;  // 私有变量
//   return {
//       increment: function() { count++; },
//       decrement: function() { count--; },
//       getCount: function() { return count; }
//   };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount());  // 输出 1
// counter.decrement();
// console.log(counter.getCount());  // 输出 0


// function fetchData(url, callback) {
//   setTimeout(function() {
//       const data = "Data from " + url;
//       callback(data);
//   }, 5000);
// }

// fetchData('https://example.com', function(response) {
//   console.log(response);  // 访问到fetchData内部的变量
// });

// console.log('异步开始')


// class Car {

 
//   constructor(brand) {
//       this.brand = brand;
//       this.speed = 0;
//   }

//   accelerate() {
//       this.speed += 10;
//       console.log(`${this.brand} is going at ${this.speed} km/h`);
//       return this;  // 返回当前对象的引用，以支持链式调用
//   }

//   brake() {
//       this.speed -= 10;
//       console.log(`${this.brand} slowed down to ${this.speed} km/h`);
//       return this;  // 返回当前对象的引用，以支持链式调用
//   }

//   stop() {
//       this.speed = 0;
//       console.log(`${this.brand} has stopped.`);
//       return this;  // 返回当前对象的引用，以支持链式调用
//   }
// }

// const myCar = new Car("Toyota");
// myCar.accelerate().accelerate().brake().stop();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a noise.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);  // 调用父类构造函数
//   this.breed = breed;
// }

// // 继承 Animal 的原型方法
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // 在 Dog 的原型上添加一个方法
// Dog.prototype.bark = function() {
//   console.log(`${this.name} barks.`);
// };

// const dog1 = new Dog("Buddy", "Golden Retriever");

// dog1.speak();  // 输出：Buddy makes a noise. (来自 Animal)
// dog1.bark();   // 输出：Buddy barks. (来自 Dog)

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a noise.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);  // 调用父类构造函数
//   this.breed = breed;
// }

// // 继承 Animal 的原型方法
// Dog.prototype = Object.create(Animal.prototype);
// // Dog.prototype.constructor = Dog;

// // 在 Dog 的原型上添加一个方法
// Dog.prototype.bark = function() {
//   console.log(`${this.name} barks.${this.breed} `);
// };

// const dog1 = new Dog("Buddy", "Golden Retriever");

// dog1.speak();  // 输出：Buddy makes a noise. (来自 Animal)
// dog1.bark();   // 输出：Buddy barks. (来自 Dog)




// const obj = {
//   name: 'Alice',
//   greet: function() {
//       console.log(this.name);  // this 指向 obj
//   }
// };
// obj.greet();  // 输出：Alice

// const obj = {
//   name:'hh',
//   fangfa:function(){

//     const rec = ()=>{
//       console.log(this.name)
//     }

//     rec()
//   }
// }

// obj.fangfa()


// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }

//   greet() {
//       console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const person = new Person("Alice", 30);
// person.greet();  // 输出：Hello, my name is Alice.


// 父类
// class Animal {
//   constructor(name) {
//       this.name = name;
//   }

//   speak() {
//       console.log(`${this.name} makes a noise.`);
//   }
// }

// // 子类
// class Dog extends Animal {
//   constructor(name, breed) {
//       super(name);  // 调用父类构造函数
//       this.breed = breed;
//   }

//   speak() {
//       super.speak();  // 调用父类的 speak 方法
//       console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy", "Golden Retriever");
// dog.speak();  
// // 输出：
// // Buddy makes a noise.
// // Buddy barks.


// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a noise.`);
// };

// // Dog 继承 Animal
// function Dog(name, breed) {
//   Animal.call(this, name);  // 调用父类构造函数
//   this.breed = breed;
// }

// // 让 Dog 的原型指向 Animal 的实例，这样就可以继承 Animal 的属性和方法
// Dog.prototype = new Animal();
// // Dog.prototype.constructor = Dog;  // 修正构造函数指向

// const dog = new Dog("Buddy", "Golden Retriever");
// dog.speak();  // 输出：Buddy makes a noise.


function showArguments(a,b,c) {
  console.log(arguments);  // 输出：类数组对象
  console.log(arguments[0]); // 输出：第一个传入的参数
  console.log(arguments.length);  // 输出：传入参数的个数

  console.log(c)
}

showArguments(10, 20);
// 输出：
// { '0': 10, '1': 20, '2': 'hello', '3': true }
// 10
// 4
