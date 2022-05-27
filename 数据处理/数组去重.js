const array = ["'1'",'1',1, NaN,NaN, 5, 1, 5, 9, 1, 2, 8,{},{}];

// let newArray = Array.from(new Set(array));
// console.log(newArray)

function uniqueArray(arr){
    let map = {};
    let res = [];
    for(let i = 0; i < arr.length; i ++){
        if(!map.hasOwnProperty(JSON.stringify(arr[i]))){
            map[JSON.stringify(arr[i])] = 1;
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(uniqueArray(array))