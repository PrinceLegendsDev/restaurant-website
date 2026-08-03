

import { menuItems } from "./menuData.js";


export function addToCart() {

    const cartButtons = document.querySelectorAll(".cart-btn");

    if (!cartButtons.length) return;


    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const itemId = Number(button.dataset.id);

            const selectedItem = menuItems.find(item => item.id === itemId);


            let cart = JSON.parse(localStorage.getItem("cart")) || [];


            const existingItem = cart.find(item => item.id === itemId);


            if (existingItem) {

                existingItem.quantity += 1;

            } else {

                cart.push({
                    ...selectedItem,
                    quantity: 1
                });

            }


            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartCount();


            console.log(cart);

        });

    });

}

export function updateCartCount() {

    const badge = document.querySelector(".cart-count");

    if (!badge) return;

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((sum, item) => {

        return sum + item.quantity;

    }, 0);

    badge.textContent = totalItems;

}