let a=document.getElementById('btn3')
a.addEventListener('click',()=>{
    let element=document.getElementById('card')
    element.remove()
})



let b=document.getElementById('btn2')
b.addEventListener("click",()=>{
    let body=document.body
    let main=document.createElement('main')
    main.innerHTML +=`
 
<form action="#" method="get" onsubmit="fetch()">
<label for="comment">comment</label>
<input type="text" id="comment">
     <button type="submit">submit</button>
</form>`

    body.appendChild(main)
})


function fetch(){
    let comment=document.getElementById('comment').value
    document.writeln("comment "+comment)
}