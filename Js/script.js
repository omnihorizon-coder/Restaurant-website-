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
   CART STATE
   ========================================================= */

const CART_STORAGE_KEY =
    "emberAndSpoonCart";


/*
    Load the cart safely from LocalStorage.

    If the saved data is missing, invalid, or contains
    incorrect values, we return an empty cart instead
    of allowing the application to break.
*/

const loadCart = () => {

    try {

        const storedCart =
            localStorage.getItem(
                CART_STORAGE_KEY
            );


        if (!storedCart) {
            return [];
        }


        const parsedCart =
            JSON.parse(storedCart);


        if (!Array.isArray(parsedCart)) {
            return [];
        }


        return parsedCart.filter(
            (item) => {

                const dishExists =
                    dishes.some(
                        (dish) =>
                            dish.id === item.id
                    );


                const validQuantity =
                    Number.isInteger(
                        item.quantity
                    ) &&
                    item.quantity > 0;


                return (
                    dishExists &&
                    validQuantity
                );

            }
        );

    } catch (error) {

        console.error(
            "Unable to load cart:",
            error
        );


        return [];

    }

};


let cart = loadCart();

/* =========================================================
   SAVE CART
   ========================================================= */

const saveCart = () => {

    try {

        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.error(
            "Unable to save cart:",
            error
        );

    }

};

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
   CART COUNT
   ========================================================= */

const updateCartCount = () => {

    const cartCountElement =
        document.querySelector("#cart-count");


    if (!cartCountElement) {
        return;
    }


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCountElement.textContent =
        totalItems;


    cartCountElement.setAttribute(
        "aria-label",
        `${totalItems} ${
            totalItems === 1
                ? "item"
                : "items"
        } in cart`
    );


    cartCountElement.classList.toggle(
        "has-items",
        totalItems > 0
    );

};

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
/* =========================================================
   8. FOOD DETAIL PAGE
   ========================================================= */

const foodDetailContainer =
    document.querySelector(
        "#food-detail-container"
    );


