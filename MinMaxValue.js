function maxMin(arr)
{
    return{
        max:Math.max(...arr),
        min:Math.min(...arr)
    }
}
const array=[3,2,45,6,7,7]
console.log(maxMin(array));