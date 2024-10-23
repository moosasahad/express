function poalindrum (s){
    let b= s.replace(/[^a-z0-9]/g, "");
    console.log(b)
    let a = b.split("").reverse().join("")
    console.log(a)
    if(b==a){
        return true
    }
    return false
}
console.log(poalindrum(s="0p"))