if (foodDetailContainer) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const dishId =
        params.get("id");


    const selectedDish =
        dishes.find(
            (dish) =>
                dish.id === dishId
        );


    /*
        Show an error if the URL doesn't contain a valid
        dish ID.
    */

    if (!selectedDish) {

        foodDetailContainer.innerHTML = `
            <div class="food-detail-error">

                <span class="section-label">
                    Ember & Spoon
                </span>

                <h1>
                    Dish not found.
                </h1>

                <p>
                    We couldn't find the dish you're looking for.
                </p>

                <a
                    href="menu.html"
                    class="btn btn-dark"
                >
                    Return to Menu
                </a>

            </div>
        `;

    } else {

        const ingredientsMarkup =
            selectedDish.ingredients
                .map(
                    (ingredient) => `
                        <span class="food-detail-ingredient">
                            ${ingredient}
                        </span>
                    `
                )
                .join("");


        foodDetailContainer.innerHTML = `
            <div class="food-detail-layout">


                <!-- Dish Image -->

                <div class="food-detail-image-wrapper">

                    <img
                        src="${selectedDish.image}"
                        alt="${selectedDish.name}"
                        class="food-detail-image"
                    >

                </div>


                <!-- Dish Content -->

                <div class="food-detail-content">

                    <span class="food-detail-category">
                        ${selectedDish.category
                            .replace("-", " ")}
                    </span>


                    <h1 class="food-detail-title">
                        ${selectedDish.name}
                    </h1>


                    <div class="food-detail-rating">

                        <span class="food-detail-stars">
                            ★★★★★
                        </span>

                        <span class="food-detail-rating-score">
                            ${selectedDish.rating}
                            · Guest Rating
                        </span>

                    </div>


                    <p class="food-detail-price">
                        $${selectedDish.price}
                    </p>


                    <p class="food-detail-description">
                        ${selectedDish.description}
                    </p>


                    <!-- Nutrition / Info -->

                    <div class="food-detail-info">

                        <div class="food-detail-info-item">

                            <span>
                                Calories
                            </span>

                            <strong>
                                ${selectedDish.calories} kcal
                            </strong>

                        </div>


                        <div class="food-detail-info-item">

                            <span>
                                Spice Level
                            </span>

                            <strong>
                                ${selectedDish.spiceLevel}
                            </strong>

                        </div>


                        <div class="food-detail-info-item">

                            <span>
                                Popularity
                            </span>

                            <strong>
                                ${selectedDish.popularity}/100
                            </strong>

                        </div>

                    </div>


                    <!-- Ingredients -->

                    <div class="food-detail-subsection">

                        <h2>
                            Ingredients
                        </h2>

                        <div
                            class="food-detail-ingredients"
                        >
                            ${ingredientsMarkup}
                        </div>

                    </div>


                    <!-- Actions -->

                    <div class="food-detail-actions">

                        <div class="food-detail-quantity">

                            <button
                                type="button"
                                class="quantity-button"
                                id="detail-quantity-minus"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>


                            <span
                                class="quantity-value"
                                id="detail-quantity"
                            >
                                1
                            </span>


                            <button
                                type="button"
                                class="quantity-button"
                                id="detail-quantity-plus"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>

                        </div>


                        <button
                            type="button"
                            class="btn btn-primary food-detail-add-button"
                            id="detail-add-to-cart"
                        >
                            Add to Cart
                        </button>


                        <button
                            type="button"
                            class="food-detail-favorite"
                            id="detail-favorite"
                            aria-label="Add dish to favorites"
                            aria-pressed="false"
                        >
                            ♡
                        </button>

                    </div>


                    <!-- Allergen Information -->

                    <p class="food-detail-allergens">
                        Please inform our team about any food
                        allergies or dietary requirements before
                        ordering. Ingredients may vary seasonally.
                    </p>

                </div>

            </div>


            <!-- Related Dishes -->

            <section class="related-dishes">

                <div class="related-dishes-header">

                    <div>

                        <span class="section-label">
                            You May Also Like
                        </span>

                        <h2>
                            More from the kitchen.
                        </h2>

                    </div>

                    <a
                        href="menu.html"
                        class="featured-menu-link"
                    >
                        View Full Menu →
                    </a>

                </div>


                <div
                    class="related-dishes-grid"
                    id="related-dishes-grid"
                >
                    <!-- JavaScript will render related dishes -->
                </div>

            </section>
        `;


        /* =====================================================
           DETAIL QUANTITY
           ===================================================== */

        const quantityElement =
            document.querySelector(
                "#detail-quantity"
            );

        const minusButton =
            document.querySelector(
                "#detail-quantity-minus"
            );

        const plusButton =
            document.querySelector(
                "#detail-quantity-plus"
            );


        let quantity = 1;


        const updateQuantity = () => {

            quantityElement.textContent =
                quantity;

        };


        minusButton.addEventListener(
            "click",
            () => {

                if (quantity > 1) {

                    quantity -= 1;

                    updateQuantity();

                }

            }
        );


        plusButton.addEventListener(
            "click",
            () => {

                if (quantity < 20) {

                    quantity += 1;

                    updateQuantity();

                }

            }
        );


        /* =====================================================
           DETAIL FAVORITE BUTTON
           ===================================================== */

        const favoriteButton =
            document.querySelector(
                "#detail-favorite"
            );


        favoriteButton.addEventListener(
            "click",
            () => {

                const isPressed =
                    favoriteButton.getAttribute(
                        "aria-pressed"
                    ) === "true";


                favoriteButton.setAttribute(
                    "aria-pressed",
                    String(!isPressed)
                );


                favoriteButton.classList.toggle(
                    "active",
                    !isPressed
                );


                favoriteButton.textContent =
                    !isPressed
                        ? "♥"
                        : "♡";

            }
        );


        /* =====================================================
           RELATED DISHES
           ===================================================== */

        const relatedGrid =
            document.querySelector(
                "#related-dishes-grid"
            );


        if (relatedGrid) {

            const relatedDishes =
                dishes
                    .filter(
                        (dish) =>
                            dish.id !== selectedDish.id &&
                            (
                                dish.category ===
                                selectedDish.category
                            )
                    )
                    .slice(0, 3);


            relatedGrid.innerHTML =
                relatedDishes
                    .map(
                        (dish) => `
                            <article class="menu-dish-card">

                                <div class="menu-dish-image-wrapper">

                                    <img
                                        src="${dish.image}"
                                        alt="${dish.name}"
                                        class="menu-dish-image"
                                        loading="lazy"
                                    >

                                </div>


                                <div class="menu-dish-content">

                                    <div class="menu-dish-heading">

                                        <h3
                                            class="menu-dish-name"
                                        >
                                            ${dish.name}
                                        </h3>

                                        <span
                                            class="menu-dish-price"
                                        >
                                            $${dish.price}
                                        </span>

                                    </div>


                                    <div class="menu-dish-meta">

                                        <span
                                            class="menu-dish-rating"
                                        >
                                            ★ ${dish.rating}
                                        </span>

                                    </div>


                                    <div class="menu-dish-actions">

                                        <a
                                            href="food-detail.html?id=${dish.id}"
                                            class="menu-view-details"
                                        >
                                            View Details
                                        </a>

                                    </div>

                                </div>

                            </article>
                        `
                    )
                    .join("");

        }

    }

}

