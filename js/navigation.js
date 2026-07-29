
console.log("Navigation initialized");

export function navMenu() {

    const menu = document.querySelector("#nav-menu");
    const closeMenu = document.querySelector(".close-btn");
    const menuBtn = document.querySelector(".menu-btn");


    console.log(menu);
    console.log(closeMenu);
    console.log(menuBtn);


    menuBtn.addEventListener("click", () => {

        menu.classList.add("active");

        console.log("Menu button clicked");

    });


    closeMenu.addEventListener("click", () => {

        menu.classList.remove("active");

        console.log("Close button clicked");

    });

}