
let data = JSON.parse(localStorage.getItem("data"))


let myBtn = document.querySelector("#search-btn").addEventListener('click',function(){
    let elementSearched = document.querySelector(".search").value;
    console.log(elementSearched.length);
    if(elementSearched.length ==0){
        display(data);
    }else{
    let y = elementSearched.length;
    let searchedData = data.filter(function (elem,index) {
        return (elem.name.substring(0,y)).toLowerCase() == elementSearched;
    })
    if(searchedData.length > 0){
    display(searchedData);
    }else{
        alert(`No results for ${elementSearched}`)
    }
}
})

function display(item){
    document.querySelector("#images").innerHTML=""
    item.forEach(function(el){
     let box=document.createElement("div")
     box.addEventListener("click", function(){
         send(el)
     })
     let im=document.createElement("img")
     
     im.setAttribute("src",el.image)
     let nam=document.createElement("p")
     nam.innerText=el.name
     // if(item.price==""){
     let pr=document.createElement("p")
     if(el.price!=""){
     pr.innerText=`$ ${el.price}`
     }
     let sz=document.createElement("p")
     let colr=document.createElement("p")
      for(let i=0;i<el.img.length;i++){
         colr.setAttribute("class","coloursForPic")
         if(i<4){
         let inp=document.createElement("button")
         //let a=
        // console.log(a)
       
         inp.style.backgroundImage =el.img[i]
     
     
         
        
        colr.append(inp)
         }else
         colr.append("+"+(el.img.length-4))
      }    
     
     box.append(im,nam,pr,sz,colr)
     document.querySelector("#images").append(box)
 
    })
    localStorage.setItem("data", JSON.stringify(item))
  }
