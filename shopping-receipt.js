
// ==========================================
// JAVASCRIPT SHOPPING RECEIPT CALCULATOR
// ==========================================

// PART 1: SHOPPING DATA

const riceName = "Rice";
const ricePrice = 2500;
const riceQuantity = 2;

const sugarName = "Sugar";
const sugarPrice = 1800;
const sugarQuantity = 3;

const oilName = "Cooking Oil";
const oilPrice = 6500;
const oilQuantity = 1;

const breadName = "Bread";
const breadPrice = 1200;
const breadQuantity = 2;

const milkName = "Milk";
const milkPrice = 1500;
const milkQuantity = 4;

// Calculate the total price of each product.
const riceTotal = ricePrice * riceQuantity;
const sugarTotal = sugarPrice * sugarQuantity;
const oilTotal = oilPrice * oilQuantity;
const breadTotal = breadPrice * breadQuantity;
const milkTotal = milkPrice * milkQuantity;

// Calculate the subtotal of all products.
const subtotal =
    riceTotal + sugarTotal + oilTotal + breadTotal + milkTotal;

// PART 2: DISCOUNT AND VAT

const discountRate = 0.10;
const vatRate = 0.18;

// Apply a 10% discount if the subtotal is at least 20,000 RWF.
const discount = subtotal >= 20000
    ? subtotal * discountRate
    : 0;

const amountAfterDiscount = subtotal - discount;

// PART 3: DATA TYPES AND TYPE CONVERSION

const customerName = "aline UWASE";
const customerAge = "22";
const amountPaid = "30000";
const isMember = true;

// A string stores text, a number represents a numeric value,
// and a boolean stores true or false.

console.log("----- DATA TYPES -----");

console.log("Age before conversion:", typeof customerAge);
console.log("Payment before conversion:", typeof amountPaid);

// Convert strings to numbers before calculating.
const ageNumber = Number(customerAge);
const paymentNumber = Number(amountPaid);

console.log("Age after conversion:", typeof ageNumber);
console.log("Payment after conversion:", typeof paymentNumber);
console.log("Membership data type:", typeof isMember);

// Format the customer's name as Aline Uwase.
const formattedName = customerName
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Generate the customer's initials as A.U.
const initials = formattedName
    .split(" ")
    .map(word => word.charAt(0))
    .join(".") + ".";

// Use comparison and logical operators.
const eligibleForDiscount = subtotal >= 20000;
const eligibleForMemberDiscount = isMember && ageNumber >= 18;

// BONUS: Apply an additional 5% discount for active members.
// It is applied after the standard discount and before VAT.
const memberDiscountRate = 0.05;

const memberDiscount = eligibleForMemberDiscount
    ? amountAfterDiscount * memberDiscountRate
    : 0;

const taxableAmount = amountAfterDiscount - memberDiscount;

// Calculate VAT on the amount remaining after discounts.
const vatAmount = taxableAmount * vatRate;

// Calculate the final amount the customer must pay.
const finalTotal = taxableAmount + vatAmount;

// Calculate change or the remaining balance.
const balance = paymentNumber - finalTotal;

// Format numbers with commas and two decimal places if necessary.
function formatRwf(amount) {
    return amount.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

// PART 4: PRINT THE RECEIPT

const line = "=".repeat(80);
const separator = "-".repeat(80);

console.log("\n" + line);
console.log("SMART SHOP RECEIPT");
console.log(line);

console.log(`Customer: ${formattedName}`);
console.log(`Initials: ${initials}`);
console.log(`Age: ${ageNumber}`);
console.log(`Membership: ${isMember ? "Active" : "Inactive"}`);

console.log(separator);
console.log(
    `${"Item".padEnd(25)}${"Qty".padEnd(10)}${"Total (RWF)"}`
);
console.log(separator);

console.log(
    `${riceName.padEnd(25)}${String(riceQuantity).padEnd(10)}${formatRwf(riceTotal)}`
);
console.log(
    `${sugarName.padEnd(25)}${String(sugarQuantity).padEnd(10)}${formatRwf(sugarTotal)}`
);
console.log(
    `${oilName.padEnd(25)}${String(oilQuantity).padEnd(10)}${formatRwf(oilTotal)}`
);
console.log(
    `${breadName.padEnd(25)}${String(breadQuantity).padEnd(10)}${formatRwf(breadTotal)}`
);
console.log(
    `${milkName.padEnd(25)}${String(milkQuantity).padEnd(10)}${formatRwf(milkTotal)}`
);

console.log(separator);
console.log(`Subtotal: ${formatRwf(subtotal)} RWF`);
console.log(`Discount (10%): ${formatRwf(discount)} RWF`);
console.log(`Member Discount (5%): ${formatRwf(memberDiscount)} RWF`);
console.log(`VAT (18%): ${formatRwf(vatAmount)} RWF`);
console.log(separator);

console.log(`FINAL TOTAL: ${formatRwf(finalTotal)} RWF`);
console.log(`Amount Paid: ${formatRwf(paymentNumber)} RWF`);
console.log(separator);

// BONUS: Give a clear payment status message.
if (balance >= 0) {
    console.log(`Change: ${formatRwf(balance)} RWF`);
    console.log("Payment Status: Payment complete.");
} else {
    console.log(`Balance Due: ${formatRwf(Math.abs(balance))} RWF`);
    console.log("Payment Status: Insufficient payment.");
}

console.log(line);
console.log("Thank you for shopping!");
console.log(line);






















