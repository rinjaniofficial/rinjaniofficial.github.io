// script.js - Rinjani Official Interactivity

document.addEventListener("DOMContentLoaded", function() {
    // Tombol pencarian paket
    const searchButton = document.querySelector(".btn-search");

    if (searchButton) {
        searchButton.addEventListener("click", function() {
            alert("Searching for your Rinjani trekking adventure... Redirecting to WhatsApp for instant booking!");
            // Bisa diarahkan otomatis ke WhatsApp dengan pesan kustom
            window.open("https://wa.me/6282323050467?text=Hello%20Rinjani%20Official,%20I%20used%20the%20website%20search%20feature%20and%20want%20to%20book%20a%20trek.", "_blank");
        });
    }
});

/**
 * Rinjani Official - Main Application Logic
 */
const CONFIG = {
    whatsapp: "6282323050467",
    pricing: {
        economy: { minimumFare: 1600000, pricePerKm: 75000 },
        family:  { minimumFare: 2200000, pricePerKm: 95000 },
        premium: { minimumFare: 3500000, pricePerKm: 130000 }
    }
};

const locations = [
    { id: "sembalun", name: "Sembalun (Main Basecamp)", region: "East Lombok" },
    { id: "senaru", name: "Senaru (North Basecamp)", region: "North Lombok" },
    { id: "torean", name: "Torean (Valley Route)", region: "North Lombok" },
    { id: "puncak_rinjani", name: "Mount Rinjani Summit (3726M)", region: "Summit" },
    { id: "danau_segara_anak", name: "Segara Anak Lake", region: "Caldera" }
].sort((a, b) => a.name.localeCompare(b.name));

const elOrigin = document.getElementById('origin');
const elDest = document.getElementById('destination');
const elDate = document.getElementById('date');
const elTime = document.getElementById('time');
const elPassengers = document.getElementById('passengers');
const elVehicle = document.getElementById('vehicle');

document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
    setDefaultDateTime();
    initMobileMenu();
});

function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }
}

function populateDropdowns() {
    if (!elOrigin || !elDest) return;
    locations.forEach(loc => {
        elOrigin.add(new Option(loc.name, loc.id));
        elDest.add(new Option(loc.name, loc.id));
    });
}

function setDefaultDateTime() {
    if (!elDate || !elTime) return;
    const now = new Date();
    now.setDate(now.getDate() + 3);
    elDate.value = now.toISOString().split('T')[0];
    elTime.value = "07:00";
}

function calculate() {
    const calcResult = document.getElementById('calcResult');
    const checkBtn = document.getElementById('checkPriceBtn');
    const submitBtn = document.getElementById('submitBtn');
    const extraDetails = document.getElementById('extraDetails');

    document.getElementById('priceResult').innerText = "$165 USD";
    calcResult.classList.remove('hidden-calc');
    checkBtn.classList.add('hidden-calc');
    submitBtn.classList.remove('hidden-calc');
    extraDetails.classList.remove('hidden-calc');
}

function submitBooking() {
    const customerName = document.getElementById('customerName').value;
    const hotelName = document.getElementById('hotelName').value;
    if(!customerName || !hotelName) {
        alert("Please fill in your name and meeting point location.");
        return;
    }
    const msg = `Hello *Rinjani Official*, I want to book a trip. Leader: ${customerName}, Date: ${elDate.value}, Meeting Point: ${hotelName}. Thank you!`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openDirectWhatsApp() {
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=Hello%20Rinjani%20Official,%20I%20want%20to%20consult%20about%20trekking%20packages.`, "_blank");
}

// Map Modal Handlers (moved from inline <script> in index.html)
function openMapModal() {
    document.getElementById('mapModal').classList.remove('hidden');
}
function closeMapModal() {
    document.getElementById('mapModal').classList.add('hidden');
}
