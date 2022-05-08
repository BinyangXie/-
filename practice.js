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
//     b = b.split('');

//     while(a.length || b.length || tmp){
//         tmp += ~~a.pop() + ~~b.pop();
//         res = (tmp % 10) + res;
//         tmp = tmp > 9;
//     }

//     return res.replace(/^0+/,'')
// }

// function imageAsync(url){
//     return new Promise(function(resolve,reject){
//         let img = new Image();
//         img.src = url;
//         img.onload = () =>{
//             resolve(img)
//         }
//         img.onerror = () =>{
//             reject(err);
//         }
//     })
// }


// class EventCenter{
//     constructor(){
//         this.handlers = {};
//     }

//     addEventlistener(type,handler){
//         if(!this.handlers[type]){
//             this.handlers[type] = [];
//         }
//         this.handlers[type].push(handler);
//     }

//     dispatchEventlistener(type,params){
//         if(!this.handlers[type]){
//             return new Error('no type')
//         }
//         this.handlers[type].foreach(handler =>{
//             handler(...params);
//         })
//     }

//     removeEventlistener(type,handler){
//         if(!this.handlers[type]){
//             return new Error('no type')
//         }
//         if(!handler){
//             delete this.handlers[type];
//         }else{
//             const index = this.handlers[type].indexOf(handler);
//             if(index === -1){
//                 return new Error('no handler')
//             }else{
//                 this.handlers[type].splice(index,1);
//                 if(this.handlers[type].length === 0){
//                     delete this.handlers[type];
//                 }
//             }

//         }
//     }
// }