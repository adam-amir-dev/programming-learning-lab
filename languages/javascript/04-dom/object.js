
const cart = {
    customer: "Amir",
    items: [
        { name: "Laptop", price: 500000, quantity: 1 },
        { name: "Mouse", price: 15000, quantity: 2 },
        { name: "Keyboard", price: 25000, quantity: 1 }
    ]
};

// 1. Calculate total cost
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < cart.items.length; i++) {
        total = total + (cart.items[i].price * cart.items[i].quantity);
    }

    return total;
}

// 2. Display all products
function display() {
    cart.items.forEach((item) => {
        console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
    });
}

// 3. Find the most expensive product
function findExpensive() {
    let expensive = cart.items[0];

    for (let i = 1; i < cart.items.length; i++) {
        if (expensive.price < cart.items[i].price) {
            expensive = cart.items[i];
        }
    }

    console.log("Most expensive product:", expensive.name);
    console.log("Price:", expensive.price);
}

// 4. Add another product
cart.items.push({
    name: "LCD Monitor",
    price: 925000,
    quantity: 1
});

// Additional object properties
cart.age = 20;
cart.discount = "15%";

// 5. Convert cart into JSON
const newCart = JSON.stringify(cart);

// 6. Convert JSON back into an object
const anotherCart = JSON.parse(newCart);

// Execute functions
console.log("Customer:", cart.customer);
console.log("Total cost:", calculateTotal());

display();

findExpensive();

console.log("Updated cart:", cart);
console.log("JSON data:", newCart);
console.log("Converted object:", anotherCart);
