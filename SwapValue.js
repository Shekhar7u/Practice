function swap(a,b){
    [a,b]=[b,a];
    return [a,b];
}
let a=2;
let b=7 ;   
[a,b]=swap(a,b)
console.log([a,b])//[7,2]