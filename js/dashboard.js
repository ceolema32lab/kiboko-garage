/* ==========================================================================
   KIBOKO GARAGE - CUSTOMER & FLEET MANAGEMENT DASHBOARD
   ========================================================================== */

let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    const loginForm = document.getElementById('loginForm');
    const dbModal = document.getElementById('dashboardModal');
    const closeDbBtn = document.getElementById('closeDashboardBtn');
    const openDbBtn = document.getElementById('openDashboardBtn');
    const sidebarMenuItems = document.querySelectorAll('.db-menu-item');
    const panels = document.querySelectorAll('.db-panel-content');
    const logoutBtn = document.getElementById('logoutBtn');
    const addVehicleForm = document.getElementById('addVehicleForm');

    // Make login global so other modules can trigger it
    window.loginAndOpenDashboard = (name, phone) => {
        currentUser = { name, phone, email: '', isFleet: false };
        setupMockData(phone, name);
        renderDashboard();
        showDashboardModal();
    };

    if (openDbBtn) {
        openDbBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                renderDashboard();
                showDashboardModal();
            } else {
                showLoginPanel();
                showDashboardModal();
            }
        });
    }

    if (closeDbBtn) {
        closeDbBtn.addEventListener('click', hideDashboardModal);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneVal = document.getElementById('loginPhone').value.trim();
            const nameVal = document.getElementById('loginName').value.trim();
            const clientType = document.getElementById('loginType').value;
            
            if (!phoneVal || !nameVal) {
                alert('Please enter both name and phone number.');
                return;
            }

            currentUser = {
                name: nameVal,
                phone: phoneVal,
                email: '',
                isFleet: clientType === 'fleet'
            };

            setupMockData(phoneVal, nameVal, clientType === 'fleet');
            renderDashboard();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            showLoginPanel();
        });
    }

    // Sidebar navigation
    sidebarMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            const panelId = item.getAttribute('data-panel');
            
            sidebarMenuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');
            
            panels.forEach(panel => {
                if (panel.id === panelId) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Add Vehicle to Fleet/Profile Form
    if (addVehicleForm) {
        addVehicleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentUser) return;

            const modelInput = document.getElementById('vehicleModel');
            const licenseInput = document.getElementById('vehicleLicense');
            const healthSelect = document.getElementById('vehicleHealth');

            const model = modelInput ? modelInput.value.trim() : '';
            const license = licenseInput ? licenseInput.value.trim() : '';
            const health = healthSelect ? healthSelect.value : 'good';

            if (!model || !license) {
                alert('Please complete all vehicle fields.');
                return;
            }

            const vehicles = JSON.parse(localStorage.getItem('kiboko_vehicles')) || [];
            vehicles.push({
                id: 'VHC-' + Math.floor(1000 + Math.random() * 9000),
                ownerName: currentUser.name,
                ownerPhone: currentUser.phone,
                model: `${model} (${license})`,
                type: 'sedan',
                health: health,
                lastService: new Date().toLocaleDateString()
            });

            localStorage.setItem('kiboko_vehicles', JSON.stringify(vehicles));
            addVehicleForm.reset();
            
            // Re-render
            renderDashboard();
        });
    }
}

function showDashboardModal() {
    const overlay = document.getElementById('dashboardModal');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideDashboardModal() {
    const overlay = document.getElementById('dashboardModal');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showLoginPanel() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';
}

function hideLoginPanel() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'grid';
}

