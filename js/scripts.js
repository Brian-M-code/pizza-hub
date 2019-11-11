$(document).ready(function () {
    ​
        var toppingsPrices = {mushroom:30, onions:5, tomato:10,greenpepper:15, olives: 20};
        var crustPrices = {crispy: 10, stuffed: 20, flatbread:30, glutten:45};
        
    ​
        $.each(toppingsPrices,function(k,v){
            var option = '<option value="'+k+'">'+k+' @ '+v+' Ksh</option>';
            $("#select-toppings").append(option);
        });
    ​
        $.each(crustPrices,function(k,v){
            var option = '<option value="'+k+'">'+k+'</option>';
            $("#select-crust").append(option);
        });
    ​
    ​
    ​
    function Pizza(size, crust, toppings){
        this.flavour= flavour;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
     
    ​
    Pizza.prototype.SizePrice = function(){
    ​
        if(this.size==="large"){
            return 1000;
        }else if(this.size=="medium"){
            return 750;
        }else{
            return 500;
        }
    }
    ​
    ​
    Pizza.prototype.ToppingsPrice = function(){
        if(this.size=="large"){
            return toppingsPrices[this.toppings]*3;
        }else if(this.size=="medium"){
            return toppingsPrices[this.toppings]*2;
        }else{
            return toppingsPrices[this.toppings];
        }
    }
    ​
    ​
    ​
    Pizza.prototype.CrustPrice = function(){
        if(this.crust=="crispy"){
            return 10;
        }else if(this.crust=="stuffed"){
            return 20;
        }else{
            return 30;
        }
    }
    ​
    ​
    var pizza1 = new Pizza("large", "crispy", "onion");
    ​
    console.log(pizza1.size + " "+pizza1.SizePrice() + "brian "+ pizza1.ToppingsPrice() + pizza1.CrustPrice());
    ​
    // business logic​
    ​
    $("#checkout").click(function(e){
        e.preventDefault();
        var flavour = $("select[name='flavour']");
        var size = $("select[name='size']").val();
        var crust = $("select[name='crust']").val();
        var toppings = $("select[name='toppings']").val();
        var number = $("input[name='number']").val();
    ​
        var pizza = new Pizza(flavour,size, crust, toppings);
    ​
        var sizePrice = pizza.SizePrice();
        var crustPrice = pizza.CrustPrice();
        var toppingPrice = pizza.ToppingsPrice();
        var total = (sizePrice + crustPrice + toppingPrice ) * number;
    ​
        var orderSummary = "<li>"+flavour+" "+size+" "+number+" "+crust+" with "+toppings + " toppings <br> Total Ksh ."+total+"</li>";
    ​
        $("#list").append(orderSummary);
    ​
    })
    ​
    });
    $("#clientdata").submit(function (event) {
        event.preventDefault();
        var blanks = ["name", "phone_number", "location"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Your order will be delivered at "+ input[2] +"");
        $("#go")[2].reset();
    });
    ​
    $("#do").click(function (event) {
        event.preventDefault();
        var blanks = ["name", "phone_number", "location"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Welcome to Artista Pizza Hub Garden-City Mall");
        $("#do").reset();
    });
    Collapse
    
    
    
    