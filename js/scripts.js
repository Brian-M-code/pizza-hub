$(document).ready(function () {
    $(function () {
        $('.summary').hide();
        $('.clientdata').hide();

        // input from order form
        $("#checkout").click(function () {
            let flavour = $("#flavour option:selected").val();
            let size = $("#size option:selected").val();
            let crust = $("#crust option: selected").val();
            let toppings = $("#toppings option:selected").val();
            let drink = $("#drink option:selected").val();
            let number = $("#number option:selected").val();

            let order = (f, s, c, t, d, n, total) => {
                return { f, s, c, t, d, n, total };
            };

            let price, totalPrice;
            switch (flavour) {
                case flavour = "hawaiian":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                    }
                    break;
                case flavour = "bbq":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                    }
                    break;
                case flavour = "peperoni":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                    }
                    break;
                case flavour = "chickentikka":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                    }
                    break;
                case flavour = "vegtikka":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice= (price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice= (price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                    }
                    break;
                case flavour = "mushroom":
                    switch (size) {
                        case size = "small":
                            price = 500;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice= (price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "medium":
                            price = 750;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;

                        case size = "large":
                            price = 1000;
                            if (drink === "coke") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "orange") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "pineapple") {
                                totalPrice = (price * number) + 170;
                            }
                            else if (drink === "monster") {
                                totalPrice(price * number) + 200;
                            }
                            else {
                                totalPrice = (price * number);
                            }
                            break;
                    }
            }
            let newOrder = order(flavour, size, crust, topping, drink, number, totalPrice);
            alert(newOrder);
        }