function setupMockData(phone, name, isFleet = false) {
    // Check if bookings exist, if not seed some mock history
    const bookings = JSON.parse(localStorage.getItem('kiboko_bookings')) || [];
    const userBookings = bookings.filter(b => b.phone === phone);
    
    if (userBookings.length === 0) {
        // Seed mock past booking
        const seedBooking = {
            id: 'KBK-872615',
            name: name,
            phone: phone,
            email: '',
            vehicle: isFleet ? 'Toyota Hilux' : 'Toyota Vanguard',
            vehicleType: isFleet ? 'commercial' : 'suv',
            service: 'Oil Change & Filter',
            date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days ago
            time: '10:00',
            message: 'Periodic maintenance.',
            status: 'completed',
            cost: 'TZS 180,000',
            timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        bookings.push(seedBooking);
        localStorage.setItem('kiboko_bookings', JSON.stringify(bookings));
    }

    // Seed mock vehicles
    const vehicles = JSON.parse(localStorage.getItem('kiboko_vehicles')) || [];
    const userVehicles = vehicles.filter(v => v.ownerPhone === phone);
    if (userVehicles.length === 0) {
        if (isFleet) {
            vehicles.push(
                { id: 'VHC-7281', ownerName: name, ownerPhone: phone, model: 'Toyota Hilux (T 829 DKA)', type: 'commercial', health: 'good', lastService: '05/05/2026' },
                { id: 'VHC-1928', ownerName: name, ownerPhone: phone, model: 'Mitsubishi Fuso (T 108 BBA)', type: 'commercial', health: 'warning', lastService: '04/12/2026' },
                { id: 'VHC-4829', ownerName: name, ownerPhone: phone, model: 'Toyota Hiace (T 392 AKU)', type: 'commercial', health: 'good', lastService: '05/20/2026' }
            );
        } else {
            vehicles.push(
                { id: 'VHC-3829', ownerName: name, ownerPhone: phone, model: 'Toyota Vanguard (T 402 CXD)', type: 'suv', health: 'good', lastService: '05/06/2026' }
            );
        }
        localStorage.setItem('kiboko_vehicles', JSON.stringify(vehicles));
    }
}

function renderDashboard() {
    if (!currentUser) return;
    
    hideLoginPanel();
    
    // Set Sidebar Details
    document.getElementById('dbProfileName').innerText = currentUser.name;
    document.getElementById('dbProfileType').innerText = currentUser.isFleet ? 'Corporate Fleet Manager' : 'Individual Client';
    document.getElementById('dbProfileInitial').innerText = currentUser.name.charAt(0).toUpperCase();

    // Fetch user bookings & vehicles
    const allBookings = JSON.parse(localStorage.getItem('kiboko_bookings')) || [];
    const userBookings = allBookings.filter(b => b.phone === currentUser.phone);
    
    const allVehicles = JSON.parse(localStorage.getItem('kiboko_vehicles')) || [];
    const userVehicles = allVehicles.filter(v => v.ownerPhone === currentUser.phone);

    // Update Overview Stats
    document.getElementById('dbStatVehicles').innerText = userVehicles.length;
    document.getElementById('dbStatPending').innerText = userBookings.filter(b => b.status === 'pending').length;
    document.getElementById('dbStatCompleted').innerText = userBookings.filter(b => b.status === 'completed').length;

    // Render Booking List Table
    renderBookingTable(userBookings);

    // Render Fleet Portal List
    renderFleetList(userVehicles);

    // Manage UI tab visibility (Show/hide Fleet portal tab menu option based on client type)
    const fleetTabMenuItem = document.querySelector('.db-menu-item[data-panel="dbFleet"]');
    if (fleetTabMenuItem) {
        if (currentUser.isFleet) {
            fleetTabMenuItem.style.display = 'flex';
        } else {
            // Keep it accessible but renamed to "My Vehicles"
            fleetTabMenuItem.style.display = 'flex';
            fleetTabMenuItem.querySelector('span').innerText = 'My Vehicles';
        }
    }
}

function renderBookingTable(bookings) {
    const tbody = document.getElementById('bookingTableBody');
    if (!tbody) return;

    if (bookings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No services scheduled yet.</td></tr>';
        return;
    }

    // Sort by timestamp descending
    bookings.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));

    tbody.innerHTML = bookings.map(b => {
        const statusClass = b.status === 'completed' ? 'status-completed' : 'status-pending';
        return `
            <tr>
                <td style="font-weight: 600; color: var(--accent-orange);">${b.id}</td>
                <td>${b.vehicle}</td>
                <td>${b.service}</td>
                <td>${b.date}</td>
                <td><span class="status-pill ${statusClass}">${b.status}</span></td>
                <td style="font-weight: 600;">${b.cost}</td>
            </tr>
        `;
    }).join('');
}

function renderFleetList(vehicles) {
    const container = document.getElementById('fleetVehicleContainer');
    if (!container) return;

    if (vehicles.length === 0) {
        container.innerHTML = '<div style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 20px;">No vehicles registered. Use the form below to register your vehicle.</div>';
        return;
    }

    container.innerHTML = vehicles.map(v => {
        let healthLabel = 'Healthy';
        let healthClass = 'health-good';
        if (v.health === 'warning') {
            healthLabel = 'Service Needed';
            healthClass = 'health-warning';
        } else if (v.health === 'danger') {
            healthLabel = 'Critical Alert';
            healthClass = 'health-danger';
        }
        
        return `
            <div class="fleet-vehicle-card">
                <h3>${v.model}</h3>
                <p>Vehicle ID: ${v.id}</p>
                <p>Last Serviced: ${v.lastService}</p>
                <div class="fleet-vehicle-health">
                    <span class="health-dot ${healthClass}"></span>
                    <span>Status: <strong>${healthLabel}</strong></span>
                </div>
            </div>
        `;
    }).join('');
}
