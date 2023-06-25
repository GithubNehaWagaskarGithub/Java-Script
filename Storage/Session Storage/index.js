sessionStorage.setItem('Name','SRK')
sessionStorage.setItem('age',57)

// let Name=sessionStorage.getItem('Name')
// let age=sessionStorage.getItem('age')
// document.write(`my name is ${name} and age is ${age}`)


sessionStorage.clear()

sessionStorage.removeItem('Name')

let Name=sessionStorage.getItem('Name')
let age=sessionStorage.getItem('age')
document.write(`my name is ${name} and age is ${age}`)