/* =========================================================
   ADD TO CART
   ========================================================= */

const addToCart = (
    dishId,
    quantity = 1
) => {

    const selectedDish =
        dishes.find(
            (dish) =>
                dish.id === dishId
        );


    if (!selectedDish) {
        return;
    }


    const existingItem =
        cart.find(
            (item) =>
                item.id === dishId
        );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({
            id: dishId,
            quantity: quantity
        });

    }


    saveCart();

    updateCartCount();

    showToast(
        `${selectedDish.name} added to cart`
    );

};

/* =========================================================
   CART DOM ELEMENTS
   ========================================================= */

const cartItemsContainer =
    document.querySelector("#cart-items");

const cartLayout =
    document.querySelector("#cart-layout");

const cartEmptyState =
    document.querySelector("#cart-empty-state");

const cartSubtotal =
    document.querySelector("#cart-subtotal");

const cartDelivery =
    document.querySelector("#cart-delivery");

const cartTax =
    document.querySelector("#cart-tax");

const cartDiscount =
    document.querySelector("#cart-discount");

const cartTotal =
    document.querySelector("#cart-total");

const cartCount =
    document.querySelector("#cart-count");

const cartClearButton =
    document.querySelector("#cart-clear-button");

const cartCheckoutButton =
    document.querySelector("#cart-checkout-button");

const toastElement =
    document.querySelector("#toast");


/* =========================================================
   CART TOAST
   ========================================================= */

let toastTimeout;


const showToast = (message) => {

    if (!toastElement) {
        return;
    }


    toastElement.textContent =
        message;


    toastElement.classList.add(
        "show"
    );


    clearTimeout(toastTimeout);


    toastTimeout = setTimeout(
        () => {

            toastElement.classList.remove(
                "show"
            );

        },
        2200
    );

};


/* =========================================================
   FIND DISH
   ========================================================= */

const findDishById = (dishId) => {

    return dishes.find(
        (dish) =>
            dish.id === dishId
    );

};


/* =========================================================
   CHANGE CART QUANTITY
   ========================================================= */

const changeCartQuantity = (
    dishId,
    change
) => {

    const cartItem =
        cart.find(
            (item) =>
                item.id === dishId
        );


    if (!cartItem) {
        return;
    }


    cartItem.quantity += change;


    if (cartItem.quantity <= 0) {

        removeFromCart(dishId);

        return;

    }

    saveCart();

    renderCart();

    updateCartCount();
};


/* =========================================================
   REMOVE ITEM
   ========================================================= */

const removeFromCart = (dishId) => {

    const dish =
        findDishById(dishId);


    const itemExists =
        cart.some(
            (item) =>
                item.id === dishId
        );


    if (!itemExists) {
        return;
    }


    cart =
        cart.filter(
            (item) =>
                item.id !== dishId
        );


    saveCart();

    renderCart();

    updateCartCount();


    if (dish) {

        showToast(
            `${dish.name} removed from cart`
        );

    }

};


/* =========================================================
   CLEAR CART
   ========================================================= */

const clearCart = () => {

    if (cart.length === 0) {

        showToast(
            "Your cart is already empty"
        );

        return;
    }


    cart = [];


    saveCart();


    renderCart();


    updateCartCount();


    showToast(
        "Cart cleared"
    );

};

/* =========================================================
   CART TOTALS
   ========================================================= */

