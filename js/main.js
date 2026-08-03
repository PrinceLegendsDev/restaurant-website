import { loadComponent } from "./component.js";
import { navMenu, toggleTheme } from "./navigation.js";
import { renderMenu } from "./menu.js"
import { formSubmission } from "./form.js"
import { addToCart, updateCartCount } from "./cart.js";
import { displayCart, cartControls, calculateTotal } from "./cartRender.js";
import { checkout } from "./checkout.js";

console.log("main.js loaded");

async function startApp() {

    await loadComponent(
        "header",
        "components/nav.html"
    );

    await loadComponent(
        "footer",
        "components/footer.html"
    );

    navMenu();

    renderMenu();

    addToCart();

    displayCart();

    cartControls();

    calculateTotal();

    checkout();

    updateCartCount();

    toggleTheme();

    formSubmission();
   

}


startApp()