/* =========================================================
   EMBER & SPOON
   Shared Website JavaScript
   ========================================================= */


/* =========================================================
   1. STICKY NAVBAR SCROLL EFFECT
   ========================================================= */

const siteHeader = document.querySelector("#site-header");


if (siteHeader) {

    const handleHeaderScroll = () => {

        if (window.scrollY > 30) {

            siteHeader.classList.add("is-scrolled");

        } else {

            siteHeader.classList.remove("is-scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );


    /*
        Run once when the page loads so the navbar has
        the correct state immediately.
    */

    handleHeaderScroll();
}


/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

const navbarToggle =
    document.querySelector("#navbar-toggle");

const mainNavigation =
    document.querySelector("#main-navigation");


if (navbarToggle && mainNavigation) {

    navbarToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navbarToggle.classList.toggle("is-open");

            mainNavigation.classList.toggle(
                "is-open",
                isOpen
            );


            navbarToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            navbarToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        }
    );


    /*
        Close the mobile menu after selecting a page.
    */

    const navigationLinks =
        mainNavigation.querySelectorAll(
            ".navbar-link"
        );


    navigationLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mainNavigation.classList.remove(
                    "is-open"
                );

                navbarToggle.classList.remove(
                    "is-open"
                );

                navbarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navbarToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        );

    });


    /*
        Close the mobile navigation with the Escape key.
        This improves keyboard accessibility.
    */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mainNavigation.classList.contains("is-open")
            ) {

                mainNavigation.classList.remove(
                    "is-open"
                );

                navbarToggle.classList.remove(
                    "is-open"
                );

                navbarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navbarToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

        }
    );
}
/* =========================================================
   3. FOOTER CURRENT YEAR
   ========================================================= */

const currentYear =
    document.querySelector("#current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}