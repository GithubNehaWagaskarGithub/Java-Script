let a=[1,2,3,4,5]
console.log(a);

let b=a.push[6,7,8,9,10]
console.log(a);

let c=a.pop()
console.log(a);

let d=a.shift()
console.log(a);

let e=a.unshift(0)
console.log(a);

let f=a.filter((e)=>e>3)
console.log(f);

let g=a.map((x)=>x*3)
console.log(g);

let h=a.reduce((f,l)=>{
    return f+l
})
console.log(h);
/*--------------------------------*/
let aa=[100,200,300]
for(const x in aa){
    console.log(x);
}

for(const x of aa){
    console.log(x);
}

aa.forEach((val,ind)=> {
    console.log(`${val}==${ind}`);
});

/*Pallindrome */
let x=prompt("Enter a word")
let y=x.split('').reverse().join('')
if(x==y){
    console.log("Pallindrome");
}
else{
    console.log("Not Pallindrome");
}
console.log(y);

let t=new Array(1,2,3,4,5)//we cam create array by using method,new keyword
console.log(t);

let u=new Object()//we cam create Object by using method,new keyword
u.Name="Neha",
u.lName="Wagaskar"
console.log(u);