
/* =================================
   1. WELCOME MESSAGE
================================= */

console.log("Welcome to Grand Royal Hotel!");

/* =================================
   2. VIEW FOOD AND DRINK MENUS
================================= */

const menuSections = [
    {
        id: "drinks",
        buttonText: "View Drinks Menu"
    },
    {
        id: "meals",
        buttonText: "View Meal Menu"
    },
    {
        id: "fast-food",
        buttonText: "View Fast Food Menu"
    }
];

menuSections.forEach(function (item) {
    const section = document.getElementById(item.id);

    const button = section.querySelector("button");

    button.addEventListener("click", function () {
        const items = section.querySelectorAll("li");

        let message = item.buttonText + "\n\n";

        items.forEach(function (food) {
            message += food.textContent + "\n";
        });

        alert(message);
    });
});

/* =================================
   3. ADD ITEMS TO AN ORDER
================================= */

// Create an order area on the website.

const orderSection = document.createElement("section");

orderSection.id = "my-order";

orderSection.innerHTML = `
    <h2>My Order</h2>
    <p>Choose food or drinks from our menu.</p>
    <ul id="order-list"></ul>
    <h3>Total: <span id="order-total">0</span> Birr</h3>
    <button id="clear-order" type="button">
        Clear Order
    </button>
`;

document.getElementById("menu").after(orderSection);

const orderList = document.getElementById("order-list");
const orderTotal = document.getElementById("order-total");

let total = 0;

// Add an order button beside every menu item.

document.querySelectorAll(
    "#drinks li, #meals li, #fast-food li"
).forEach(function (food) {

    const text = food.textContent.trim();

    const match = text.match(/-\s*([\d,]+)\s*Birr/i);

    if (!match) {
        return;
    }

    const price = Number(match[1].replace(/,/g, ""));

    const addButton = document.createElement("button");

    addButton.type = "button";
    addButton.textContent = "Add";
    addButton.style.marginLeft = "10px";

    food.appendChild(addButton);

    addButton.addEventListener("click", function () {

        // Add the selected food to the order.

        const orderItem = document.createElement("li");

        orderItem.textContent = text;

        orderList.appendChild(orderItem);

        total += price;

        orderTotal.textContent = total.toLocaleString();

        alert(text + " added to your order!");
    });
});

/* =================================
   4. CLEAR THE ORDER
================================= */

document.getElementById("clear-order")
    .addEventListener("click", function () {

        orderList.innerHTML = "";

        total = 0;

        orderTotal.textContent = "0";

        alert("Your order has been cleared.");
    });

/* =================================
   5. BOOK A TABLE
================================= */

const contactSection = document.getElementById("contact");

const buttons = contactSection.querySelectorAll("button");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name = prompt("Please enter your name:");

        if (name === null || name.trim() === "") {
            alert("Booking cancelled. Please enter your name.");
            return;
        }

        const date = prompt(
            "Enter your preferred booking date (YYYY-MM-DD):"
        );

        if (date === null || date.trim() === "") {
            alert("Please enter a booking date.");
            return;
        }

        const guests = prompt(
            "How many people will come?"
        );

        if (
            guests === null ||
            !Number.isInteger(Number(guests)) ||
            Number(guests) < 1
        ) {
            alert("Please enter a valid number of guests.");
            return;
        }

        alert(
            "Thank you, " + name + "!\n\n" +
            "Your booking request:\n" +
            "Date: " + date + "\n" +
            "Guests: " + guests + "\n\n" +
            "This is a demo only. Your booking has not " +
            "been sent to the hotel."
        );
    });
});

/* =================================
   6. UPDATE THE FOOTER YEAR
================================= */

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "&copy; " + new Date().getFullYear() +
        " Grand Royal Hotel.";
}