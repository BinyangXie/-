const create = function(objPrototype){
    function Son(){};
    Son.prototype = objPrototype;
    return new Son();
}

function Dad(){
    this.attr = 0;
}
Dad.prototype.change = function(x){
    this.attr += x;
    console.log(this.attr,'changed');
}

function Son(){
    Dad.call(this);
}
Son.prototype = create(Dad.prototype);
Son.prototype.constructor = Son;

var son = new Son();
console.log(son instanceof Son,son instanceof Dad);
console.log(son.attr);
son.change(1)
//

