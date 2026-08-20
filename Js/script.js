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
/* =========================================================
   4. CATEGORY BUTTON INTERACTION
   ========================================================= */

const categoryButtons =
    document.querySelectorAll(".category-button");


if (categoryButtons.length > 0) {

    categoryButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                categoryButtons.forEach((item) => {

                    item.classList.remove("active");

                    item.setAttribute(
                        "aria-selected",
                        "false"
                    );

                });


                button.classList.add("active");

                button.setAttribute(
                    "aria-selected",
                    "true"
                );

            }
        );

    });

}
/* =========================================================
   5. WEEKEND SPECIAL COUNTDOWN
   ========================================================= */

const countdownContainer =
    document.querySelector("#special-countdown");


if (countdownContainer) {

    const daysElement =
        document.querySelector("#countdown-days");

    const hoursElement =
        document.querySelector("#countdown-hours");

    const minutesElement =
        document.querySelector("#countdown-minutes");

    const secondsElement =
        document.querySelector("#countdown-seconds");


    /*
        Create a target date for the upcoming weekend.

        We use the visitor's local time so the countdown
        behaves consistently on their device.
    */

    const getNextWeekend = () => {

        const now = new Date();

        const target = new Date(now);

        const currentDay = now.getDay();

        /*
            Saturday = 6

            We count down toward Saturday at 11:59 PM.
        */

        let daysUntilSaturday =
            (6 - currentDay + 7) % 7;


        /*
            If it is already Saturday after the target time,
            move the countdown to the following Saturday.
        */

        const targetHour = 23;
        const targetMinute = 59;
        const targetSecond = 59;

        target.setHours(
            targetHour,
            targetMinute,
            targetSecond,
            999
        );


        if (
            daysUntilSaturday === 0 &&
            now >= target
        ) {

            daysUntilSaturday = 7;

        }


        target.setDate(
            now.getDate() + daysUntilSaturday
        );


        return target;
    };


    const countdownTarget =
        getNextWeekend();


    const updateCountdown = () => {

        const now = new Date();

        const difference =
            countdownTarget.getTime()
            - now.getTime();


        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }


        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const days =
            Math.floor(
                totalSeconds / 86400
            );


        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const seconds =
            totalSeconds % 60;


        daysElement.textContent =
            String(days).padStart(2, "0");


        hoursElement.textContent =
            String(hours).padStart(2, "0");


        minutesElement.textContent =
            String(minutes).padStart(2, "0");


        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    };


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );

}