const calculateCartTotals = () => {

    const subtotal =
        cart.reduce(
            (total, item) => {

                const dish =
                    findDishById(
                        item.id
                    );


                if (!dish) {
                    return total;
                }


                return (
                    total +
                    (
                        dish.price *
                        item.quantity
                    )
                );

            },
            0
        );


    const delivery =
        subtotal > 0
            ? 4.5
            : 0;


    const tax =
        subtotal * 0.08;


    /*
        For now, apply the weekend offer
        to orders above $50.
    */

    const discount =
        subtotal >= 50
            ? subtotal * 0.10
            : 0;


    const total =
        subtotal +
        delivery +
        tax -
        discount;


    return {
        subtotal,
        delivery,
        tax,
        discount,
        total
    };

};


/* =========================================================
   FORMAT CURRENCY
   ========================================================= */

const formatCurrency = (
    amount
) => {

    return `$${amount.toFixed(2)}`;

};


/* =========================================================
   RENDER CART ITEM
   ========================================================= */

const createCartItem = (
    cartItem
) => {

    const dish =
        findDishById(
            cartItem.id
        );


    if (!dish) {
        return "";
    }


    const itemTotal =
        dish.price *
        cartItem.quantity;


    return `
        <article
            class="cart-item"
            data-cart-id="${dish.id}"
        >

            <img
                src="${dish.image}"
                alt="${dish.name}"
                class="cart-item-image"
                loading="lazy"
            >


            <div class="cart-item-content">

                <h3 class="cart-item-name">
                    ${dish.name}
                </h3>


                <div class="cart-item-meta">

                    <span>
                        ${dish.category
                            .replace("-", " ")}
                    </span>

                    <span
                        class="dish-meta-divider"
                        aria-hidden="true"
                    ></span>

                    <span>
                        ★ ${dish.rating}
                    </span>

                </div>


                <p class="cart-item-price">
                    $${dish.price.toFixed(2)} each
                </p>

            </div>


            <div class="cart-item-controls">

                <div
                    class="cart-quantity"
                    aria-label="Quantity controls"
                >

                    <button
                        type="button"
                        class="cart-quantity-button"
                        data-cart-action="decrease"
                        data-cart-id="${dish.id}"
                        aria-label="Decrease ${dish.name} quantity"
                    >
                        −
                    </button>


                    <span class="cart-quantity-value">
                        ${cartItem.quantity}
                    </span>


                    <button
                        type="button"
                        class="cart-quantity-button"
                        data-cart-action="increase"
                        data-cart-id="${dish.id}"
                        aria-label="Increase ${dish.name} quantity"
                    >
                        +
                    </button>

                </div>


                <strong class="cart-item-total">
                    ${formatCurrency(itemTotal)}
                </strong>


                <button
                    type="button"
                    class="cart-remove-button"
                    data-cart-action="remove"
                    data-cart-id="${dish.id}"
                    aria-label="Remove ${dish.name} from cart"
                >
                    Remove
                </button>

            </div>

        </article>
    `;

};


/* =========================================================
   RENDER CART
   ========================================================= */

const renderCart = () => {

    /*
        Don't attempt to render cart content on pages
        that don't contain the cart elements.
    */

    if (
        !cartItemsContainer &&
        !cartLayout
    ) {
        return;
    }


    if (cart.length === 0) {

    if (cartItemsContainer) {

        cartItemsContainer.innerHTML = "";

    }


    if (cartLayout) {

        cartLayout.hidden = true;

    }


    if (cartEmptyState) {

        cartEmptyState.hidden = false;

    }

    } else {

        if (cartLayout) {

            cartLayout.hidden = false;

        }


        if (cartEmptyState) {
            
            cartEmptyState.hidden = true;

        }


        if (cartItemsContainer) {

            cartItemsContainer.innerHTML =
                cart
                    .map(createCartItem)
                    .join("");

        }

    }

    const totals =
        calculateCartTotals();


    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatCurrency(
                totals.subtotal
            );

    }


    if (cartDelivery) {

        cartDelivery.textContent =
            formatCurrency(
                totals.delivery
            );

    }


    if (cartTax) {

        cartTax.textContent =
            formatCurrency(
                totals.tax
            );

    }


    if (cartDiscount) {

        cartDiscount.textContent =
            `− ${formatCurrency(
                totals.discount
            )}`;

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatCurrency(
                totals.total
            );

    }

};


