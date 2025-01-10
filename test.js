// alert('hello')



//练习1
function f1 () {
    let num = 123
    function f2 () {
        console.log(num)    //123
    }
    f2()
}
let num = 234
f1()

// 练习2. 
let a = 1
function fn1() {
    let a = 2
    let b = '22'
    fn2()

    function fn2() {
        let a = 3
        fn3()

        function fn3() {
            let a = 4
            console.log(a)  //4
            console.log(b)  //'22'
        }
    }
}
fn1()
