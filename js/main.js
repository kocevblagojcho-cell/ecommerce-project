// === YOUR CART ===

// Globalen vkupen iznos
let totalAmount = 0;

// === Proizvodi ===

const PRODUCT1_NAME = "Nike Football Shoes";
const PRODUCT1_PRICE = 187.99;

const PRODUCT2_NAME = "Nike Phantom GX 2 Elite";
const PRODUCT2_PRICE = 178.95;

let PRODUCT1_QTY = 1;
let PRODUCT2_QTY = 1;

const VAT_RATE = 0.2; 
const CURRENCY = "USD";
const USD_PER_EUR = 1.16;

const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

// === ALL PRODUCTS (Inventory) ===

const allProducts = [
    { name: "Nike Football Shoes", price: 187.99, qty: 12 },
    { name: "Nike Phantom GX 2 Elite", price: 178.95, qty: 8 },
    { name: "Adidas Predator Elite", price: 199.99, qty: 5 },
    { name: "Puma Future Ultimate", price: 165.50, qty: 15 },
    { name: "Mizuno Alpha Japan", price: 210.00, qty: 3 }
];

console.log(allProducts);
function calculateTotalInventoryValue() {

    let totalValue = 0;

    for (let product of allProducts) {
        totalValue += product.price * product.qty;
    }

    console.log("Total inventory value: " 
        + totalValue.toFixed(2) 
        + " " 
        + CURRENCY);
}

calculateTotalInventoryValue();
// === LOW STOCK PRODUCTS ===
const lowStock = allProducts.filter(function(product) {
    return product.qty < 10;
});

console.log("Products with low stock (<10):");
console.log(lowStock);

function findProductByName(list, searchName) {

    let normalizedSearch = searchName.trim().toLowerCase();

    for (let product of list) {
        if (product.name.toLowerCase() === normalizedSearch) {
            return product;
        }
    }

    return null;
}
console.log(findProductByName(allProducts, "nike football shoes"));
console.log(findProductByName(allProducts, "adidas predator elite"));
console.log(findProductByName(allProducts, "unknown product"));
// === TYPEOF Primeri ===

console.log(typeof PRODUCT1_NAME);  
console.log(typeof PRODUCT1_PRICE); 
console.log(typeof VAT_RATE);       

// === ADD TO TOTAL ====

function addToTotal(price) {
    totalAmount += price;
    console.log("Current total: $" + totalAmount.toFixed(2));
}

// === Kuponi ===

function normalizeCoupon(code) {
    let trimmed = code.trim();
    let upper = trimmed.toUpperCase();
    return upper;
}

function isValidCoupon(code) {
    return VALID_COUPONS.includes(code);
}

function validateAndNotify() {
    let inputCode = document.getElementById("promo-input").value;
    let normalizedCode = normalizeCoupon(inputCode);

    if (!isValidCoupon(normalizedCode)) {
        alert("The code you entered is not valid.");
        return;
    }

    if (normalizedCode === "SAVE10") {
        alert("The code is valid. 10% discount applied!");
    } 
    else if (normalizedCode === "SAVE15") {
        alert("The code is valid. 15% discount applied!");
    } 
    else if (normalizedCode === "FREESHIP") {
        alert("The code is valid. Free shipping applied!");
    }
}

// === LOGIN ===

function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "admin" && password === "admin") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid email or password!");
        return false;
    }
}

// === ADD TO CART BUTTONS ===

let buttons = document.querySelectorAll(".product-card button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        let priceText = this.parentElement
            .querySelector(".price")
            .textContent;

        let price = parseFloat(priceText.replace("$","")); 
        
        addToTotal(price);
    });
});

// ===CART BUTTON ===

document.getElementById("cart").addEventListener("click", function() {

    let vatAmount = totalAmount * VAT_RATE;
    let finalAmount = totalAmount + vatAmount;

    alert(
        "Subtotal: $" + totalAmount.toFixed(2) +
        "\nVAT (20%): $" + vatAmount.toFixed(2) +
        "\nFinal Total: $" + finalAmount.toFixed(2)
    );
});

// === MANUAL FUNCTION CALLS ===

addToTotal(PRODUCT1_PRICE);
addToTotal(PRODUCT2_PRICE);
addToTotal(50);

console.log("Manual test total: $" + totalAmount.toFixed(2));
 
