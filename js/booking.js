/* ==========================================================================
   KIBOKO GARAGE - ONLINE BOOKING SYSTEM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBookingSystem();
});

function initBookingSystem() {
    const heroBookingForm = document.getElementById('heroBookingForm');
    const mainBookingForm = document.getElementById('mainBookingForm');

    if (heroBookingForm) {
        heroBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleBookingSubmit(heroBookingForm, 'hero');
        });
    }

    if (mainBookingForm) {
        mainBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleBookingSubmit(mainBookingForm, 'main');
        });
    }
}

function handleBookingSubmit(form, type) {
    // Collect fields
    const nameInput = form.querySelector('[name="name"]') || form.querySelector('#bookingName');
    const phoneInput = form.querySelector('[name="phone"]') || form.querySelector('#bookingPhone');
    const emailInput = form.querySelector('[name="email"]') || form.querySelector('#bookingEmail');
    const vehicleInput = form.querySelector('[name="vehicle"]') || form.querySelector('#bookingVehicle');
    const serviceInput = form.querySelector('[name="service"]') || form.querySelector('#bookingService');
    const dateInput = form.querySelector('[name="date"]') || form.querySelector('#bookingDate');
    const timeInput = form.querySelector('[name="time"]') || form.querySelector('#bookingTime');
    const messageInput = form.querySelector('[name="message"]') || form.querySelector('#bookingMessage');
    const vehicleTypeSelect = form.querySelector('[name="vehicleType"]') || form.querySelector('#bookingVehicleType');

    // Values
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const vehicle = vehicleInput ? vehicleInput.value.trim() : '';
    const service = serviceInput ? serviceInput.value : '';
    const date = dateInput ? dateInput.value : '';
    const time = timeInput ? timeInput.value : '';
    const message = messageInput ? messageInput.value.trim() : '';
    const vehicleType = vehicleTypeSelect ? vehicleTypeSelect.value : 'sedan';

    // Simple Validation
    if (!name || !phone || !vehicle || !service || !date) {
        showFormAlert(form, 'Please fill in all required fields.', 'error');
        return;
    }

    // Check date (must not be in the past)
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
        showFormAlert(form, 'Appointment date cannot be in the past.', 'error');
        if (dateInput) dateInput.classList.add('shake-input');
        setTimeout(() => dateInput && dateInput.classList.remove('shake-input'), 500);
        return;
    }

    // Create Booking Object
    const bookingId = 'KBK-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
        id: bookingId,
        name,
        phone,
        email,
        vehicle,
        vehicleType,
        service: getServiceDisplayName(service),
        date,
        time: time || '09:00',
        message: message || 'No additional remarks.',
        status: 'pending',
        cost: calculateMockCost(service, vehicleType),
        timestamp: new Date().toISOString()
    };

    // Save Booking to LocalStorage
    const existingBookings = JSON.parse(localStorage.getItem('kiboko_bookings')) || [];
    existingBookings.push(newBooking);
    localStorage.setItem('kiboko_bookings', JSON.stringify(existingBookings));

    // Save vehicle to user fleet automatically
    saveVehicleToProfile(name, phone, vehicle, vehicleType);

    // Show Success Alert
    showFormAlert(form, `Success! Your booking (ID: ${bookingId}) is scheduled. Redirecting to your dashboard...`, 'success');

    // Reset Form
    form.reset();

    // Auto log-in user with this name & phone and open dashboard
    setTimeout(() => {
        if (window.loginAndOpenDashboard) {
            window.loginAndOpenDashboard(name, phone);
        }
    }, 2000);
}

function showFormAlert(form, message, type) {
    // Remove existing alert
    const existingAlert = form.querySelector('.form-alert');
    if (existingAlert) existingAlert.remove();

    // Create new alert
    const alert = document.createElement('div');
    alert.className = `form-alert status-pill ${type === 'success' ? 'status-completed' : 'status-pending'}`;
    alert.style.display = 'block';
    alert.style.width = '100%';
    alert.style.padding = '12px';
    alert.style.marginBottom = '16px';
    alert.style.textAlign = 'center';
    alert.style.fontSize = '14px';
    alert.innerText = message;

    // Insert alert at the top of form
    form.insertBefore(alert, form.firstChild);

    // Clear error alert after 5 seconds
    if (type === 'error') {
        setTimeout(() => alert.remove(), 5000);
    }
}

function getServiceDisplayName(serviceValue) {
    const serviceNames = {
        'engine-repair': 'Engine Repair',
        'computer-diagnostics': 'Computer Diagnostics',
        'brake-services': 'Brake Services',
        'suspension-repair': 'Suspension Repair',
        'oil-change': 'Oil Change',
        'battery-services': 'Battery Services',
        'electrical-repairs': 'Electrical Repairs',
        'transmission-services': 'Transmission Services',
        'tire-services': 'Tire Services',
        'vehicle-inspection': 'Vehicle Inspection',
        'fleet-maintenance': 'Fleet Maintenance',
        'emergency-assistance': 'Emergency Assistance',
        'multiple': 'Multiple Selected Services'
    };
    return serviceNames[serviceValue] || serviceValue;
}

function calculateMockCost(service, vehicleType) {
    const baseRates = {
        'engine-repair': 800000,
        'computer-diagnostics': 60000,
        'brake-services': 120000,
        'suspension-repair': 300000,
        'oil-change': 150000,
        'battery-services': 280000,
        'electrical-repairs': 200000,
        'transmission-services': 600000,
        'tire-services': 80000,
        'vehicle-inspection': 80000,
        'fleet-maintenance': 1200000,
        'emergency-assistance': 200000,
        'multiple': 450000
    };
    
    const multipliers = {
        'sedan': 1.0,
        'suv': 1.25,
        'luxury': 1.55,
        'commercial': 1.35
    };

    const base = baseRates[service] || 150000;
    const mult = multipliers[vehicleType] || 1.0;
    const costTzs = Math.round(base * mult);
    return `TZS ${costTzs.toLocaleString()}`;
}

function saveVehicleToProfile(ownerName, ownerPhone, vehicleName, vehicleType) {
    const vehicles = JSON.parse(localStorage.getItem('kiboko_vehicles')) || [];
    
    // Check if vehicle already added
    const exists = vehicles.some(v => v.ownerPhone === ownerPhone && v.model.toLowerCase() === vehicleName.toLowerCase());
    
    if (!exists) {
        vehicles.push({
            id: 'VHC-' + Math.floor(1000 + Math.random() * 9000),
            ownerName,
            ownerPhone,
            model: vehicleName,
            type: vehicleType,
            health: 'good',
            lastService: new Date().toLocaleDateString()
        });
        localStorage.setItem('kiboko_vehicles', JSON.stringify(vehicles));
    }
}
