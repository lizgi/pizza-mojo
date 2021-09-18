/*business logic*/

function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};
var sizePrice = [1200, 900, 600]
var deliverPrices = [0, 200];
//user interface logic
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTop = $('#top').val();

        var pizzaQty = parseInt($('#qty').val());

        var pizzaPick = parseInt($('#pick').val());

        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];

        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
        alert("your bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPick===2){
                prompt("Enter where you want your pizza to be delivered");
                alert("Your order has been received and it will be delivered. Continue to see your order details");
                alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal());
            }
        }

    });
    /*form info*/
    $('form#contactForm').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var pass = $('#email').val();
        var mess = $('#mess').val();
        alert("Hi " + name + " response well received.We will ge back to you,,Thankyou!!");
    });


});
