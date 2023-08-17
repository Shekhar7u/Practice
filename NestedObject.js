const person ={
    name:"Shashi Shekhar Singh",
    age:"20",
    address:{
        street:"113",
        city:"varanasi",
        state:"Uttar Pradesh"
    },
}
function extractData(obj)
{
    const{name,address:{street},}=obj;
    return {name,street}
}
console.log(extractData(person));