/* =========================================================
   CART ITEM EVENTS
   ========================================================= */

if (cartItemsContainer) {

    cartItemsContainer.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    "[data-cart-action]"
                );


            if (!button) {
                return;
            }


            const dishId =
                button.dataset.cartId;


            const action =
                button.dataset.cartAction;


            if (action === "increase") {

                changeCartQuantity(
                    dishId,
                    1
                );

            }


            if (action === "decrease") {

                changeCartQuantity(
                    dishId,
                    -1
                );

            }


            if (action === "remove") {

                removeFromCart(
                    dishId
                );

            }

        }
    );

}


/* =========================================================
   GLOBAL ADD-TO-CART EVENTS
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "[data-add-to-cart]"
            );


        if (!button) {
            return;
        }


        const dishId =
            button.dataset.addToCart;


        /*
            Food-detail quantity controls use
            a separate button and are handled below.
        */

        if (
            button.id ===
            "detail-add-to-cart"
        ) {
            return;
        }


        addToCart(
            dishId,
            1
        );

    }
);


/* =========================================================
   FOOD DETAIL ADD-TO-CART
   ========================================================= */

const detailAddButton =
    document.querySelector(
        "#detail-add-to-cart"
    );


if (detailAddButton) {

    detailAddButton.addEventListener(
        "click",
        () => {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            const dishId =
                params.get("id");


            const quantityElement =
                document.querySelector(
                    "#detail-quantity"
                );


            const quantity =
                Number(
                    quantityElement?.textContent ||
                    1
                );


            addToCart(
                dishId,
                quantity
            );

        }
    );

}


/* =========================================================
   CART CLEAR BUTTON
   ========================================================= */

if (cartClearButton) {

    cartClearButton.addEventListener(
        "click",
        () => {

            clearCart();

        }
    );

}


/* =========================================================
   CHECKOUT PROTOTYPE
   ========================================================= */

if (cartCheckoutButton) {

    cartCheckoutButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }


            showToast(
                "Checkout will be connected later."
            );

        }
    );

}


/* =========================================================
   INITIAL CART RENDER
   ========================================================= */

renderCart();

updateCartCount();


/* =========================================================
   INITIALIZE SHARED CART
   ========================================================= */

updateCartCount();

/* =========================================================
   9. RESERVATION FORM
   ========================================================= */

const reservationForm =
    document.querySelector("#reservation-form");


