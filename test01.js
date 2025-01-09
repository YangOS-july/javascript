// let name = "小明";      // 声明一个变量 name 并赋值为“小明”
// let age  = 11;          // 声明一个变量 age
// age=12
// const PI = 3.1415       // 声明一个常量 PI，并赋值为 3.1415
// console.log(PI)         // 在控制台打印 PI

// var a;                      // 此时 a 为 Undefined
// console.log(typeof(a))
// a = "http://www.csdn.net/"; // 此时 a 为 String 类型
// console.log(typeof(a))
// a = 123;                    // 此时 a 为 Number 类型
// console.log(typeof(a))

// var str = "Let's have a cup of coffee.";  // 双引号中包含单引号
// console.log(str+typeof(str))
// var str = 'He said "Hello" and left.';    // 单引号中包含双引号
// console.log(str+typeof(str))
// var str = "We\'ll never give up.";        // 使用反斜杠转义字符串中的单引号
// console.log(str+typeof(str))


// var num1 = 123;     // 整数
// console.log(typeof(num1))
// var num2 = 3.14;    // 浮点数
// console.log(typeof(num2))


// var person = {
//     name: 'Bob',
//     age: 20,
//     tags: ['js', 'web', 'mobile'],
//     city: 'Beijing',
//     hasCar: true,
//     zipcode: null
// };
// console.log(person.name);       // 输出 Bob
// console.log(typeof(person));        // 输出 20

// var arr = [1, 2, 3, 'hello', true, null]
// console.log(typeof(arr))

// function sayHello(name){
//     return "Hello, " + name;
// }
// var res = sayHello("Peter");
// console.log(res);  // 输出 Hello, Peter

// var fun = function(){
//     console.log("http://www.csdn.net/js/");
// }
// function createGreeting(name){
//     return "Hello, " + name;
// }
// function displayGreeting(greetingFunction, userName){
//     return greetingFunction(userName);
// }
// var result = displayGreeting(createGreeting, "Peter");
// console.log(result);  // 输出 Hello, Peter


// var x = "Hello ";
// var y = "World!";
// var z = x + y;
// console.log(z);  // 输出：Hello World!
// x += y;
// console.log(x);  // 输出：Hello World!


// var id = 3;
// switch (id) {
//     default : 
//     console.log("游客");
//     break
//     case 1 :
//         console.log("普通会员");
//         break;
//     case 2 :
//         console.log("VIP会员");
//         break;

   
// }

// console.log(id)

// var id = 4;
// switch (id) {
//     case 1 :
//         console.log("普通会员");
//         break;  //停止执行，跳出switch
//     case 2 :
//         console.log("VIP会员");
//         break;  //停止执行，跳出switch
//     case 3 :
//         console.log("管理员");
//         break;  //停止执行，跳出switch
//     default :   //上述条件都不满足时，默认执行的代码
//         console.log("游客");
// }


// for (var i = 1; i <= 10; i++) {
//     console.log(i + " ");
// }

// var z = 0;
// for (;;) {
//     if(z > 5){
//         break;
//     }
//     // 要执行的代码
//     z++;
// }

// console.log(z)


// function getSum(num1, num2){
//     return num1 + num2;
// }
// var sum1 = getSum(7, 12);      // 函数返回值为：19
// var sum2 = getSum(-5, 33);     // 函数返回值为：28

// console.log(sum1)
// console.log(sum2)


// 函数表达式
// var getSum = function(num1, num2) {
//     var total = num1 + num2;
//     return total;
// };

// console.log(getSum(1,2))


// var x = 123;    // 整数
// var y = 3.14;   // 浮点数
// var z = 0xf;   // 十六进制数：255


// console.log(z)


// var x = 1.57e4;     // 等于 15700
// var y = 4.25e+6;    // 等于 4250000
// var z = 4.25e-6;    // 等于 0.00000425

// console.log(new Date().toLocaleString())


        // function fn(a, b, ...c) {//剩余参数只能写在参数的最后面
        //     console.log(a + b, c) //c:真数据（数组）
        // }
        // fn(1, 2, 3, 4, 5)




        // const arr = [1, 2, 3]
        // console.log(...arr)

        // const obj = {
        //     uname: 'niuniu',
        //     age: 18
        // }
        // console.log({...obj})




        function getSum(x,y) {
            //逻辑中断：如果 实参 没有传递给形参 x 和 y ，则会返回 0，而不是NaN
            x = x || 0
            y = y || 0
            console.log(x,y)
        }
        getSum(2) //2 0  => 如果没有逻辑中断，则返回 NaN
        getSum(3,6) //3 6
        