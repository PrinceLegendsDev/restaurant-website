import { loadComponent } from "./component.js";
import { navMenu } from "./navigation.js";


async function startApp() {

    await loadComponent(
        "header",
        "components/nav.html"
    );

    await loadComponent(
        "footer",
        "components/footer.html"
    );

    navMenu()
}


startApp()