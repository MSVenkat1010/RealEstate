'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const $navBar = document.querySelector("[data-navbar]");
    const $navToggler = document.querySelector("[data-nav-toggler]");


    
    if ($navToggler && $navBar) {
        $navToggler.addEventListener("click", () => {
            $navBar.classList.toggle("active");
        });
    } else {
        console.error("Navigation toggler or navbar not found");
    }

    const header = document.querySelector("[data-header]")
    window.addEventListener("scroll",()=>{
        header.classList[window.scrollY>50 ? "add":"remove"]("active")
    })
        // Data for properties
        var properties = [
            
                {
                    "image": "/assets/images/property-1.jpg",
                    "alt": "Exit Realty",
                    "price": "$630.44",
                    "badge":"New",
                    "title": "Exit Realty",
                    "address": "2972 Westheimer Rd. Santa Ana, Illinois 85486",
                    "bedrooms": "5 Bed",
                    "bathrooms": "4 Bath",
                    "sqft": "1630 sqft"
                },
                {
                    "image": "/assets/images/property-2.jpg",
                    "alt": "The Real Estate Group",
                    "price": "$475.22",
                    "title": "The Real Estate Group",
                    "address": "2118 Thornridge Cir. Syracuse, Connecticut 35624",
                    "bedrooms": "8 Bed",
                    "bathrooms": "5 Bath",
                    "sqft": "1240 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-3.jpg",
                    "alt": "757 Realty",
                    "price": "$576.28",
                    "title": "757 Realty",
                    "address": "4140 Parker Rd. Allentown, New Mexico 31134",
                    "bedrooms": "6 Bed",
                    "bathrooms": "6 Bath",
                    "sqft": "1260 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-4.jpg",
                    "alt": "Beach 87ros Realty Inc.",
                    "price": "$473.85",
                    "title": "Beach Pros Realty Inc.",
                    "address": "2715 Ash Dr. San Jose, South Dakota 83475",
                    "bedrooms": "10 Bed",
                    "bathrooms": "8 Bath",
                    "sqft": "2350 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-5.jpg",
                    "alt": "Keller Williams Elite Town Center",
                    "price": "$105.55",
                    "title": "Keller Williams Elite Town Center",
                    "address": "3517 W. Gray St. Utica, Pennsylvania 57867",
                    "bedrooms": "8 Bed",
                    "bathrooms": "8 Bath",
                    "sqft": "1950 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-6.jpg",
                    "alt": "All Pros Real Estate",
                    "price": "$739.65",
                    "title": "All Pros Real Estate",
                    "address": "8502 Preston Rd. Inglewood, Maine 98380",
                    "bedrooms": "4 Bed",
                    "bathrooms": "4 Bath",
                    "sqft": "1580 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-7.jpg",
                    "alt": "FIT Realty",
                    "price": "$948.55",
                    "title": "FIT Realty",
                    "address": "4517 Washington Ave. Manchester, Kentucky 39495",
                    "bedrooms": "3 Bed",
                    "bathrooms": "2 Bath",
                    "sqft": "1120 sqft",
                    "badge":"New",
                },
                {
                    "image": "/assets/images/property-8.jpg",
                    "alt": "Cova Home Reality",
                    "price": "$948.55",
                    "title": "Cova Home Reality",
                    "address": "1098 Washington Ave. Manchester, Hawai 39495",
                    "bedrooms": "3 Bed",
                    "bathrooms": "2 Bath",
                    "sqft": "1420 sqft",
                    "badge":"New",
                },
            
            
            // Add more property objects as needed
        ];
    
        // Function to generate HTML for property card
        function generatePropertyCards(properties) {
            var html = '';
            properties.forEach(function(property) {
                html += `
                    <div class="card">
                        <div class="card-banner">
                            <figure class="img-holder" style="--width: 585; --height: 390;">
                                <img src="${property.image}" alt="${property.title}" width="585" height="390" class="img-cover">
                            </figure>
                            <span class="badge label-medium">${property.badge}</span>
                            <button class="icon-btn fav-btn" aria-label="add to favorite" data-toggle-btn>
                                <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
                            </button>
                        </div>
                        <div class="card-content">
                            <span class="title-large">${property.price}</span>
                            <h3><a href="#" class="title-small card-title">${property.title}</a></h3>
                            <address class="body-medium card-text">${property.address}</address>
                            <div class="card-meta-list">
                                <div class="meta-item">
                                    <span class="material-symbols-rounded meta-icon" aria-hidden="true">bed</span>
                                    <span class="meta-text label-medium">${property.bedrooms}</span>
                                </div>
                                <div class="meta-item">
                                    <span class="material-symbols-rounded meta-icon" aria-hidden="true">bathtub</span>
                                    <span class="meta-text label-medium">${property.bathrooms}</span>
                                </div>
                                <div class="meta-item">
                                    <span class="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>
                                    <span class="meta-text label-medium">${property.sqft}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            return html;
        }
    
        // Function to render all properties
        function renderProperties() {
            var propertyContainer = document.getElementById('property-container');
            propertyContainer.innerHTML = generatePropertyCards(properties);
        }
    
        // Call the render function to display properties
        renderProperties();


        const $favoriteButtons = document.querySelectorAll("[data-toggle-btn]");

        $favoriteButtons.forEach($favoriteButton => {
            $favoriteButton.addEventListener("click", () => {
                $favoriteButton.classList.toggle("active");
            });
        });
    
});

