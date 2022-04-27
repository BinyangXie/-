function debounce(fn,wait){
    let timer = null;

    return function(){
        let context = this;
        let args = arguments;
        if(timer){
            console.log('触发防抖')
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=>{
            fn.apply(context,args);
            timer = null;
        },wait);
        
    }
}
let x = 0;
let out = function(){
    console.log(++x);
}
let outDebounce = debounce(out,2000);

outDebounce()
setTimeout(outDebounce,1999);
setTimeout(outDebounce,5000);