if (reservationForm) {

    const reservationDate =
        document.querySelector("#reservation-date");

    const reservationTime =
        document.querySelector("#reservation-time");

    const reservationGuests =
        document.querySelector("#reservation-guests");

    const reservationName =
        document.querySelector("#reservation-name");

    const reservationEmail =
        document.querySelector("#reservation-email");

    const reservationPhone =
        document.querySelector("#reservation-phone");

    const reservationStatus =
        document.querySelector(
            "#reservation-form-status"
        );

    const reservationLayout =
        document.querySelector(
            "#reservation-layout"
        );

    const reservationConfirmation =
        document.querySelector(
            "#reservation-confirmation"
        );

    const confirmationText =
        document.querySelector(
            "#reservation-confirmation-text"
        );

    const newReservationButton =
        document.querySelector(
            "#reservation-new-button"
        );


    /* =====================================================
       SET MINIMUM RESERVATION DATE
       ===================================================== */

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    const todayString =
        `${year}-${month}-${day}`;


    reservationDate.min =
        todayString;


    /* =====================================================
       VALIDATION HELPERS
       ===================================================== */

    const setFieldError = (
        field,
        message
    ) => {

        const errorElement =
            document.querySelector(
                `#${field.id}-error`
            );


        field.setAttribute(
            "aria-invalid",
            "true"
        );


        if (errorElement) {

            errorElement.textContent =
                message;

        }

    };


    const clearFieldError = (
        field
    ) => {

        const errorElement =
            document.querySelector(
                `#${field.id}-error`
            );


        field.removeAttribute(
            "aria-invalid"
        );


        if (errorElement) {

            errorElement.textContent =
                "";

        }

    };


    const validateEmail = (
        email
    ) => {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    };


    const validatePhone = (
        phone
    ) => {

        return /^[+\d\s()-]{7,20}$/
            .test(phone);

    };

/* =====================================================
       DISPLAY HELPERS
       ===================================================== */

    const selectedDateForDisplay = (
        date
    ) => {

        const dateObject =
            new Date(
                `${date}T00:00:00`
            );


        return dateObject.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );

    };


    const formatReservationTime = (
        time
    ) => {

        const [
            hours,
            minutes
        ] = time.split(":");


        const dateObject =
            new Date();


        dateObject.setHours(
            Number(hours),
            Number(minutes),
            0
        );


        return dateObject.toLocaleTimeString(
            "en-US",
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

    };

    /* =====================================================
       SUBMIT
       ===================================================== */

    reservationForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const date =
                reservationDate.value;


            const time =
                reservationTime.value;


            const guests =
                reservationGuests.value;


            const name =
                reservationName.value.trim();


            const email =
                reservationEmail.value.trim();


            const phone =
                reservationPhone.value.trim();


            const table =
                document.querySelector(
                    "#reservation-table"
                ).value;


            const requests =
                document.querySelector(
                    "#reservation-requests"
                ).value.trim();


            let isValid = true;


            /*
                Clear existing errors.
            */

            [
                reservationDate,
                reservationTime,
                reservationGuests,
                reservationName,
                reservationEmail,
                reservationPhone
            ].forEach(
                clearFieldError
            );


            if (!date) {

                setFieldError(
                    reservationDate,
                    "Please choose a date."
                );

                isValid = false;

            }


            if (date) {

                const selectedDate =
                    new Date(
                        `${date}T00:00:00`
                    );


                const currentDate =
                    new Date(
                        `${todayString}T00:00:00`
                    );


                if (
                    selectedDate <
                    currentDate
                ) {

                    setFieldError(
                        reservationDate,
                        "Please choose today or a future date."
                    );

                    isValid = false;

                }

            }


            if (!time) {

                setFieldError(
                    reservationTime,
                    "Please select a time."
                );

                isValid = false;

            }


            if (!guests) {

                setFieldError(
                    reservationGuests,
                    "Please select the number of guests."
                );

                isValid = false;

            }


            if (name.length < 2) {

                setFieldError(
                    reservationName,
                    "Please enter your full name."
                );

                isValid = false;

            }


            if (!validateEmail(email)) {

                setFieldError(
                    reservationEmail,
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            if (!validatePhone(phone)) {

                setFieldError(
                    reservationPhone,
                    "Please enter a valid phone number."
                );

                isValid = false;

            }


            if (!isValid) {

                reservationStatus.textContent =
                    "Please correct the highlighted fields.";

                return;
            }

            reservationStatus.textContent = "";

            /*
                Frontend prototype confirmation.

                We are intentionally not sending this data
                to a backend yet.
            */

            const formattedDate =
                selectedDateForDisplay(date);


            reservationConfirmation
                .hidden = false;


            reservationLayout
                .hidden = true;


            confirmationText.textContent =
                `Thanks, ${name}. Your request for ${guests} ${
                    Number(guests) === 1
                        ? "guest"
                        : "guests"
                } on ${formattedDate} at ${formatReservationTime(time)} has been recorded as a frontend prototype request.`;


            /*
                Keep these variables available for the future
                backend implementation.
            */

            console.log({
                date,
                time,
                guests,
                name,
                email,
                phone,
                table,
                requests
            });

        }
    );


    /* =====================================================
       NEW RESERVATION
       ===================================================== */

    if (newReservationButton) {

        newReservationButton.addEventListener(
            "click",
            () => {

                reservationForm.reset();


                reservationConfirmation
                    .hidden = true;


                reservationLayout
                    .hidden = false;


                reservationStatus.textContent =
                    "";


                [
                    reservationDate,
                    reservationTime,
                    reservationGuests,
                    reservationName,
                    reservationEmail,
                    reservationPhone
                ].forEach(
                    clearFieldError
                );


                reservationDate.min =
                    todayString;

            }
        );

    }

}
/* =========================================================
   10. ABOUT PAGE STATISTICS COUNTERS
   ========================================================= */

const counterElements =
    document.querySelectorAll(
        "[data-counter]"
    );


