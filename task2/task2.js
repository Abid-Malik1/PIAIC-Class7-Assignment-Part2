var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItems = function (name, price, quantity) {
        var newItem = { name: name, price: price, quantity: quantity };
        this.items.push(newItem);
        console.log("Added ".concat(quantity, " ").concat(name, "(s) to the cart."));
        this.printCart();
    };
    ShoppingCart.prototype.removeItems = function (index) {
        if (index >= 0 && index < this.items.length) {
            var removedItem = this.items.splice(index, 1)[0];
            console.log("Removed ".concat(removedItem.quantity, " ").concat(removedItem.name, "(s) from the cart."));
            this.printCart();
        }
        else {
            console.log('Invalid index. Item not removed.');
        }
    };
    ShoppingCart.prototype.updateQuantity = function (index, newQuantity) {
        if (index >= 0 && index < this.items.length && newQuantity >= 0) {
            var updatedItem = this.items[index];
            var oldQuantity = updatedItem.quantity;
            updatedItem.quantity = newQuantity;
            console.log("Updated ".concat(updatedItem.name, "(s) quantity from ").concat(oldQuantity, " to ").concat(newQuantity, "."));
            this.printCart();
        }
        else {
            console.log('Invalid index or quantity. Quantity not updated.');
        }
    };
    ShoppingCart.prototype.printCart = function () {
        console.log('Cart Contents:');
        this.items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.name, " - Quantity: ").concat(item.quantity, " - Price: Rs.").concat(item.price));
        });
        console.log('-----------------------------------');
    };
    return ShoppingCart;
}());
// Test the ShoppingCart class
var cart = new ShoppingCart();
cart.addItems('Apple', 0.5, 3);
cart.addItems('Banana', 0.3, 5);
cart.addItems('Orange', 0.4, 2);
cart.removeItems(1);
cart.updateQuantity(0, 10);
