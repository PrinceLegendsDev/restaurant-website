
console.log("Navigation initialized");

export function navMenu() {

    const menu = document.querySelector("#nav-menu");
    const closeMenu = document.querySelector(".close-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const overlay = document.querySelector(".overlay");


    console.log(menu);
    console.log(closeMenu);
    console.log(menuBtn);


    menuBtn.addEventListener("click", () => {

        menu.classList.add("active");
        overlay.classList.add("active");

        console.log("Menu button clicked");

    });


    closeMenu.addEventListener("click", () => {

        menu.classList.remove("active");
        overlay.classList.remove("active");

        console.log("Close button clicked");

    });

     overlay.addEventListener("click",()=>{

        menu.classList.remove("active");
        overlay.classList.remove("active");

});

}


export function toggleTheme() {

    const themeBtn = document.querySelector(".theme-btn");

    if (!themeBtn) return;


    const body = document.body;


    const savedTheme = localStorage.getItem("theme");


    if (savedTheme) {
        body.classList.add(savedTheme);
    }


    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light-mode");


        if (body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light-mode");

        } else {

            localStorage.removeItem("theme");

        }

    });

}