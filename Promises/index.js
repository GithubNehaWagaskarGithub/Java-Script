let score=35
let pro=new Promise((resolve,reject)=>{
    if (score>=35) {
        resolve("Pass")
    } else {
        reject("Fail")
    }
})
.then((res)=>console.log(res+"😊"))
.catch((err)=>console.log(err+"😊"))
.finally((done)=>console.log("Exam Completed"))
