/*let emp={//literals 
    eName:"sudesh",
    eId:123,
    ePlace:"Mysore"
}
emp.ePincode=412216
console.log(emp);
console.table(emp);
console.log(emp.eId);
console.log(typeof emp);*/

/*let stu={     //nested object
    sName:'Neha',
    sId:111,
    sPlace:'Phulgaon',
    sAddr:{
        sPincode:412216,
        sSchool:'HUD'
    }
}
console.log(stu);
stu.sAddr.sLandmark="Wagholi"
console.table(stu)*/


/*function Emp(name,id){//Constructor Fuction
    this.nam=name;
    this.id=id;
}
let e1=new Emp("Suraj",101)
let e2=new Emp("Neha",102)
console.log(e1);
console.log(e2);*/


//Object Methods=Object.keys,Object.values,Object.entries,Object.apply,Object.call,
//Object.bind,seal=gives to access to modify the object,freeze=do not allow to modify the object
let stu={    
    sName:'Neha',
    sId:111,
    sPlace:'Phulgaon',
    sAddr:{
        sPincode:412216,
        sSchool:'HUD'
    }
}
console.log(stu);
console.log(Object.keys(stu));
console.log(Object.values(stu));
console.log(Object.entries(stu));
console.log(Object.apply);