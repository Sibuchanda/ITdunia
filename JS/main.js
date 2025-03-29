
// ----------------- Auto Typing --------------
let typed = new Typed('.auto-type',{
    strings: ["Serviced based", "Product based", "Startups"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})



// ------------------- Accordion Logic -------------
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// ------------------Pop up design -----------
// Function to Open Popup
function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

// Function to Close Popup
function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
