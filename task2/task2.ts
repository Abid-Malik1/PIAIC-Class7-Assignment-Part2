class ShoppingCart {
    items: { name: string; price: number; quantity: number }[] = [];
  
    addItems(name: string, price: number, quantity: number) {
      let newItem = { name, price, quantity };
      this.items.push(newItem);
      console.log(`Added ${quantity} ${name}(s) to the cart.`);
      this.printCart();
    }
  
    removeItems(index: number) {
      if (index >= 0 && index < this.items.length) {
        let removedItem = this.items.splice(index, 1)[0];
        console.log(`Removed ${removedItem.quantity} ${removedItem.name}(s) from the cart.`);
        this.printCart();
      } else {
        console.log('Invalid index. Item not removed.');
      }
    }
  
    updateQuantity(index: number, newQuantity: number) {
      if (index >= 0 && index < this.items.length && newQuantity >= 0) {
        let updatedItem = this.items[index];
        let oldQuantity = updatedItem.quantity;
        updatedItem.quantity = newQuantity;
        console.log(`Updated ${updatedItem.name}(s) quantity from ${oldQuantity} to ${newQuantity}.`);
        this.printCart();
      } else {
        console.log('Invalid index or quantity. Quantity not updated.');
      }
    }
  
    printCart() {
      console.log('Cart Contents:');
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: Rs.${item.price}`);
      });
      console.log('-----------------------------------');
    }
  }
  
  // Test the ShoppingCart class
  let cart = new ShoppingCart();
  
  cart.addItems('Apple', 0.5, 3);
  cart.addItems('Banana', 0.3, 5);
  cart.addItems('Orange', 0.4, 2);
  
  cart.removeItems(1);
  
  cart.updateQuantity(0, 10);
  