function curry(fn,...args){
    const length = fn.length;

    return function(...nextArgs){
        const allArgs = [...args,...nextArgs]

        if(allArgs.length >= length){
            return fn.call(this,...allArgs);
        }else{
            return curry.call(this,fn,...allArgs);
        }
    }
}

let fn = curry(function(a,b,c){
    console.log(a+b+c)
});
fn();
fn(1);
fn(1)(2);
fn(1)(2)(3);