let button= document.getElementById("btn")
let color= document.getElementById("color")
let  wrap = document.getElementById("wrap")
let decimal =[0,1,2,3,,4,5,6,7,8,9,'A','B','C','D','E','F']
let rgb= document.getElementById("rgb")

button.addEventListener("click",bground)
function bground(){
   let hexcolor="#"
  for(i=1;i<=6;i++){
     hexcolor+=hexhadesimal()
  }
  wrap.style.backgroundColor = hexcolor
  color.innerHTML = hexcolor
  rgb.innerHTML=hexcolor
  
}


function hexhadesimal(){
    let randomnum= Math.floor(Math.random()*16)
        return decimal[randomnum]
}