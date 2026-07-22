//Find which subject has maximum marks along with subject name


let obj1 = {
    maths:56,
    english:89,
    science:67,
    punjabi:88
}


let max = 0
let sub = ""


for (let i in obj1){
    if(obj1[i]>max){
        max = obj1[i];
        sub = i
    }
}


console.log(sub, max)





function myFunction(a, b, c) {   //parameters
    let out = a + b + c;


    console.log(out)
}


//ES6:- Ecma script 6, commonJS


// let, const, arrow function


const arrowFun = (a, b, c) => {
    let out = a + b + c;


    console.log(out)
}


arrowFun(89, 89, 89)


// arrowFun(10, 20, 30)   //invoking the function
// arrowFun(10, 60, 40)


// arrowFun(178, 567, 4563)


// arrowFun(78654, 87634, 976345) //arguments



console.log(batch)


var batch = "FS";
