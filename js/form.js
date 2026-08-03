
export function formSubmission() {

    console.log("formSubmission function called");

    const form = document.querySelector(".contact-form");

    console.log(form);

    if (!form) return;

    form.addEventListener("submit", (e) => {

        console.log("Form submitted");

        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        const whatsappNumber = "260775544529";

        const whatsappMessage = 
`Hello Good Vibes Restaurant 👋

My Name Is: ${name}
Email: ${email}

I would like to make an enquiry:
${message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        console.log(url);

        form.reset();

        window.location.href = url;

    });
}