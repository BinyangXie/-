let _instanceof = function(obj,constructor){
    let proto = Object.getPrototypeOf(obj);
    let prototype = constructor.prototype;

    while(proto){
        if(proto === prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

let array = new Array;
console.log(_instanceof(array,Object));
let obj = new Object;
console.log(_instanceof(obj,Array));