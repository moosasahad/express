function stebs(n){
    if(n<=3){
        return n
    }
    return 2 * stebs(n-2)+stebs(n-3)
}
console.log(stebs(47));
