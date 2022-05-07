function ThousandNum(num){
    num += '';
    if(num.indexOf('.') === -1){
        let str = num.split('').reverse().join(''),
            len = num.split('').length;

        convertStr = str.replace(/(\d{3})/g, '$1,');

        result = convertStr.split('').reverse().join('');

        return len % 3 == 0? result.slice(1) : result;
    }
    return num.toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

console.log(ThousandNum(12121212121212.898889898))