/* =========================================================
   EMBER & SPOON
   Shared Website JavaScript
   ========================================================= */

   /* =========================================================
   MENU DATA
   ========================================================= */

const dishes = [

    {
        id: "dish-01",
        name: "Fire-Roasted Signature",
        category: "main-course",
        price: 28,
        rating: 4.9,
        description:
            "Flame-seared premium cuts finished with our signature ember glaze and seasonal herbs.",
        image: "images/dish-01.webp",
        ingredients: [
            "Premium grilled beef",
            "Ember glaze",
            "Seasonal herbs",
            "Roasted vegetables"
        ],
        calories: 640,
        dietaryTags: [],
        spiceLevel: "medium",
        popularity: 98
    },


    {
        id: "dish-02",
        name: "Truffle Ember Pasta",
        category: "pasta",
        price: 22,
        rating: 4.8,
        description:
            "Silky handmade pasta tossed with black truffle, aged parmesan, and roasted garlic cream.",
        image: "images/dish-02.webp",
        ingredients: [
            "Handmade pasta",
            "Black truffle",
            "Aged parmesan",
            "Roasted garlic"
        ],
        calories: 520,
        dietaryTags: [
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 94
    },


    {
        id: "dish-03",
        name: "Ember Signature Burger",
        category: "burgers",
        price: 19,
        rating: 4.9,
        description:
            "Charred premium beef, smoked cheddar, caramelized onions, and our house ember sauce.",
        image: "images/dish-03.webp",
        ingredients: [
            "Premium beef",
            "Smoked cheddar",
            "Caramelized onions",
            "Ember sauce"
        ],
        calories: 710,
        dietaryTags: [],
        spiceLevel: "medium",
        popularity: 99
    },


    {
        id: "dish-04",
        name: "Charred Garden Crostini",
        category: "starters",
        price: 12,
        rating: 4.7,
        description:
            "Grilled sourdough topped with roasted vegetables, whipped herb cheese, and aged balsamic.",
        image: "images/dish-01.webp",
        ingredients: [
            "Sourdough",
            "Roasted vegetables",
            "Herb cheese",
            "Aged balsamic"
        ],
        calories: 320,
        dietaryTags: [
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 83
    },


    {
        id: "dish-05",
        name: "Smoked Ember Pizza",
        category: "pizza",
        price: 21,
        rating: 4.8,
        description:
            "Wood-fired dough layered with smoked tomato, mozzarella, basil, and roasted garlic.",
        image: "images/dish-02.webp",
        ingredients: [
            "Wood-fired dough",
            "Smoked tomato",
            "Mozzarella",
            "Fresh basil"
        ],
        calories: 690,
        dietaryTags: [
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 91
    },


    {
        id: "dish-06",
        name: "Ember Heat Wings",
        category: "starters",
        price: 15,
        rating: 4.6,
        description:
            "Crispy flame-finished wings tossed in our smoky house hot sauce.",
        image: "images/dish-03.webp",
        ingredients: [
            "Chicken wings",
            "House hot sauce",
            "Smoked paprika",
            "Fresh herbs"
        ],
        calories: 560,
        dietaryTags: [
            "spicy"
        ],
        spiceLevel: "hot",
        popularity: 88
    },


    {
        id: "dish-07",
        name: "Wild Herb Risotto",
        category: "main-course",
        price: 20,
        rating: 4.7,
        description:
            "Creamy arborio rice with wild herbs, roasted mushrooms, parmesan, and lemon zest.",
        image: "images/weekend-special.webp",
        ingredients: [
            "Arborio rice",
            "Wild herbs",
            "Roasted mushrooms",
            "Parmesan"
        ],
        calories: 470,
        dietaryTags: [
            "vegetarian",
            "gluten-free"
        ],
        spiceLevel: "mild",
        popularity: 86
    },


    {
        id: "dish-08",
        name: "Garden Ember Bowl",
        category: "main-course",
        price: 17,
        rating: 4.6,
        description:
            "Seasonal vegetables, grains, roasted chickpeas, fresh herbs, and a citrus dressing.",
        image: "images/dish-01.webp",
        ingredients: [
            "Seasonal vegetables",
            "Whole grains",
            "Roasted chickpeas",
            "Citrus dressing"
        ],
        calories: 410,
        dietaryTags: [
            "vegan",
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 79
    },


    {
        id: "dish-09",
        name: "Ember Chocolate Tart",
        category: "desserts",
        price: 10,
        rating: 4.9,
        description:
            "Dark chocolate tart with sea salt, toasted hazelnut, and a warm cocoa finish.",
        image: "images/gallery/gallery-03.webp",
        ingredients: [
            "Dark chocolate",
            "Sea salt",
            "Hazelnut",
            "Cocoa"
        ],
        calories: 430,
        dietaryTags: [
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 97
    },


    {
        id: "dish-10",
        name: "Roasted Berry Cheesecake",
        category: "desserts",
        price: 11,
        rating: 4.8,
        description:
            "Silky baked cheesecake finished with roasted seasonal berries and vanilla cream.",
        image: "images/gallery/gallery-03.webp",
        ingredients: [
            "Cream cheese",
            "Seasonal berries",
            "Vanilla",
            "Biscuit base"
        ],
        calories: 460,
        dietaryTags: [
            "vegetarian"
        ],
        spiceLevel: "mild",
        popularity: 89
    },


    {
        id: "dish-11",
        name: "Citrus Ember Fizz",
        category: "drinks",
        price: 8,
        rating: 4.7,
        description:
            "Sparkling citrus, fresh mint, ginger, and a touch of smoked rosemary.",
        image: "images/gallery/gallery-04.webp",
        ingredients: [
            "Fresh citrus",
            "Mint",
            "Ginger",
            "Rosemary"
        ],
        calories: 120,
        dietaryTags: [
            "vegan",
            "vegetarian",
            "gluten-free"
        ],
        spiceLevel: "mild",
        popularity: 80
    },


    {
        id: "dish-12",
        name: "Dark Cherry Cooler",
        category: "drinks",
        price: 9,
        rating: 4.6,
        description:
            "Tart cherry, sparkling water, fresh lime, and aromatic herbs over ice.",
        image: "images/gallery/gallery-04.webp",
        ingredients: [
            "Tart cherry",
            "Sparkling water",
            "Fresh lime",
            "Fresh herbs"
        ],
        calories: 110,
        dietaryTags: [
            "vegan",
            "vegetarian",
            "gluten-free"
        ],
        spiceLevel: "mild",
        popularity: 76
    }

];

/* =========================================================
   MENU STATE
   ========================================================= */

let currentCategory = "all";

let currentDiet = null;

let currentSearch = "";

let currentSort = "default";

/* =========================================================
   MENU DOM ELEMENTS
   ========================================================= */

const menuGrid =
    document.querySelector("#menu-grid");

const menuSearchInput =
    document.querySelector("#menu-search-input");

const menuSortSelect =
    document.querySelector("#menu-sort-select");

const menuResultCount =
    document.querySelector("#menu-result-count");

const menuEmptyState =
    document.querySelector("#menu-empty-state");

const menuClearFilters =
    document.querySelector("#menu-clear-filters");

const menuEmptyReset =
    document.querySelector("#menu-empty-reset");

/* =========================================================
   MENU CARD RENDERER
   ========================================================= */

const createMenuCard = (dish) => {

    const dietaryLabels =
        dish.dietaryTags.length > 0
            ? dish.dietaryTags
                .map(
                    (tag) =>
                        tag
                            .replace("-", " ")
                            .replace(
                                /^\w/,
                                (letter) =>
                                    letter.toUpperCase()
                            )
                )
                .join(" • ")
            : "Chef's Selection";


    return `
        <article
            class="menu-dish-card"
            data-dish-id="${dish.id}"
        >

            <div class="menu-dish-image-wrapper">

                <img
                    src="${dish.image}"
                    alt="${dish.name} — Ember & Spoon"
                    class="menu-dish-image"
                    loading="lazy"
                >

                <span class="menu-dish-category">
                    ${dish.category
                        .replace("-", " ")}
                </span>

            </div>


            <div class="menu-dish-content">

                <div class="menu-dish-heading">

                    <h2 class="menu-dish-name">
                        ${dish.name}
                    </h2>

                    <span class="menu-dish-price">
                        $${dish.price}
                    </span>

                </div>


                <p class="menu-dish-description">
                    ${dish.description}
                </p>


                <div class="menu-dish-meta">

                    <span class="menu-dish-rating">
                        ★ ${dish.rating}
                    </span>

                    <span
                        class="menu-dish-meta-divider"
                        aria-hidden="true"
                    ></span>

                    <span>
                        ${dietaryLabels}
                    </span>

                </div>


                <div class="menu-dish-actions">

                    <a
                        href="food-detail.html?id=${dish.id}"
                        class="menu-view-details"
                    >
                        View Details
                    </a>

                    <button
                        type="button"
                        class="menu-add-button"
                        data-add-to-cart="${dish.id}"
                    >
                        Add +
                    </button>

                </div>

            </div>

        </article>
    `;
};

/* =========================================================
   MENU FILTERING
   ========================================================= */

const getFilteredDishes = () => {

    let filteredDishes =
        dishes.filter(
            (dish) => {

                const matchesCategory =
                    currentCategory === "all" ||
                    dish.category === currentCategory;


                const matchesDiet =
                    !currentDiet ||
                    dish.dietaryTags.includes(
                        currentDiet
                    );


                const searchableText =
                    (
                        dish.name +
                        " " +
                        dish.description +
                        " " +
                        dish.category
                    ).toLowerCase();


                const matchesSearch =
                    searchableText.includes(
                        currentSearch.toLowerCase()
                    );


                return (
                    matchesCategory &&
                    matchesDiet &&
                    matchesSearch
                );
            }
        );


    /*
        Sorting
    */

    switch (currentSort) {

        case "price-low":

            filteredDishes.sort(
                (a, b) =>
                    a.price - b.price
            );

            break;


        case "price-high":

            filteredDishes.sort(
                (a, b) =>
                    b.price - a.price
            );

            break;


        case "rating":

            filteredDishes.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;


        case "popularity":

            filteredDishes.sort(
                (a, b) =>
                    b.popularity - a.popularity
            );

            break;


        default:

            break;
    }


    return filteredDishes;
};

/* =========================================================
   RENDER MENU
   ========================================================= */

const renderMenu = () => {

    if (!menuGrid) {
        return;
    }


    const filteredDishes =
        getFilteredDishes();


    menuGrid.innerHTML =
        filteredDishes
            .map(createMenuCard)
            .join("");


    if (menuResultCount) {

        menuResultCount.textContent =
            filteredDishes.length;

    }


    if (menuEmptyState) {

        menuEmptyState.hidden =
            filteredDishes.length !== 0;

    }

};

/* =========================================================
   MENU CATEGORY FILTER EVENTS
   ========================================================= */

const menuCategoryButtons =
    document.querySelectorAll(
        '[data-filter-group="category"]'
    );


menuCategoryButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    button.dataset.category;


                menuCategoryButtons.forEach(
                    (item) => {

                        const isActive =
                            item === button;

                        item.classList.toggle(
                            "active",
                            isActive
                        );

                        item.setAttribute(
                            "aria-pressed",
                            String(isActive)
                        );

                    }
                );


                renderMenu();
            }
        );

    }
);

/* =========================================================
   MENU DIETARY FILTER EVENTS
   ========================================================= */

const menuDietButtons =
    document.querySelectorAll(
        '[data-filter-group="diet"]'
    );


menuDietButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const selectedDiet =
                    button.dataset.diet;


                if (
                    currentDiet ===
                    selectedDiet
                ) {

                    currentDiet = null;

                } else {

                    currentDiet =
                        selectedDiet;

                }


                menuDietButtons.forEach(
                    (item) => {

                        const isActive =
                            item.dataset.diet ===
                            currentDiet;

                        item.classList.toggle(
                            "active",
                            isActive
                        );

                        item.setAttribute(
                            "aria-pressed",
                            String(isActive)
                        );

                    }
                );


                renderMenu();
            }
        );

    }
);

