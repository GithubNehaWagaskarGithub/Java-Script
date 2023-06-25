var div=(a,b)=>{
    console.log(`${a%b}`);/*achive by function with expression*/
}
div(10,20)

((a,b)=>{
    console.log(`${a%b}`);/*achive by function Immediate invoke Function*/
})
(10,20)