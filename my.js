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
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
   navLinks.classList.toggle("open");
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

   
