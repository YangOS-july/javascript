// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("数据获取完成");
//       callback("数据内容",'hh');
//     }, 1000);
//   }
  
//   fetchData((data,data1) => {
//     console.log("回调接收到数据:", data,data1);
//   });
  


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("数据获取完成");
//         resolve("数据内容");
//       }, 1000);
//     });
//   }
  
//   fetchData().then((data) => {

//     console.log("Promise接收到数据:", data);
//   }).catch((error) => {
//     console.error("出错了:", error);
//   });
  


// async function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("数据获取完成");
//         resolve("数据内容");
//       }, 1000);
//     });
//   }
  
//   async function processData() {
//     const data = await fetchData();
//     console.log("await接收到数据:", data);
//   }
  
//   processData();


console.log("同步任务1");

setTimeout(() => {
  console.log("宏任务1");
}, 0);

Promise.resolve().then(() => {
  console.log("微任务1");
});

console.log("同步任务2");

setTimeout(() => {
  console.log("宏任务2");
}, 0);

  