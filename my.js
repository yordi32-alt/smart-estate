// POPUP FUNCTION
function showDetails(title, location, price) {
    document.getElementById("pop-title").innerText = title;
    document.getElementById("pop-location").innerText = location;
    document.getElementById("pop-price").innerText = price;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Auto-close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});


// buy
 document.getElementById('searchBtn').addEventListener('click', () => {
        const locationInput = document.getElementById('location').value.toLowerCase();
        const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
        const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;

        const properties = document.querySelectorAll('.property');

        properties.forEach(prop => {
            const propLocation = prop.getAttribute('data-location').toLowerCase();
            const propPrice = parseInt(prop.getAttribute('data-price'));

            if(propLocation.includes(locationInput) && propPrice >= minPrice && propPrice <= maxPrice) {
                prop.style.display = 'block';
            } else {
                prop.style.display = 'none';
            }
        });
    });

    function viewImage(imageSrc) {
    let popup = window.open("", "_blank");
    popup.document.write(`<img src="${imageSrc}" style="width:100%; height:auto;">`);
}



   