/* =========================================================
   MENU SEARCH
   ========================================================= */

if (menuSearchInput) {

    menuSearchInput.addEventListener(
        "input",
        (event) => {

            currentSearch =
                event.target.value.trim();

            renderMenu();

        }
    );

}

/* =========================================================
   MENU SORTING
   ========================================================= */

if (menuSortSelect) {

    menuSortSelect.addEventListener(
        "change",
        (event) => {

            currentSort =
                event.target.value;

            renderMenu();

        }
    );

}

/* =========================================================
   CLEAR MENU FILTERS
   ========================================================= */

const clearMenuFilters = () => {

    currentCategory = "all";

    currentDiet = null;

    currentSearch = "";

    currentSort = "default";


    if (menuSearchInput) {

        menuSearchInput.value = "";

    }


    if (menuSortSelect) {

        menuSortSelect.value = "default";

    }


    menuCategoryButtons.forEach(
        (button) => {

            const isActive =
                button.dataset.category === "all";

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        }
    );


    menuDietButtons.forEach(
        (button) => {

            button.classList.remove(
                "active"
            );

            button.setAttribute(
                "aria-pressed",
                "false"
            );

        }
    );


    renderMenu();
};


if (menuClearFilters) {

    menuClearFilters.addEventListener(
        "click",
        clearMenuFilters
    );

}


