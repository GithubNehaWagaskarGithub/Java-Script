localStorage.setItem('Name','SRK')
localStorage.setItem('age',57)

// let Name=localStorage.getItem('Name')
// let age=localStorage.getItem('age')
// document.write(`my name is ${name} and age is ${age}`)


localStorage.clear()

localStorage.removeItem('Name')

let Name=localStorage.getItem('Name')
let age=localStorage.getItem('age')
document.write(`my name is ${name} and age is ${age}`)