if (counterElements.length > 0) {

    const animateCounter = (
        element
    ) => {

        const target =
            Number(
                element.dataset.counter
            );


        const suffix =
            element.dataset.suffix || "";


        const duration = 1400;

        const startTime =
            performance.now();


        const updateCounter = (
            currentTime
        ) => {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
                Ease-out animation.

                The counter starts quickly and
                slows down naturally near the end.
            */

            const easedProgress =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                target *
                easedProgress;


            /*
                The 4.9 rating needs one decimal
                place. Whole-number statistics don't.
            */

            element.textContent =
                target % 1 !== 0
                    ? currentValue.toFixed(1)
                    : Math.floor(currentValue);


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                element.textContent =
                    target % 1 !== 0
                        ? target.toFixed(1) + suffix
                        : target + suffix;

            }

        };


        requestAnimationFrame(
            updateCounter
        );

    };


    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        animateCounter(
                            entry.target
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.35
            }
        );


    counterElements.forEach(
        (counter) => {

            counterObserver.observe(
                counter
            );

        }
    );

}
/* =========================================================
   11. CONTACT FORM
   ========================================================= */

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    const contactName =
        document.querySelector("#contact-name");

    const contactEmail =
        document.querySelector("#contact-email");

    const contactSubject =
        document.querySelector("#contact-subject");

    const contactMessage =
        document.querySelector("#contact-message");

    const contactStatus =
        document.querySelector("#contact-form-status");


    const setContactError = (
        field,
        message
    ) => {

        const errorElement =
            document.querySelector(
                `#${field.id}-error`
            );


        field.setAttribute(
            "aria-invalid",
            "true"
        );


        if (errorElement) {

            errorElement.textContent =
                message;

        }

    };


    const clearContactError = (
        field
    ) => {

        const errorElement =
            document.querySelector(
                `#${field.id}-error`
            );


        field.removeAttribute(
            "aria-invalid"
        );


        if (errorElement) {

            errorElement.textContent =
                "";

        }

    };


    const isValidEmail = (
        email
    ) => {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    };


    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                contactName.value.trim();


            const email =
                contactEmail.value.trim();


            const subject =
                contactSubject.value;


            const message =
                contactMessage.value.trim();


            let isValid = true;


            [
                contactName,
                contactEmail,
                contactSubject,
                contactMessage
            ].forEach(
                clearContactError
            );


            contactStatus.textContent =
                "";


            if (name.length < 2) {

                setContactError(
                    contactName,
                    "Please enter your full name."
                );

                isValid = false;

            }


            if (!isValidEmail(email)) {

                setContactError(
                    contactEmail,
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            if (!subject) {

                setContactError(
                    contactSubject,
                    "Please choose a subject."
                );

                isValid = false;

            }


            if (message.length < 10) {

                setContactError(
                    contactMessage,
                    "Please enter at least 10 characters."
                );

                isValid = false;

            }


            if (!isValid) {

                contactStatus.textContent =
                    "Please correct the highlighted fields.";

                return;
            }


            contactStatus.textContent =
                "Thanks for reaching out. Your message has been recorded as a frontend prototype request.";


            contactStatus.classList.add(
                "success"
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   12. FAQ ACCORDION
   ========================================================= */

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );


faqQuestions.forEach(
    (question) => {

        question.addEventListener(
            "click",
            () => {

                const isExpanded =
                    question.getAttribute(
                        "aria-expanded"
                    ) === "true";


                /*
                    Close all other FAQ items.
                */

                faqQuestions.forEach(
                    (otherQuestion) => {

                        if (
                            otherQuestion !== question
                        ) {

                            otherQuestion.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                            const otherAnswer =
                                document.getElementById(
                                    otherQuestion.getAttribute(
                                        "aria-controls"
                                    )
                                );


                            if (otherAnswer) {

                                otherAnswer.hidden =
                                    true;

                            }

                        }

                    }
                );


                /*
                    Toggle the selected question.
                */

                question.setAttribute(
                    "aria-expanded",
                    String(!isExpanded)
                );


                const answer =
                    document.getElementById(
                        question.getAttribute(
                            "aria-controls"
                        )
                    );


                if (answer) {

                    answer.hidden =
                        isExpanded;

                }

            }
        );

    }
);