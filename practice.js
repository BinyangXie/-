// function debounce(fn,wait){
//     let timer = null;
//     return function(){
//         let context = this;
//         let args = arguments;

//         if(timer){
//             console.log('debounce')
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(() => {
//             fn.apply(context,args);
//             timer = null;}
//             ,wait);
//     }
// }

// function throttle(fn,delay){
//     let timer = null;
//     return function(){
//         let context = this;
//         let args = arguments;
//         if(!timer){
//             timer = setTimeout(()=>{
//                 fn.apply(context,args);
//                 timer = null;
//             },delay)
//         }else{
//             console.log('throttle')
//         }
//     }
// }

// function throttle(fn,delay){
//     let cur = Date.now()

//     return function(){
//         let context = this,
//             args = arguments,
//             now = Date.now();
//         if(now - cur >= delay){
//             fn.apply(context,args);
//             cur = now;
//         }else{
//             console.log('throttle')
//         }
//     }
// }

// const create = function(prototype){
//     let newObj = {};
//     newObj.__proto__ = prototype;
//     return newObj;
// }

// function _instanceof(left, right){
//     let proto = Object.getPrototypeOf(left),
//         prototype = right.prototype;
//     while(proto){
//         if(proto === prototype){
//             return true;
//         }
//         proto = Object.getPrototypeOf(proto);
//     }
//     return false;
// }

// function _new(_constructor,...arguments){
//     if(typeof _constructor !== 'function'){
//         throw('type error')
//     }else{
//         let newObj = Object.create(_constructor.prototype);
//         let result = _constructor.apply(newObj, arguments);
//         return typeof result === 'object' ? result : newObj;
//     }
// }

// function promiseAll(promises){
//     return new Promise(function(resolve,reject){
//         if(!Array.isArray(promises)){
//             throw new TypeError('arguments must be an array')
//         }

//         var counter = 0;
//         var aim = promises.length;
//         var result = [];

//         for(let i = 0; i < aim; i ++){
//             Promise.resolve(promises[i]).then(value =>{
//                 counter ++;
//                 result[i] = value;

//                 if(counter === aim){
//                     return resolve(result);
//                 }
//             },error =>{return reject(error)})
//         }
//     })
// }

// function promiseRace(promises){
//     return new Promise(function(resolve,reject){
//         if(!Array.isArray(promises)){
//             throw new TypeError('arguments must be an array')
//         }
//         promises.forEach(promise => promise.then(resolve,reject))
//     })
// }

// function getType(value){
//     if(value === null){
//         return value + '';
//     }
//     if(typeof value === 'object'){
//         let result = Object.prototype.toString.call(value).splice(8,-1);
//         return result;
//     }else{
//         return typeof value;
//     }
// }

// Function.prototype._call = function(context,...arguments){
//     if(!typeof this !== 'function'){
//         throw('Type error');
//     }
//     context = context || window;
//     context.fn = this;
//     result = context.fn(...arguments);
//     delete context.fn;
//     return result;
// }

// function curry(fn,...args){
//     const length = fn.length;

//     return function(...nextArgs){
//         const allArgs = [...args,...nextArgs]

//         if(allArgs.length >= length){
//             return fn.call(this,...allArgs);
//         }else{
//             return curry.call(this,fn,...allArgs);
//         }
//     }
// }

// let fn = curry(function(a,b,c){
//     console.log(a+b+c)
// });
// fn();
// fn(1);
// fn(1)(2);
// fn(1)(2)(3);


// function getJSON(url){
//     let promise = new Promise(function(resolve,reject){
//         let xhr = new XMLHttpRequest();

//         xhr.open("GET",url,true);

//         xhr.onreadystatechange = function(){
//             if(this.readyState !== 4){return}
//             if(this.status === 200){
//                 resolve(this.response);
//             }else{
//                 reject(new Error(this.statusText));
//             }
//         }

//         xhr.onerror = function(){
//             reject(new Error(this.statusText));
//         }

//         xhr.responseType = 'json';

//         xhr.setRequestHeader('Accept','application/json')

//         xhr.send()
//     })
//     return promise;
// }

// function shallowCopy(object){
//     if(!object || typeof object !== 'object'){return}
//     let newObj = Array.isArray(object) ? [] : {};
//     for(let key in object){
//         if(object.hasOwnProperty(key)){
//             newObj[key] = object[key];
//         }
//     }
//     return newObj;
// }

// function deepCopy(object){
//     if(!object || typeof object !== 'object'){return}
//     let newObj = Array.isArray(object) ? [] : {};
//     for(let key in object){
//         if(object.hasOwnproperty(key)){
//             newObj[key] = typeof(object[key]) === 'object' ? deepCopy(object[key]) : object[key];
//         }
//     }  
// }



// function flatten(arr){
//     let result = [];
//     for(let i of arr){
//         if(Array.isArray(i)){
//             result = result.concat(flatten(i))
//         }else{
//             result.push(i)
//         }
//     }
//     return result;
// }


// function flatten(arr){
//     let result = arr.reduce((pre,cur) =>{
//         if(Array.isArray(cur)){
//             return pre.concat(flatten(cur))
//         }else{
//             return [...pre,cur]
//         }
//     },[])
//     return result;
// }

// function flatten(arr){
//     while(arr.some(item => Array.isArray(item))){
//         arr= [].concat(...arr)
//     }
//     return arr;
// }

// function flatten(arr){
//     return arr.toString().split(',');
// }

// function flatten(arr){
//     return arr.flat(Infinity);
// }

// const arr = [1,2,3,4,5,1,2,3,4,5];

// // function uniqueArray(arr){
// //     return Array.from(new Set(arr));
// // }

// function uniqueArray(arr){
//     let map = {};
//     let res = [];
//     for(let i of arr){
//         if(!map.hasOwnProperty(i)){
//             map[i] = 1;
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(uniqueArray(arr))


// function subBigNumber(a,b){
//     let res = '',
//         tmp = 0;
//     a = a.split('');

// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"

// let strSum= function(str1,str2){
//     str1 = str1.split('')
//     str2 = str2.split('')
//     let res = [],
//         flag = 0;
//     while(str1.length || str2.length || flag){
//         let a = str1.pop() || 0,
//             b = str2.pop() || 0;
            
//         let num = parseInt(a) + parseInt(b) + flag;
        
//         if(num >= 2){
//             num -= 2
//             flag = 1
//             res.unshift(num)

//         }else{
//            flag = 0
//            res.unshift(num)
//         }
//     }
//     return res.join('')
// }
// console.log(strSum('11','10'))
// console.log(strSum('11','11'))
// console.log(strSum('11','111'))