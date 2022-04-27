arr = [[100,120],[300,380]]
for(let line of arr){
    let left = line[0],
        right = line[1],
        sumList = [];
    for(let i = left; i <= right; i++){
        let numList = i.toString().split('');
        let sum = 0;
        numList.forEach(value =>{
            sum += Math.pow(parseInt(value),3);
        })
        if(sum == i){
            sumList.push(i);
        }
    }
    if(sumList.length){
        console.log(...sumList);
    }else{
        console.log('no');
    }
    
}