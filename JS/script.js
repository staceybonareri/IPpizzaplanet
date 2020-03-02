//pizza sizes
var small={name:"small", price:450};
var medium={name:"medium", price:650};
var large={name:"large", price:850};


//crusts
var thinCrust={name:"thin crust", price:100};
var thickCrust={name:"thick crust", price:150};
var doubleDough={name:"double dough", price:200};
var gllutenFree={name:"gluten-free", price: 250};

//toppings
var toppings={name:"toppings", price: 50};

//sauces
var sauces={name:"sauces", price:100};

//accompaniments
var softDrink={name:"soft-drink", price:150};
var dasaniWater={name:"dasani water", price:100};
var sodaWater={name:"soda water", price:200};
var energyDrinks={name:"energy drinks", price:150};
var juices={name:"juices", price:150};

//kind of pizza
var somethingMeaty={name:"Something Meaty", price:800};
var bbqChicken={name:"BBQ Chicken", price:800};
var magherita={name:"Magherita", price:800};
var chickenTikka={name:"Chicken Tikka", price:800};
var vegeterianPizza={name:"Vegeterian Pizza", price:800};
var hawaiian={name:"Hawaiian", price:800};
var pepperoni={name:"Pepperoni", price:800};
var doubleCheese={name:"Double Cheese", price:800};
var mediterraneanPizza={name:"Mediterranean Pizza", price:800};
var chickenAndMushroom={name:"Chicken and Mushroom", price:800};


var getSize = function(){
    var y = $("select#sizepizza option:selected").val();
    if(y == "Small"){size = small}else 
    if(y =="Medium"){size = medium}else
    if(y == "Large") {size = large}
    console.log(size);
    return size;
}

var getCrust = function(){
    var x = $("select#crust option:selected").val();
    if(x =="Thin Crust"){crust= thinCrust}else
    if(x =="Thick Crust"){crust= thickCrust}else
    if(x =="Double-Dough"){crust= doubleDough}else
    if(x =="Gluten Free"){crust=glutenFree}
    console.log(crust);
    return crust;
}

var getAccompaniments = function(){
    var a = $("select#accompaniments option:selected").val();
    if(a =="Soft Drink"){accompaniments= softDrink}else
    if(a =="Dasani Water"){accompaniments= dasaniWater}else
    if(a =="Soda Water"){accompaniments= sodaWater}else
    if(a =="Energy Drinks"){accompaniments= energyDrinks}else
    if(a =="Juices"){accompaniments= juices}
    console.log(accompaniments);
    return accompaniments; 
}  

var getPizza= function(){
    var p= $("select#KindofPizza option:selected").val();
    if(p == "Something Meaty"){pizza= somethingMeaty}else
    if(p =="BBQ Chicken"){pizza= bbqChicken}else
    if(p =="magherita"){pizza= magherita}else
    if(p =="Chicken Tikka"){pizza= chickenTikka}else
    if(p =="Vegetarian Pizza"){pizza= vegeterianPizza}else
    if(p =="Hawaiian"){pizza= hawaiian}else
    if(p =="Pepperoni"){pizza= pepperoni}else
    if(p == "Double Cheese"){pizza= doubleCheese}else
    if(p =="Mediterranean Pizza"){pizza= mediterraneanPizza}else
    if(p =="Chicken and Mushroom"){pizza= chickenAndMushroom}
    console.log(pizza);
    return pizza;

}
var totalPrice = function(topping, size, crust, pizza, accompaniments, sauce, delivery){
    this.totals= topping+size+crust+pizza+accompaniments+sauce+delivery
};

var getDelivery=function(){
    var d= $("input[type=radio][name=delivery]:checked").val();
    if(d== "yes"){
        var name=$("input[type=text][name=userName]").val();
        var location=$("input[type=text][name=Area]").val();
        var houseno=$("input[type=text][name=HseNo]").val();
        var address={name:name, location:location, houseno:houseno, cost:200}
    }else{
        var address={name:"name N/A", location:"location N/A", houseno:"houseno N/A", cost:0}
    }
    return address
}




$(document).ready(function(){
    $("input[type=button][name=next]").click(function(){
        $("form").find(".set.active").next().addClass("active");
        $("form").find(".set.active").prev().removeClass("active");
    });
    $("input[type=button][name=back]").click(function(){
        $("form").find(".set.active").prev().addClass("active");
        $("form").find(".set.active").next().removeClass("active");
    });



    $("input[type=button][name=next]").click(function(){
        //variables
        var sizePrice= getSize().price;
        var sizeName= getSize().name;
        var crustPrice=getCrust().price;
        var crustName=getCrust().name;
        var accompanimentsPrice= getAccompaniments().price;
        var accompanimentsName= getAccompaniments().name;
        var pizzaPrice= getPizza().price;
        var pizzaName= getPizza().name;
        var toppingPrice= toppings.price;
        var toppingName= toppings.name;
        var saucePrice= sauces.price;
        var sauceName= sauces.name;
        var deliveryPrice=getDelivery().cost;
        var total = new totalPrice(toppingPrice, sizePrice, crustPrice, pizzaPrice, accompanimentsPrice, saucePrice, deliveryPrice);
        var totalCost=total.totals

        var items = "<li>"+sizeName+ ": "+ sizePrice+"</li>"+
                    "<li>"+crustName+ ": "+ crustPrice+"</li>"+
                    "<li>"+accompanimentsName+ ": "+ accompanimentsPrice+"</li>"+
                    "<li>"+pizzaName+ ": "+ pizzaPrice+"</li>"+
                    "<li>"+toppingName+ ": "+ toppingPrice+"</li>"+
                    "<li>"+sauceName+ ": "+ saucePrice+"</li>"+
                    "<li>Delivery: "+ deliveryPrice+"</li>"+
                    "<li>Delivery Address => "+ getDelivery().name+", "+getDelivery().location+", "+getDelivery().houseno+"</li>"+
                    "<h3> Cost:"+totalCost+"</h3>";
        
                    $(".items").html(items);
        console.log (totalCost);

    });



});