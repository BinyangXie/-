// let obj1 = {  a: 0,
//               b: {
//                  c: 0
//                  }
//             };
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj1.a = 1;
// obj1.b.c = 1;
// console.log(obj1); // {a: 1, b: {c: 1}}
// console.log(obj2); // {a: 0, b: {c: 0}}


function deepCopy(object){
    if(!object || typeof object !== 'object'){return}

    let newObj = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObj[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key];
        }
    }
    return newObj;
}

let obj1 = {  a: 0,
              b: {
                 c: 0
                 }
            };
let obj2 = deepCopy(obj1);
obj2.b.c = 999;
console.log(obj1.b,obj2.b);
        