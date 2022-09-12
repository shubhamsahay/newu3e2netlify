// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

let arr=JSON.parse(localStorage.getItem("items"))||[];
var y=document.getElementById("item_count");
y.innerText=arr.length;


const url=`https://grocery-mock-api.herokuapp.com/items`;
fetch (url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    display(res.data)
})
.catch(function(err){
    console.log("err",err);
})

function display(data){
    data.map(function (el,index){
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.image;
        image.style.width="30%";
        image.style.height="40%";
        let p=document.createElement("p");
        p.innerText=el.name;
        let p1=document.createElement("p");
        p1.innerText=el.price;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.setAttribute("id","add_to_cart");
        btn.addEventListener("click",function(){
            mygro(el);
        })
        div1.append(image,p,p1,btn)
        document.querySelector("#items").append(div1);
    })
}
function mygro(el){
    arr.push(el)
    localStorage.setItem("items",JSON.stringify(arr));
    window.location.reload();
}