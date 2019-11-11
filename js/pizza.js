$(document).ready(function () {
    $(function () {
        $('.summary').hide();
        $('.clientdata').hide();
        $("#checkout").click(function Pizza(flavour, size, crust, toppings,drink,number,summary) {
            this.flavour = $("#flavour option:selected").val();
            this.size = $("#size option:selected").val();
            this.crust = $("#crust option: selected").val();
            this.toppings = $("#toppings option:selected").val();
            this.drink = $("#drink option:selected").val();
            this.number = $("#number option:selected").val();
            this.summary = $("flavour <br> + size <br> + crust <br> + toppings <br> + drink % drink <br> + number");
        }
    }
}


<div class="contacts-container">
            <div class="row">
                <div class = col-md-3>
                    <div class="card">
                        <div class="card-title">
                            <hi>Contact us through..</hi>
                        </div>
                        <div class="card-body">
                                <div class="socials">
                                        <a href=""><span class="fab fa-facebook icon_facebook"></span></a>
                                        <a href=""><span class="fab fa-twitter icon_twitter"></span></a>
                                        <a href=""><span class="fab fa-google-plus icon_googlep"></span></a>
                                        <a href=""><span class="fab fa-linkedin icon_linkedin"></span></a>
                                    </div>
                        
                        </div>
                        <div class="card-footer">
                                <h1 class="text-white text-center"> Call Us </h1>
                                <p class="text-center">+254 0001 432</p> 
                        </div>
                    </div>
                </div>
                
                <form>
                    <div class="email-info">
                        <div class="form-group fill-all-form">
                            <input type="email" class="form-control bg-transparent email" id="email" placeholder="Email"
                                required="">
                        </div>
                    </div>
                </form>
            </div>

        </div>