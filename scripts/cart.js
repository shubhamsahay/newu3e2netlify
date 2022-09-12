var data2=JSON.parse(localStorage.getItem("items"))
var p55=data2.reduce(function(sum,el){
    return sum+el.price
},0)

var h2=document.getElementById("cart_total")
h2.innerText=p55;

data2.map(function (el,index){
    var y=document.createElement("div");
   
        let image=document.createElement("img");
        image.src=el.image;
        image.style.width="30%";
        image.style.height="40%";
        let name=document.createElement("p");
        name.innerText=el.name;
        let price=document.createElement("p");
        price.innerText=el.price;

        var remove=document.createElement("button")
        remove.innerText="Remove";
        remove.setAttribute("class","remove");
        remove.addEventListener("click",function(el,index){
            del(el,index)
        })
        y.append(image,name,price,remove)
        document.getElementById("cart").append(y)
})

function del(el,index){
    data2.splice(index,1)
    localStorage.setItem("items",JSON.stringify(data2))
    window.location.reload()
}
