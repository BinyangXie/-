function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)){
            throw new TypeError('argument must be an Array')
        }
        let resolveCounter = 0;
        let promiseNum = promises.length;
        let resolveValue = [];

        for(let i = 0; i < promiseNum; i++){
            Promise.resolve(promises[i]).then(value =>{
                resolveCounter ++;
                resolveValue[i] = value;
                if(resolveCounter === promiseNum){
                    return resolve(resolveValue);
                }
            },error => reject(error)
            )
        }
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res)
})