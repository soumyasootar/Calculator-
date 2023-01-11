let s=""
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            s=eval(s)
            document.querySelector("input").value=s
        }else if(e.target.innerHTML=="AC"){
            s=""
            document.querySelector("input").value=s
        }else{
            s+=e.target.innerHTML
            document.querySelector("input").value=s
        }
    })
})
