/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
var i=0;
function sub(event){
    event.preventDefault();
    setInterval(function(){
        if(i==0){
            alert("Your order is accepted")
        }
        if(i==3){
            alert("Your order is being Packed")
        }
        if(i==8){
            alert("Your order is in transit")
        }
        if(i==10){
            alert("Your order is out for delivery")
        }
        if(i==12){
            alert("Order delivered")
        }
        i++;
    },1000)
}
