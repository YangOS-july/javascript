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


function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
  }
  function Child() {
    this.type = 'child2';
  }
  Child1.prototype = new Parent();
  console.log(new Child())