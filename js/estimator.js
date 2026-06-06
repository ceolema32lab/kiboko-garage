/* ==========================================================================
   KIBOKO GARAGE - VEHICLE SERVICE COST ESTIMATOR
   ========================================================================== */

const SERVICES_PRICING = {
    'engine-repair': { name: 'Engine Repair', minTzs: 350000, maxTzs: 2500000, minUsd: 140, maxUsd: 1000 },
    'computer-diagnostics': { name: 'Computer Diagnostics', minTzs: 50000, maxTzs: 80000, minUsd: 20, maxUsd: 32 },
    'brake-services': { name: 'Brake Services', minTzs: 80000, maxTzs: 250000, minUsd: 32, maxUsd: 100 },
    'suspension-repair': { name: 'Suspension Repair', minTzs: 150000, maxTzs: 800000, minUsd: 60, maxUsd: 320 },
    'oil-change': { name: 'Oil Change & Filter', minTzs: 120000, maxTzs: 280000, minUsd: 48, maxUsd: 112 },
    'battery-services': { name: 'Battery Replacement & Testing', minTzs: 220000, maxTzs: 450000, minUsd: 88, maxUsd: 180 },
    'electrical-repairs': { name: 'Electrical Repairs', minTzs: 100000, maxTzs: 600000, minUsd: 40, maxUsd: 240 },
    'transmission-services': { name: 'Transmission Maintenance', minTzs: 250000, maxTzs: 1500000, minUsd: 100, maxUsd: 600 },
    'tire-services': { name: 'Tire Fitting, Alignment & Balance', minTzs: 40000, maxTzs: 160000, minUsd: 16, maxUsd: 64 },
    'vehicle-inspection': { name: 'Comprehensive Safety Inspection', minTzs: 60000, maxTzs: 120000, minUsd: 24, maxUsd: 48 },
    'fleet-maintenance': { name: 'Fleet Maintenance Service', minTzs: 450000, maxTzs: 3000000, minUsd: 180, maxUsd: 1200 },
    'emergency-assistance': { name: 'Emergency Road Assistance Call-Out', minTzs: 150000, maxTzs: 350000, minUsd: 60, maxUsd: 140 }
};

const VEHICLE_MULTIPLIERS = {
    'sedan': 1.0,
    'suv': 1.25,
    'luxury': 1.55,
    'commercial': 1.35
};

document.addEventListener('DOMContentLoaded', () => {
    initCostEstimator();
});

function initCostEstimator() {
    const checkboxes = document.querySelectorAll('.estimator-checkbox');
    const vehicleTypeSelect = document.getElementById('estimatorVehicleType');
    const displayTzs = document.getElementById('estimatorPriceTzs');
    const displayUsd = document.getElementById('estimatorPriceUsd');
    const bookEstimateBtn = document.getElementById('bookEstimateBtn');
    
    if (!displayTzs || !displayUsd) return;

    // Toggle card styles when clicked
    checkboxes.forEach(cb => {
        const card = cb.closest('.estimator-checkbox-card');
        
        // Handle clicking the card itself
        if (card) {
            card.addEventListener('click', (e) => {
                if (e.target !== cb) {
                    cb.checked = !cb.checked;
                }
                updateCardStyle(cb, card);
                calculateEstimate();
            });
        }
        
        cb.addEventListener('change', () => {
            updateCardStyle(cb, card);
            calculateEstimate();
        });
    });

    if (vehicleTypeSelect) {
        vehicleTypeSelect.addEventListener('change', calculateEstimate);
    }

    if (bookEstimateBtn) {
        bookEstimateBtn.addEventListener('click', () => {
            const selectedServices = getSelectedServices();
            if (selectedServices.length === 0) {
                alert('Please select at least one service to book.');
                return;
            }
            
            // Populate Booking Form
            const bookingServiceInput = document.getElementById('bookingService');
            const bookingMessageInput = document.getElementById('bookingMessage');
            const bookingVehicleType = document.getElementById('bookingVehicleType');
            
            if (bookingServiceInput) {
                // Select matching option if single, otherwise custom
                if (selectedServices.length === 1) {
                    bookingServiceInput.value = selectedServices[0].id;
                } else {
                    bookingServiceInput.value = 'multiple';
                }
            }
            
            if (bookingMessageInput) {
                const names = selectedServices.map(s => s.name).join(', ');
                bookingMessageInput.value = `Estimated Services: ${names}. (Estimated Range: ${displayTzs.innerText} / ${displayUsd.innerText})`;
            }

            if (bookingVehicleType && vehicleTypeSelect) {
                bookingVehicleType.value = vehicleTypeSelect.value;
            }
            
            // Smooth scroll to contact/booking form
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    function updateCardStyle(checkbox, card) {
        if (!card) return;
        if (checkbox.checked) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    }

    function getSelectedServices() {
        const selected = [];
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const serviceId = cb.getAttribute('data-service');
                if (SERVICES_PRICING[serviceId]) {
                    selected.push({
                        id: serviceId,
                        name: SERVICES_PRICING[serviceId].name,
                        pricing: SERVICES_PRICING[serviceId]
                    });
                }
            }
        });
        return selected;
    }

    function calculateEstimate() {
        const selected = getSelectedServices();
        const multiplier = vehicleTypeSelect ? VEHICLE_MULTIPLIERS[vehicleTypeSelect.value] || 1.0 : 1.0;
        
        if (selected.length === 0) {
            displayTzs.innerText = 'TZS 0';
            displayUsd.innerText = '$0';
            return;
        }

        let totalMinTzs = 0;
        let totalMaxTzs = 0;
        let totalMinUsd = 0;
        let totalMaxUsd = 0;

        selected.forEach(s => {
            totalMinTzs += s.pricing.minTzs;
            totalMaxTzs += s.pricing.maxTzs;
            totalMinUsd += s.pricing.minUsd;
            totalMaxUsd += s.pricing.maxUsd;
        });

        // Apply vehicle modifiers
        totalMinTzs = Math.round(totalMinTzs * multiplier);
        totalMaxTzs = Math.round(totalMaxTzs * multiplier);
        totalMinUsd = Math.round(totalMinUsd * multiplier);
        totalMaxUsd = Math.round(totalMaxUsd * multiplier);

        // Format to display as a range
        const formattedTzs = `TZS ${formatNumber(totalMinTzs)} - ${formatNumber(totalMaxTzs)}`;
        const formattedUsd = `$${formatNumber(totalMinUsd)} - $${formatNumber(totalMaxUsd)}`;

        displayTzs.innerText = formattedTzs;
        displayUsd.innerText = formattedUsd;
    }

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\n))/g, ",");
    }

    // Initial calculation (defaulting to zero since nothing checked)
    calculateEstimate();
}
