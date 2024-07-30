let inputbar = document.getElementById("number")
let colorbar = document.getElementById("color")
let dropdown = document.getElementById("select")
let output = document.querySelector(".output")
let btn = document.getElementById("addbtn")

btn.addEventListener("click",function(){

    let n = inputbar.value
    let color= colorbar.value
    let shape = dropdown.value
    output.innerHTML = ""
    
    for(let i=1;i<=n;i++){
        let div = document.createElement("div")
        div.classList.add(shape)
        div.style.backgroundColor = color
        output.appendChild(div)
    }
})              