if (menuEmptyReset) {

    menuEmptyReset.addEventListener(
        "click",
        clearMenuFilters
    );

}

/* =========================================================
   INITIALIZE MENU
   ========================================================= */

if (menuGrid) {

    renderMenu();

}

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
/* =========================================================
   6. TESTIMONIAL SLIDER
   ========================================================= */

const testimonials =
    document.querySelectorAll(".testimonial");

const testimonialIndicators =
    document.querySelectorAll(
        ".testimonial-indicator"
    );

const previousTestimonialButton =
    document.querySelector("#testimonial-prev");

const nextTestimonialButton =
    document.querySelector("#testimonial-next");


if (
    testimonials.length > 0 &&
    testimonialIndicators.length > 0 &&
    previousTestimonialButton &&
    nextTestimonialButton
) {

    let currentTestimonial = 0;


    const showTestimonial = (index) => {

        if (
            index < 0 ||
            index >= testimonials.length
        ) {
            return;
        }


        testimonials.forEach(
            (testimonial, testimonialIndex) => {

                const isActive =
                    testimonialIndex === index;

                testimonial.classList.toggle(
                    "active",
                    isActive
                );

            }
        );


        testimonialIndicators.forEach(
            (indicator, indicatorIndex) => {

                const isActive =
                    indicatorIndex === index;

                indicator.classList.toggle(
                    "active",
                    isActive
                );

                indicator.setAttribute(
                    "aria-selected",
                    String(isActive)
                );

            }
        );


        currentTestimonial = index;
    };


    nextTestimonialButton.addEventListener(
        "click",
        () => {

            const nextIndex =
                (currentTestimonial + 1)
                % testimonials.length;

            showTestimonial(nextIndex);

        }
    );


    previousTestimonialButton.addEventListener(
        "click",
        () => {

            const previousIndex =
                (
                    currentTestimonial
                    - 1
                    + testimonials.length
                )
                % testimonials.length;

            showTestimonial(previousIndex);

        }
    );


    testimonialIndicators.forEach(
        (indicator) => {

            indicator.addEventListener(
                "click",
                () => {

                    const slideIndex =
                        Number(
                            indicator.dataset.slide
                        );

                    showTestimonial(slideIndex);

                }
            );

        }
    );


    /*
        Allow left/right arrow keys to navigate while
        the testimonial section is being used.
    */

    document.addEventListener(
        "keydown",
        (event) => {

            const activeElement =
                document.activeElement;

            const isTyping =
                activeElement &&
                (
                    activeElement.tagName === "INPUT" ||
                    activeElement.tagName === "TEXTAREA" ||
                    activeElement.tagName === "SELECT"
                );


            if (isTyping) {
                return;
            }


            if (event.key === "ArrowRight") {

                const nextIndex =
                    (
                        currentTestimonial + 1
                    )
                    % testimonials.length;

                showTestimonial(nextIndex);
            }


            if (event.key === "ArrowLeft") {

                const previousIndex =
                    (
                        currentTestimonial
                        - 1
                        + testimonials.length
                    )
                    % testimonials.length;

                showTestimonial(previousIndex);
            }

        }
    );


    /*
        Start with the first testimonial.
    */

    showTestimonial(0);

}

/* =========================================================
   7. NEWSLETTER FORM VALIDATION
   ========================================================= */

const newsletterForm =
    document.querySelector("#newsletter-form");


if (newsletterForm) {

    const newsletterEmail =
        document.querySelector("#newsletter-email");

    const newsletterMessage =
        document.querySelector("#newsletter-message");


    newsletterForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const email =
                newsletterEmail.value.trim();


            newsletterMessage.classList.remove(
                "success"
            );


            /*
                Basic email validation.

                This is intentionally simple because the
                backend does not exist yet.
            */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!email) {

                newsletterMessage.textContent =
                    "Please enter your email address.";

                newsletterEmail.focus();

                return;
            }


            if (!emailPattern.test(email)) {

                newsletterMessage.textContent =
                    "Please enter a valid email address.";

                newsletterEmail.focus();

                return;
            }


            /*
                Frontend prototype success state.
            */

            newsletterMessage.textContent =
                "You're on the list. Welcome to the kitchen.";

            newsletterMessage.classList.add(
                "success"
            );


            newsletterForm.reset();

        }
    );

}