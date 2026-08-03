
import { menuItems } from "./menuData.js"


export function renderMenu() {

    const menuGrid = document.querySelector(".menu-grid");

    if (!menuGrid) return;

    menuItems.forEach(item => {

        const card = `
            <article class="menu-card card">

                <img src="${item.image}" alt="${item.name}">

                <div class="menu-content">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <div class="menu-footer">

                        <span>K${item.price}</span>

                        <button class="cart-btn btn-primary"
                        data-id="${item.id}">

                            Add To Cart
                            
                        </button>

                    </div>

                </div>

            </article>
        `;

        menuGrid.innerHTML += card;

    });

}