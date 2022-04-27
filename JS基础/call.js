Function.prototype._call = function(context){
    if(typeof this !== 'function'){
        console.log('type error');
    }

    let args = [...arguments].slice(1),
        result = null;
    context = context||window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

let person1 = {
    age : 111,
    callAgeAdd : function(x,y){
        console.log(this.age + x + y);
    }
}
let person2 = {
    age : 222
}
person1.callAgeAdd._call(person2,111,777)