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
//             console.log('触发节流')
//         }
//     }
// }


function throttle(fn,delay){
    let curTime = Date.now();
    return function(){
        let context = this,
            args = arguments,
            nowTime = Date.now();
        if(nowTime - curTime >= delay){
            curTime = Date.now();
            return fn.apply(context,args)
        }else{
            console.log('触发节流')
        }
    }
}

let x = 0;
let out = function(){
    console.log(++x);
}
let outThrottle = throttle(out,1000);
let interval = setInterval(outThrottle,400);
setTimeout(()=>{clearInterval(interval)},8000);