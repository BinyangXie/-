function getType(value){
    if(value === null){
        return value + '';
    }

    if(typeof value === 'object'){
        let valueClass = Object.prototype.toString.call(value),
        type = valueClass.slice(8, -1).toLowerCase();
        return type;
    }else{
        return typeof value;
    }
}


console.log(getType([]))