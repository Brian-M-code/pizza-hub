//business logic
var selectedFlavour;
var selectedSize;
var selectedCrust;
var selectedToppings;
const deliveryFee = 150;

function HawaiianPizza(size, crust, toppings) {
    this.flavour = "Hawaiian";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
HawaiianPizza.prototype.details = function () {
    return "Pizza flavour: " + this.flavour + "\n" + "Size: " + " " + this.size + "\n" + "Crust: " + " " + this.crust + "\n" + "Toppings: " + " " + this.toppings;
}

function BbqSteak(size, crust, toppings) {
    this.flavour = "Barbeque Steak";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
BbqSteak.prototype.details = function () {
    return "Pizza Flavour: " + this.flavour + "\n" + "Size: " + " " + this.size + "\n" + "Crust: " + " " + this.crust + "\n" + "Toppings: " + " " + this.toppings;
}

function Pepperoni(size, crust, toppings) {
    this.flavour = "Pepperoni";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Pepperoni.prototype.details = function () {
    return "Pizza Flavour: " + this.flavour + "\n" + "Size: " + " " + this.size + "\n" + "Crust: " + " " + this.crust + "\n" + "Toppings: " + " " + this.toppings;
}

function chickentikka(size, crust, toppings) {
    this.flavour = "Chicken Tikka";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Veg.prototype.details = function () {
    return "Pizza Flavour: " + this.flavour + "\n" + "Size: " + " " + this.size + "\n" + "Crust: " + " " + this.crust + "\n" + "Toppings: " + " " + this.toppings;
}
//the price of hawaiian pizza without the toppings
function pizzaTypePriceHawaiian() {
    var pizzaPrice;
    if (selectedSize === "Small") {
        pizzaPrice = 500;
    } else if (selectedSize === "Medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "Large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//bbq chicken price minus the toppings
function pizzaTypePriceBbq() {
    var pizzaPrice;
    if (selectedSize === "Small") {
        pizzaPrice = 500;
    } else if (selectedSize === "Medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "Large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//Pepperoni price minus the toppings
function pizzaTypePricePepperoni() {
    var pizzaPrice;
    if (selectedSize === "Small") {
        pizzaPrice = 500;
    } else if (selectedSize === "Medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "Large") {
        pizzaPrice = 1000;
    } 
    return pizzaPrice;

}
//Veg pizza price minus the toppings
function pizzaTypePriceChickentikka() {
    var pizzaPrice;
    if (selectedSize === "Small") {
        pizzaPrice = 500;
    } else if (selectedSize === "Medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "Large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//prices of different crusts
function crustPrices() {
    var crustPrice;
    if (selectedCrust === "Crispy") {
        crustPrice = 100;
    } else if (selectedCrust === "Stuffed") {
        crustPrice = 120;
    } else if (selectedCrust === "flatbread") {
        crustPrice = 90;
    } else if (selectedCrust === "gluten"){
        crustPrice = 140; 
    } else if (selectedCrust ==="none"){
        crustPrice = 0;
    }
    return crustPrice;
}
//prices of different toppings based on size
function toppingsPrices() {
    var toppingsPrice;
    if (selectedToppings === "None" && selectedSize === "Small"){
        toppingsPrice = 0;
    }
    else if (selectedToppings === "mushroom" && selectedSize === "Small") {
        toppingsPrice = 40;
    } else if (selectedToppings === "onions" && selectedSize === "Small") {
        toppingsPrice = 90;
    } else if (selectedToppings === "tomato" && selectedSize === "Small") {
        toppingsPrice = 80;
    } else if (selectedToppings === "greenpepper" && selectedSize === "Small") {
        toppingsPrice = 60;
    } else if (selectedToppings === "olives" && selectedSize === "small"){
        toppingsPrice = 20;

    } else if (selectedToppings === "None" && selectedSize === "Medium"){
        toppingsPrice = 0;
    } else if (selectedToppings === "mushroom" && selectedSize === "Medium") {
        toppingsPrice = 50;
    } else if (selectedToppings === "onions" && selectedSize === "Medium") {
        toppingsPrice = 100;
    } else if (selectedToppings === "tomato" && selectedSize === "Medium") {
        toppingsPrice = 90;
    } else if (selectedToppings === "greenpepper" && selectedSize === "Medium") {
        toppingsPrice = 70;
        else if (selectedToppings === "olives" && selectedSize === "medium"){
            toppingsPrice = 20;

    } else if(selectedToppings === "None" && selectedSize === "Large"){
        toppingsPrice = 0;
    } else if (selectedToppings === "mushroom" && selectedSize === "Large") {
        toppingsPrice = 60;
    } else if (selectedToppings === "onions" && selectedSize === "Large") {
        toppingsPrice = 110;
    } else if (selectedToppings === "tomato" && selectedSize === "Large") {
        toppingsPrice = 100;
    } else if (selectedToppings === "greenpepper" && selectedSize === "Large") {
        toppingsPrice = 80;
        else if (selectedToppings === "olives" && selectedSize === "large"){
            toppingsPrice = 20;
    } 
    return toppingsPrice;
}

//total Hawaiian pizza price
function totalPizzaPriceHawaiian() {
    return pizzaTypePriceHawaiian() + crustPrices() + toppingsPrices() + deliveryFee;
}
//total BBQ pizza price
function totalPizzaPriceBbq() {
    return pizzaTypePriceBbq() + crustPrices() + toppingsPrices() + deliveryFee;
}

function totalPizzaPricePepperoni() {
    return pizzaTypePricePepperoni() + crustPrices() + toppingsPrices() + deliveryFee;
}

function  totalPizzaPriceChickentikka() {
    return pizzaTypePriceChickentikka() + crustPrices() + toppingsPrices() + deliveryFee;
}

//UI LOGIC
$(document).ready(function () {
    //select box items to output information on hawaiian pizza on the html
    $("#pizza-size-hawaiian").change(function () {
        selectedSize = $("#pizza-size-hawaiian option:selected").val();
        $("ul#order-list").append("<li><span class='pizza-order-size'>" + selectedSize + "</span></li>");
        $(".pizza-order-size").text(selectedSize);
    })

    $("#pizza-crust-hawaiian").change(function () {
        selectedCrust = $("#pizza-crust-hawaiian option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-crust'>" + selectedCrust + "</span></li>");
        $(".pizza-order-crust").text(selectedCrust);
    })
    $("#pizza-toppings-hawaiian").change(function () {
        selectedToppings = $("#pizza-toppings-hawaiian option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-toppings'>" + selectedToppings + "</span></li>");
        $(".pizza-order-toppings").text(selectedToppings);
        var hawaiianOrder = new HawaiianPizza(selectedSize, selectedCrust, selectedToppings);
        confirm("Please confirm your order: \n" + hawaiianOrder.details());
        $("ul#order-list").append("<li><span class='pizza-order-toppings'><strong>" + hawaiianOrder.name + "</strong>  </span></li>");
        $("ul#order-list").append("<li>Total: <span class='total'><strong>" + totalPizzaPriceHawaiian() + "</strong></span></li>");

    })

    //information on bbq chicken pizza to be diplayed once chosen
    $("#pizza-size-bbqC").change(function () {
        selectedSize = $("#pizza-size-bbqC option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-size'>" + selectedSize + "</span></li>");
        $(".pizza-order-size").val(selectedSize);
    })

    $("#pizza-crust-bbqC").change(function () {
        selectedCrust = $("#pizza-crust-bbqC option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-crust'>" + selectedCrust + "</span></li>");
        $(".pizza-order-crust").val(selectedCrust);
    })
    $("#pizza-toppings-bbqC").change(function () {
        selectedToppings = $("#pizza-toppings-bbqC option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-toppings'>" + selectedToppings + "</span></li>");
        $(".pizza-order-toppings").val(selectedToppings);
        var bbqOrder = new BbqChicken(selectedSize, selectedCrust, selectedToppings);
        confirm("Please confirm your order: \n" + bbqOrder.details());
        $("ol#list").append("<li><span class='pizza-order-toppings'><strong>" + bbqOrder.name + "</strong>  </span></li>");
        $("ol#list").append("<li>Total: <span class='total'><strong>" + totalPizzaPriceBbq() + "</strong></span></li>");

    })
    //information on pepperoni pizza to be displayed
    $("#pizza-size-pepperoni").change(function () {
        selectedSize = $("#pizza-size-pepperoni option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-size'>" + selectedSize + "</span></li>");
        $(".pizza-order-size").val(selectedSize);
    })

    $("#pizza-crust-pepperoni").change(function () {
        selectedCrust = $("#pizza-crust-pepperoni option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-crust'>" + selectedCrust + "</span></li>");
        $(".pizza-order-crust").val(selectedCrust);
    })
    $("#pizza-toppings-pepperoni").change(function () {
        selectedToppings = $("#pizza-toppings-pepperoni option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-toppings'>" + selectedToppings + "</span></li>");
        $(".pizza-order-toppings").val(selectedToppings);
        var pepperoniOrder = new Pepperoni(selectedSize, selectedCrust, selectedToppings);
        confirm("Please confirm your order: \n" + pepperoniOrder.details());
        $("ol#list").append("<li><span class='pizza-order-toppings'><strong>" + pepperoniOrder.name + "</strong>  </span></li>");
        $("ol#list").append("<li>Total: <span class='total'><strong>" + totalPizzaPricePepperoni() + "</strong></span></li>");
    })
    //information on ChickenTikka PIZZA To be displayed
    $("#pizza-size-veg").change(function () {
        selectedSize = $("#pizza-size-veg option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-size'>" + selectedSize + "</span></li>");
        $(".pizza-order-size").val(selectedSize);
    })

    $("#pizza-crust-veg").change(function () {
        selectedCrust = $("#pizza-crust-veg option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-crust'>" + selectedCrust + "</span></li>");
        $(".pizza-order-crust").val(selectedCrust);
    })
    $("#pizza-toppings-veg").change(function () {
        selectedToppings = $("#pizza-toppings-veg option:selected").val();
        $("ol#list").append("<li><span class='pizza-order-toppings'>" + selectedToppings + "</span></li>");
        $(".pizza-order-toppings").val(selectedToppings);
        var vegOrder = new Veg(selectedSize, selectedCrust, selectedToppings);
        confirm("Please confirm your order: \n" + vegOrder.details());
        $("ol#list").append("<li><span class='pizza-order-toppings'><strong>" + vegOrder.name + "</strong>  </span></li>");
        $("ol#list").append("<li>Total: <span class='total'><strong>" + totalPizzaPriceVeg() + "</strong></span></li>");
    })


    //check out form
    $("#submit-checkout").click(function () {
        $("#location").change(function () {
            var location = $("#location option:selected").text();
        })
        var email = $("#inputEmail").val();

        function validEmail(email) {
            var y = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return y.test(email);
        }
        if (validEmail(email)) {
            alert("Order Approved! Enter MPESA pin on the prompt on your phone to confirm payment");
            alert("loading.................");
            alert("Payment Successful! Your Pizza is on the way!");
        } else {
            alert(email + " is not a valid email. Try again");
        }
        $("#submit-reset").click(function () {
            $("#location")[0].reset()
        })

    })
    //contact us form
    $("#submit-feedback").click(function () {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#message").val();
        //validate email
        function validEmail(email) {
            var y = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return y.test(email);
        }
        if (validEmail(email)) {
            alert("We have received your message " + " " + name + " " + ".Thank you for reaching out to us");
        } else {
            alert(email + " is not a valid email. Try again");
        }


        $("#contact-form")[0].reset();
    })
})
