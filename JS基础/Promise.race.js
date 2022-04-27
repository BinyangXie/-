function promiseRace(promises){
    if(!Array.isArray(promises)){
        throw new TypeError('argument must be an Array')
    }
    return new Promise(function(resolve,reject){
        for(let i = 0; i < promises.length; i ++){
            promises[i].then(resolve,reject);
        }
    })
}
// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('xxx')
    }, 1001)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('yyy')
    }, 1000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseRace([p3, p1, p2]).then(res => {
    console.log(res)
})