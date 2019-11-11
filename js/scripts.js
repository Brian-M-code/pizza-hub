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

function Chickentikka(size, crust, toppings) {
    this.flavour = "Chicken Tikka";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Chickentikka.prototype.details = function () {
    return "Pizza Flavour: " + this.flavour + "\n" + "Size: " + " " + this.size + "\n" + "Crust: " + " " + this.crust + "\n" + "Toppings: " + " " + this.toppings;
}
//the price of hawaiian pizza without the toppings
function pizzaTypePriceHawaiian() {
    var pizzaPrice;
    if (selectedSize === "small") {
        pizzaPrice = 500;
    } else if (selectedSize === "medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//bbq chicken price minus the toppings
function pizzaTypePriceBbq() {
    var pizzaPrice;
    if (selectedSize === "small") {
        pizzaPrice = 500;
    } else if (selectedSize === "medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//Pepperoni price minus the toppings
function pizzaTypePricePepperoni() {
    var pizzaPrice;
    if (selectedSize === "small") {
        pizzaPrice = 500;
    } else if (selectedSize === "medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "large") {
        pizzaPrice = 1000;
    }
    return pizzaPrice;

}
//Veg pizza price minus the toppings
function pizzaTypePriceChickentikka() {
    var pizzaPrice;
    if (selectedSize === "small") {
        pizzaPrice = 500;
    } else if (selectedSize === "medium") {
        pizzaPrice = 750;
    } else if (selectedSize === "large") {
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
    } else if (selectedCrust === "gluten") {
        crustPrice = 140;
    } else if (selectedCrust === "none") {
        crustPrice = 0;
    }
    return crustPrice;
}
//prices of different toppings based on size
function toppingsPrices() {
    var toppingsPrice;
    if (selectedToppings === "None" && selectedSize === "small") {
        toppingsPrice = 0;
    }
    else if (selectedToppings === "mushroom" && selectedSize === "small") {
        toppingsPrice = 40;
    } else if (selectedToppings === "onions" && selectedSize === "small") {
        toppingsPrice = 90;
    } else if (selectedToppings === "tomato" && selectedSize === "small") {
        toppingsPrice = 80;
    } else if (selectedToppings === "greenpepper" && selectedSize === "small") {
        toppingsPrice = 60;
    } else if (selectedToppings === "olives" && selectedSize === "small") {
        toppingsPrice = 20;

    } else if (selectedToppings === "None" && selectedSize === "medium") {
        toppingsPrice = 0;
    } else if (selectedToppings === "mushroom" && selectedSize === "medium") {
        toppingsPrice = 50;
    } else if (selectedToppings === "onions" && selectedSize === "medium") {
        toppingsPrice = 100;
    } else if (selectedToppings === "tomato" && selectedSize === "medium") {
        toppingsPrice = 90;
    } else if (selectedToppings === "greenpepper" && selectedSize === "medium") {
        toppingsPrice = 70;
    } else if (selectedToppings === "olives" && selectedSize === "medium") {
        toppingsPrice = 20;

    } else if (selectedToppings === "None" && selectedSize === "large") {
        toppingsPrice = 0;
    } else if (selectedToppings === "mushroom" && selectedSize === "large") {
        toppingsPrice = 60;
    } else if (selectedToppings === "onions" && selectedSize === "large") {
        toppingsPrice = 110;
    } else if (selectedToppings === "tomato" && selectedSize === "large") {
        toppingsPrice = 100;
    } else if (selectedToppings === "greenpepper" && selectedSize === "large") {
        toppingsPrice = 80;
    } else if (selectedToppings === "olives" && selectedSize === "large") {
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

function totalPizzaPriceChickentikka() {
    return pizzaTypePriceChickentikka() + crustPrices() + toppingsPrices() + deliveryFee;
}

//UI LOGIC
$(document).ready(function () {
    //select box items to output information on hawaiian pizza on the html
    $("#flavour").change(function () {
        selectedFlavour = $("#flavour option:selected").val();
        $("ol#list").append("<li>" + selectedFlavour + "</li>");
        $("#size").val(selectedFlavour);
    })

    $("#crust").change(function () {
        selectedCrust = $("#crust option:selected").val();
        $("ol#list").append("<li>" + selectedCrust + "</li>");
        $("#crust").val(selectedCrust);
    })
    $("#toppings").change(function () {
        selectedToppings = $("#toppings option:selected").val();
        $("ol#list").append("<li>" + selectedToppings + "</li>");
        $("#toppings").val(selectedToppings);
        var hawaiianOrder = new HawaiianPizza(selectedSize, selectedCrust, selectedToppings);
        //confirm("Please confirm your order: \n" + hawaiianOrder.details());
        $("ol#list").append("<li>" + hawaiianOrder.flavour + "</li>");
        $("ol#list").append("<li> Total:" + totalPizzaPriceHawaiian() + "</li>");

    })

    //information on bbq chicken pizza to be diplayed once chosen
    $("#size").change(function () {
        selectedSize = $("#size:selected").val();
        $("ol#list").append("<li>" + selectedSize + "</li>");
        $("#size").val(selectedSize);


    $("#crust").change(function () {
        selectedCrust = $("#crust option:selected").val();
        $("ol#list").append("<li>" + selectedCrust + "</li>");
        $("#crust").val(selectedCrust);
    })
    $("#toppings").change(function () {
        selectedToppings = $("#toppings option:selected").val();
        $("ol#list").append("<li>" + selectedToppings + "</li>");
        $("#toppings").val(selectedToppings);
        var bbqOrder = new BbqChicken(selectedSize, selectedCrust, selectedToppings);
        //confirm("Please confirm your order: \n" + bbqOrder.details());
        $("ol#list").append("<li>" + bbqOrder.name + "</li>");
        $("ol#list").append("<li> Total:" + totalPizzaPriceBbq() + "</li>");

    })
    //information on pepperoni pizza to be displayed
    $("#size").change(function () {
        selectedSize = $("#size option:selected").val();
        $("ol#list").append("<li>" + selectedSize + "</li>");
        $("#size").val(selectedSize);
    })

    $("#crust").change(function () {
        selectedCrust = $("#crust option:selected").val();
        $("ol#list").append("<li>" + selectedCrust + "</li>");
        $("#crust").val(selectedCrust);
    })
    $("#toppings").change(function () {
        selectedToppings = $("#toppings option:selected").val();
        $("ol#list").append("<li>" + selectedToppings + "</li>");
        $("#toppings").val(selectedToppings);
        var pepperoniOrder = new Pepperoni(selectedSize, selectedCrust, selectedToppings);
        //confirm("Please confirm your order: \n" + pepperoniOrder.details());
        $("ol#list").append("<li>" + pepperoniOrder.name + "</li>");
        $("ol#list").append("<li> Total:" + totalPizzaPricePepperoni() + "</li>");
    })
    //information on ChickenTikka PIZZA To be displayed
    $("#size").change(function () {
        selectedSize = $("#size option:selected").val();
        $("ol#list").append("<li>" + selectedSize + "</li>");
        $("#size").val(selectedSize);
    })

    $("#crust").change(function () {
        selectedCrust = $("#crust option:selected").val();
        $("ol#list").append("<li>" + selectedCrust + "</li>");
        $("#crust").val(selectedCrust);
    })
    $("#toppings").change(function () {
        selectedToppings = $("#toppings option:selected").val();
        $("ol#list").append("<li>" + selectedToppings + "</li>");
        $("#toppings").val(selectedToppings);
        var ChickentikkaOrder = new Chickentikka(selectedSize, selectedCrust, selectedToppings);
        //confirm("Please confirm your order: \n" + ChickentikkaOrder.details());
        $("ol#list").append("<li>" + ChickentikkaOrder.name + "</li>");
        $("ol#list").append("<li> Total:" + totalPizzaPriceChickentikka() + "</li>");
    })


    //check out form
    $("#go").click(function (event) {
        event.preventDefault();
        var blanks = ["name", "phone_number", "location"];
        var input = [];
        blanks.forEach(function (blank) {
            input.push($("#" + blank).val());
        });
        alert("Your order will be delivered at " + input[2] + "");
        $("#go")[2].reset();
    });

});

//$("#checkout").click(function () {
  //  $("#location").change(function () {
    //    var location = $("#location option:selected").text();
    //})
    //var email = $("#inputEmail").val();

    //function validEmail(email) {
      //  var y = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // return y.test(email);
    //}
    //if (validEmail(email)) {
     //   alert("Order Approved! Enter MPESA pin on the prompt on your phone to confirm payment");
     //   alert("loading.................");
     //   alert("Payment Successful! Your Pizza is on the way!");
    //} else {
      //  alert(email + " is not a valid email. Try again");
   // }
    //$("#submit-reset").click(function () {
    //    $("#location")[0].reset()
    //})

//})
//contact us form
//$("#submit-feedback").click(function () {
    //var name = $("input#name").val();
   // var email = $("input#email").val();
   // var message = $("input#message").val();
    //validate email
    //function validEmail(email) {
      //  var y = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,//3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return y.test(email);
    //}
    //if (validEmail(email)) {
     //   alert("We have received your message " + " " + name + " " + ".Thank you for reaching out to us");
    //} else {
    //    alert(email + " is not a valid email. Try again");
    //}


    //$("#contact-form")[0].reset();
});
