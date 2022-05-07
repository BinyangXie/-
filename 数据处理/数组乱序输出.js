var arr = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < arr.length; i++){
    const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
}

console.log(arr);