function sumBigNumber(a,b){
    let res = '';
    let tmp = 0;
    a = a.split('');
    b = b.split('');
    while(a.length || b.length || tmp){
        tmp += ~~a.pop() + ~~b.pop();
        res = (tmp % 10) + res;
        tmp = tmp > 9;
    }
    return res.replace(/^0+/,'');
}