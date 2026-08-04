import { updateCartCount } from "./cart.js";

export function displayCart() {

    const cartContainer = document.querySelector(".cart-container");

    if (!cartContainer) return;


    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        return;
    }


    cartContainer.innerHTML = "";


    cart.forEach(item => {

        const cartItem = `

<article class="cart-item">

    <img src="${item.image}" alt="${item.name}">


    <div class="cart-details">

        <h3>${item.name}</h3>

        <p>K${item.price}</p>


        <div class="quantity-controls">

            <button class="minus-btn" data-id="${item.id}">
                -
            </button>


            <span>
                ${item.quantity}
            </span>


            <button class="plus-btn" data-id="${item.id}">
                +
            </button>

        </div>


        <button class="remove-btn" data-id="${item.id}">
            Remove
        </button>


    </div>

</article>

`;


        cartContainer.innerHTML += cartItem;

    });

    calculateTotal();

}

export function cartControls() {

    const cartContainer = document.querySelector(".cart-container");

    if (!cartContainer) return;


    cartContainer.addEventListener("click", (e) => {


        const id = Number(e.target.dataset.id);


        let cart = JSON.parse(localStorage.getItem("cart")) || [];


        if (e.target.classList.contains("plus-btn")) {


            const item = cart.find(item => item.id === id);

            item.quantity++;

        }


        if (e.target.classList.contains("minus-btn")) {


            const item = cart.find(item => item.id === id);


            if(item.quantity > 1){

                item.quantity--;

            }else  {

                cart = cart.filter(item => item.id !==id );
            }

        }


        if (e.target.classList.contains("remove-btn")) {


            cart = cart.filter(item => item.id !== id);

        }


        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        displayCart();

        updateCartCount();

    });

}

export function calculateTotal() {

    const totalElement = document.querySelector("#cart-total");

    if (!totalElement) return;


    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    const total = cart.reduce((sum, item) => {

        return sum + (item.price * item.quantity);

    }, 0);


    totalElement.textContent = total;

}