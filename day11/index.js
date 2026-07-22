let arr=[1,4,5,6,8,9];

// let ma=arr.filter((el,i)=>{
//    return el%2==0;
// });
// console.log(ma);

let ary=arr.map((el,i)=>{
   return el*2;
}).filter((el,i)=>{
    return el%2==0;
}).forEach((el,a)=>{
     console.log(el*200);
})
console.log(ary);