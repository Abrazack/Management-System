// System Configuration
const SYSTEM_CONFIG = {
    exchangeRates: { USD: 1, EUR: 0.93, JPY: 148.5 },
    currentUser: null,
    selectedRole: null,
    users: [
        { username: 'admin', password: 'admin123', role: 'admin', lastLogin: null },
        { username: 'manager', password: 'manager123', role: 'manager', lastLogin: null },
        { username: 'employee', password: 'employee123', role: 'employee', lastLogin: null }
    ],
    // ... rest of your configuration
};

// Authentication Functions
function selectRole() {
    const roleSelect = document.getElementById('roleSelect');
    SYSTEM_CONFIG.selectedRole = roleSelect.value;
    
    document.getElementById('rolePage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function login() {
    // ... login implementation
}

// ... all other JavaScript functions

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up form submissions
    document.getElementById('employeeForm')?.addEventListener('submit', saveEmployee);
    document.getElementById('inventoryForm')?.addEventListener('submit', saveInventory);
    // ... other event listeners
    
    // Initialize with default language
    updateLanguage(SYSTEM_CONFIG.settings.language);
});