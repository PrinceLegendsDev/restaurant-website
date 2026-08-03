

export function checkout() {

    const checkoutBtn = document.querySelector(".checkout-btn");

    if (!checkoutBtn) return;


    checkoutBtn.addEventListener("click", () => {


        const cart = JSON.parse(localStorage.getItem("cart")) || [];


        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        const whatsappNumber = "260775544529";


        let message = 
`Hello Good Vibes Restaurant 👋

I would like to place an order:

`;


        let total = 0;


        cart.forEach(item => {

            const itemTotal = item.price * item.quantity;

            total += itemTotal;


            message += 
`${item.quantity} x ${item.name} - K${itemTotal}
`;

        });


        message += 
`
Total: K${total}

Thank you.`;



        const url = 
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(url, "_blank");


    });

}