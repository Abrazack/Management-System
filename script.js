// ======================
// SYSTEM CONFIGURATION
// ======================
const SYSTEM_CONFIG = {
    exchangeRates: { USD: 1, EUR: 0.93, JPY: 148.5 },
    currentUser: null,
    selectedRole: null,
    users: [
        { username: 'admin', password: 'admin123', role: 'admin', lastLogin: null },
        { username: 'manager', password: 'manager123', role: 'manager', lastLogin: null },
        { username: 'employee', password: 'employee123', role: 'employee', lastLogin: null }
    ],
    employees: [
        { 
            id: 1, 
            name: 'John Doe', 
            email: 'john@example.com', 
            phone: '555-0101',
            position: 'Manager', 
            department: 'Administration', 
            salary: 5000, 
            hireDate: '2022-01-15', 
            status: 'Active' 
        },
        { 
            id: 2, 
            name: 'Jane Smith', 
            email: 'jane@example.com', 
            phone: '555-0102',
            position: 'Sales Associate', 
            department: 'Sales', 
            salary: 3500, 
            hireDate: '2022-03-20', 
            status: 'Active' 
        }
    ],
    inventory: [
        { 
            id: 1, 
            name: 'Laptop', 
            category: 'Electronics', 
            sku: 'EL-1001', 
            description: '15-inch business laptop', 
            price: 999.99, 
            cost: 650.00, 
            quantity: 25, 
            reorderLevel: 5, 
            supplier: 'Tech Suppliers Inc.' 
        },
        { 
            id: 2, 
            name: 'T-Shirt', 
            category: 'Clothing', 
            sku: 'CL-2001', 
            description: 'Cotton crew neck t-shirt', 
            price: 19.99, 
            cost: 8.50, 
            quantity: 120, 
            reorderLevel: 30, 
            supplier: 'Fashion Wholesale' 
        }
    ],
    customers: [
        {
            id: 1,
            name: 'Acme Corp',
            email: 'contact@acme.com',
            phone: '555-0201',
            address: '123 Business Rd, City',
            type: 'Wholesale',
            totalPurchases: 12500.00,
            lastPurchase: '2023-05-15'
        },
        {
            id: 2,
            name: 'John Smith',
            email: 'john.smith@email.com',
            phone: '555-0202',
            address: '456 Home St, Town',
            type: 'VIP',
            totalPurchases: 850.50,
            lastPurchase: '2023-05-10'
        }
    ],
    sales: [
        {
            id: 1,
            date: '2023-05-15T10:30:00',
            customerId: 1,
            employeeId: 1,
            items: [
                { productId: 1, quantity: 5, price: 999.99 }
            ],
            paymentMethod: 'Bank Transfer',
            notes: 'Corporate order',
            total: 4999.95
        },
        {
            id: 2,
            date: '2023-05-10T14:15:00',
            customerId: 2,
            employeeId: 2,
            items: [
                { productId: 2, quantity: 3, price: 19.99 }
            ],
            paymentMethod: 'Credit Card',
            notes: '',
            total: 59.97
        }
    ],
    settings: {
        language: 'en',
        currency: 'USD',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: '12h',
        autoBackup: 'disabled',
        lastBackup: null
    },
    translations: {
        en: {
            select_role: "Select Role",
            welcome: "Welcome to Mhappy Store Management System",
            role: "Role",
            username: "Username",
            password: "Password",
            login: "Login",
            continue: "Continue",
            back: "Back",
            business_dashboard: "Business Dashboard",
            logged_in_as: "Logged in as:",
            settings: "Settings",
            logout: "Logout",
            dashboard: "Dashboard",
            employees: "Employees",
            inventory: "Inventory",
            sales: "Sales",
            customers: "Customers",
            reports: "Reports",
            overview: "Overview",
            manage_employees: "Manage Employees",
            add_employee: "Add Employee",
            name: "Name",
            email: "Email",
            position: "Position",
            department: "Department",
            salary: "Salary",
            status: "Status",
            actions: "Actions",
            manage_inventory: "Manage Inventory",
            add_product: "Add Product",
            product: "Product",
            category: "Category",
            stock: "Stock",
            price: "Price",
            cost: "Cost",
            supplier: "Supplier",
            sales_management: "Sales Management",
            add_sale: "New Sale",
            date: "Date",
            customer: "Customer",
            quantity: "Quantity",
            total: "Total",
            employee: "Employee",
            system_settings: "System Settings",
            user_management: "Users",
            security: "Security",
            localization: "Localization",
            manage_users: "Manage Users",
            add_user: "Add User",
            last_login: "Last Login",
            change_password: "Change Password",
            current_password: "Current Password",
            new_password: "New Password",
            confirm_password: "Confirm Password",
            update: "Update",
            localization_settings: "Localization Settings",
            language: "Language",
            currency: "Currency"
        },
        es: {
            select_role: "Seleccionar Rol",
            welcome: "Bienvenido al Sistema de Gestión de Tienda Mhappy",
            role: "Rol",
            username: "Usuario",
            password: "Contraseña",
            login: "Iniciar sesión",
            continue: "Continuar",
            back: "Atrás",
            business_dashboard: "Panel de Negocios",
            logged_in_as: "Conectado como:",
            settings: "Configuraciones",
            logout: "Cerrar sesión",
            dashboard: "Panel",
            employees: "Empleados",
            inventory: "Inventario",
            sales: "Ventas",
            customers: "Clientes",
            reports: "Reportes",
            overview: "Resumen",
            manage_employees: "Gestionar Empleados",
            add_employee: "Agregar Empleado",
            name: "Nombre",
            email: "Correo",
            position: "Posición",
            department: "Departamento",
            salary: "Salario",
            status: "Estado",
            actions: "Acciones",
            manage_inventory: "Gestionar Inventario",
            add_product: "Agregar Producto",
            product: "Producto",
            category: "Categoría",
            stock: "Existencias",
            price: "Precio",
            cost: "Costo",
            supplier: "Proveedor",
            sales_management: "Gestión de Ventas",
            add_sale: "Nueva Venta",
            date: "Fecha",
            customer: "Cliente",
            quantity: "Cantidad",
            total: "Total",
            employee: "Empleado",
            system_settings: "Configuraciones del Sistema",
            user_management: "Usuarios",
            security: "Seguridad",
            localization: "Localización",
            manage_users: "Gestionar Usuarios",
            add_user: "Agregar Usuario",
            last_login: "Último Inicio",
            change_password: "Cambiar Contraseña",
            current_password: "Contraseña Actual",
            new_password: "Nueva Contraseña",
            confirm_password: "Confirmar Contraseña",
            update: "Actualizar",
            localization_settings: "Configuraciones de Localización",
            language: "Idioma",
            currency: "Moneda"
        },
        fr: {
            select_role: "Sélectionner le Rôle",
            welcome: "Bienvenue dans le Système de Gestion de Magasin Mhappy",
            role: "Rôle",
            username: "Nom d'utilisateur",
            password: "Mot de passe",
            login: "Connexion",
            continue: "Continuer",
            back: "Retour",
            business_dashboard: "Tableau de Bord",
            logged_in_as: "Connecté en tant que:",
            settings: "Paramètres",
            logout: "Déconnexion",
            dashboard: "Tableau de Bord",
            employees: "Employés",
            inventory: "Inventaire",
            sales: "Ventes",
            customers: "Clients",
            reports: "Rapports",
            overview: "Aperçu",
            manage_employees: "Gérer les Employés",
            add_employee: "Ajouter Employé",
            name: "Nom",
            email: "Email",
            position: "Poste",
            department: "Département",
            salary: "Salaire",
            status: "Statut",
            actions: "Actions",
            manage_inventory: "Gérer l'Inventaire",
            add_product: "Ajouter Produit",
            product: "Produit",
            category: "Catégorie",
            stock: "Stock",
            price: "Prix",
            cost: "Coût",
            supplier: "Fournisseur",
            sales_management: "Gestion des Ventes",
            add_sale: "Nouvelle Vente",
            date: "Date",
            customer: "Client",
            quantity: "Quantité",
            total: "Total",
            employee: "Employé",
            system_settings: "Paramètres du Système",
            user_management: "Utilisateurs",
            security: "Sécurité",
            localization: "Localisation",
            manage_users: "Gérer les Utilisateurs",
            add_user: "Ajouter Utilisateur",
            last_login: "Dernière Connexion",
            change_password: "Changer le Mot de Passe",
            current_password: "Mot de Passe Actuel",
            new_password: "Nouveau Mot de Passe",
            confirm_password: "Confirmer le Mot de Passe",
            update: "Mettre à Jour",
            localization_settings: "Paramètres de Localisation",
            language: "Langue",
            currency: "Devise"
        }
    }
};

// ======================
// UTILITY FUNCTIONS
// ======================
function showNotification(message, isError = false) {
    const toast = document.getElementById('notificationToast');
    const messageElement = document.getElementById('notificationMessage');
    
    toast.className = isError ? 'error' : 'success';
    messageElement.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function formatDate(dateString, includeTime = false) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    };
    
    if (includeTime) {
        options.hour = '2-digit';
        options.minute = '2-digit';
    }
    
    return date.toLocaleDateString(SYSTEM_CONFIG.settings.language, options);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat(SYSTEM_CONFIG.settings.language, {
        style: 'currency',
        currency: SYSTEM_CONFIG.settings.currency
    }).format(amount * SYSTEM_CONFIG.exchangeRates[SYSTEM_CONFIG.settings.currency]);
}

function getNextId(items) {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showConfirmModal(title, message, callback) {
    document.getElementById('confirmModalTitle').textContent = title;
    document.getElementById('confirmModalMessage').textContent = message;
    document.getElementById('confirmModal').dataset.callback = callback.name;
    showModal('confirmModal');
}

function confirmAction(confirmed) {
    closeModal('confirmModal');
    if (confirmed) {
        const callbackName = document.getElementById('confirmModal').dataset.callback;
        window[callbackName]();
    }
}

function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('passwordStrength');
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    
    strengthBar.className = '';
    if (password.length === 0) {
        strengthBar.style.width = '0';
    } else {
        strengthBar.style.width = `${strength * 25}%`;
        strengthBar.classList.add(
            strength < 2 ? 'strength-weak' :
            strength < 4 ? 'strength-medium' : 'strength-strong'
        );
    }
}

// ======================
// AUTHENTICATION SYSTEM
// ======================
function selectRole() {
    const roleSelect = document.getElementById('roleSelect');
    SYSTEM_CONFIG.selectedRole = roleSelect.value;
    
    document.getElementById('rolePage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function goBackToRoleSelection() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('rolePage').classList.remove('hidden');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = SYSTEM_CONFIG.users.find(u => 
        u.username === username && 
        u.password === password && 
        u.role === SYSTEM_CONFIG.selectedRole
    );
    
    if (user) {
        SYSTEM_CONFIG.currentUser = user;
        user.lastLogin = new Date().toISOString();
        
        // Update UI
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('currentUser').textContent = user.username;
        document.getElementById('currentRole').textContent = `(${user.role})`;
        
        // Load dashboard
        loadDashboard();
        showNotification('Login successful!');
    } else {
        showNotification('Invalid username or password', true);
    }
}

function logout() {
    SYSTEM_CONFIG.currentUser = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// ======================
// DASHBOARD FUNCTIONS
// ======================
function loadDashboard() {
    updateDashboardStats();
    loadRecentSales();
    loadLowStockItems();
    setupNavigation();
}

function updateDashboardStats() {
    document.getElementById('totalEmployees').textContent = SYSTEM_CONFIG.employees.length;
    document.getElementById('totalProducts').textContent = SYSTEM_CONFIG.inventory.length;
    document.getElementById('totalSales').textContent = SYSTEM_CONFIG.sales.length;
    
    const totalRevenue = SYSTEM_CONFIG.sales.reduce((sum, sale) => sum + sale.total, 0);
    document.getElementById('totalRevenue').textContent = formatCurrency(totalRevenue);
}

function loadRecentSales() {
    const recentSales = [...SYSTEM_CONFIG.sales]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    
    const tbody = document.getElementById('recentSales');
    tbody.innerHTML = '';
    
    recentSales.forEach(sale => {
        const customer = SYSTEM_CONFIG.customers.find(c => c.id === sale.customerId);
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${formatDate(sale.date)}</td>
            <td>${customer ? customer.name : 'Unknown'}</td>
            <td>${formatCurrency(sale.total)}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function loadLowStockItems() {
    const lowStockItems = SYSTEM_CONFIG.inventory
        .filter(item => item.quantity <= item.reorderLevel)
        .slice(0, 5);
    
    const tbody = document.getElementById('lowStockItems');
    tbody.innerHTML = '';
    
    lowStockItems.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td class="${item.quantity < 3 ? 'danger' : 'warning'}">${item.quantity}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function setupNavigation() {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.remove('hidden');
            
            // Load section data
            switch(sectionId) {
                case 'employees':
                    loadEmployees();
                    break;
                case 'inventory':
                    loadInventory();
                    break;
                case 'sales':
                    loadSales();
                    break;
                case 'customers':
                    loadCustomers();
                    break;
                case 'reports':
                    // Reports are loaded when generated
                    break;
            }
        });
    });
    
    // Show dashboard by default
    document.getElementById('dashboard').classList.remove('hidden');
}

// ======================
// EMPLOYEE MANAGEMENT
// ======================
function loadEmployees() {
    const tbody = document.getElementById('employeeList');
    tbody.innerHTML = '';
    
    SYSTEM_CONFIG.employees.forEach(employee => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
            <td>${formatCurrency(employee.salary)}</td>
            <td>${employee.status}</td>
            <td>
                <button class="action-button edit" onclick="editEmployee(${employee.id})">Edit</button>
                <button class="action-button delete" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function showEmployeeForm(employeeId = null) {
    const form = document.getElementById('employeeForm');
    const modalTitle = document.getElementById('employeeModalTitle');
    
    if (employeeId) {
        // Edit mode
        const employee = SYSTEM_CONFIG.employees.find(e => e.id === employeeId);
        if (!employee) return;
        
        modalTitle.textContent = 'Edit Employee';
        document.getElementById('employeeId').value = employee.id;
        document.getElementById('employeeName').value = employee.name;
        document.getElementById('employeeEmail').value = employee.email;
        document.getElementById('employeePhone').value = employee.phone;
        document.getElementById('employeePosition').value = employee.position;
        document.getElementById('employeeDepartment').value = employee.department;
        document.getElementById('employeeSalary').value = employee.salary;
        document.getElementById('employeeHireDate').value = employee.hireDate;
        document.getElementById('employeeStatus').value = employee.status;
    } else {
        // Add mode
        modalTitle.textContent = 'Add Employee';
        form.reset();
        document.getElementById('employeeId').value = '';
        document.getElementById('employeeHireDate').value = new Date().toISOString().split('T')[0];
    }
    
    showModal('employeeModal');
}

function saveEmployee(event) {
    event.preventDefault();
    
    const form = document.getElementById('employeeForm');
    const employeeId = document.getElementById('employeeId').value;
    const employeeData = {
        id: employeeId ? parseInt(employeeId) : getNextId(SYSTEM_CONFIG.employees),
        name: document.getElementById('employeeName').value,
        email: document.getElementById('employeeEmail').value,
        phone: document.getElementById('employeePhone').value,
        position: document.getElementById('employeePosition').value,
        department: document.getElementById('employeeDepartment').value,
        salary: parseFloat(document.getElementById('employeeSalary').value),
        hireDate: document.getElementById('employeeHireDate').value,
        status: document.getElementById('employeeStatus').value
    };
    
    if (employeeId) {
        // Update existing employee
        const index = SYSTEM_CONFIG.employees.findIndex(e => e.id === parseInt(employeeId));
        if (index !== -1) {
            SYSTEM_CONFIG.employees[index] = employeeData;
            showNotification('Employee updated successfully!');
        }
    } else {
        // Add new employee
        SYSTEM_CONFIG.employees.push(employeeData);
        showNotification('Employee added successfully!');
    }
    
    closeModal('employeeModal');
    loadEmployees();
    updateDashboardStats();
}

function editEmployee(id) {
    showEmployeeForm(id);
}

function deleteEmployee(id) {
    showConfirmModal(
        'Delete Employee',
        'Are you sure you want to delete this employee?',
        () => {
            SYSTEM_CONFIG.employees = SYSTEM_CONFIG.employees.filter(e => e.id !== id);
            loadEmployees();
            updateDashboardStats();
            showNotification('Employee deleted successfully!');
        }
    );
}

function searchEmployees() {
    const searchTerm = document.getElementById('employeeSearch').value.toLowerCase();
    const filteredEmployees = SYSTEM_CONFIG.employees.filter(employee => 
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.email.toLowerCase().includes(searchTerm) ||
        employee.position.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm)
    );
    
    const tbody = document.getElementById('employeeList');
    tbody.innerHTML = '';
    
    filteredEmployees.forEach(employee => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
            <td>${formatCurrency(employee.salary)}</td>
            <td>${employee.status}</td>
            <td>
                <button class="action-button edit" onclick="editEmployee(${employee.id})">Edit</button>
                <button class="action-button delete" onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// ======================
// INVENTORY MANAGEMENT
// ======================
function loadInventory() {
    const tbody = document.getElementById('inventoryList');
    tbody.innerHTML = '';
    
    SYSTEM_CONFIG.inventory.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td class="${item.quantity <= item.reorderLevel ? 'danger' : ''}">${item.quantity}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>${formatCurrency(item.cost)}</td>
            <td>${item.supplier}</td>
            <td>
                <button class="action-button edit" onclick="editInventory(${item.id})">Edit</button>
                <button class="action-button delete" onclick="deleteInventory(${item.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function showInventoryForm(itemId = null) {
    const form = document.getElementById('inventoryForm');
    const modalTitle = document.getElementById('inventoryModalTitle');
    
    if (itemId) {
        // Edit mode
        const item = SYSTEM_CONFIG.inventory.find(i => i.id === itemId);
        if (!item) return;
        
        modalTitle.textContent = 'Edit Product';
        document.getElementById('inventoryId').value = item.id;
        document.getElementById('productName').value = item.name;
        document.getElementById('productCategory').value = item.category;
        document.getElementById('productSKU').value = item.sku;
        document.getElementById('productDescription').value = item.description;
        document.getElementById('productPrice').value = item.price;
        document.getElementById('productCost').value = item.cost;
        document.getElementById('productQuantity').value = item.quantity;
        document.getElementById('productReorderLevel').value = item.reorderLevel;
        document.getElementById('productSupplier').value = item.supplier;
    } else {
        // Add mode
        modalTitle.textContent = 'Add Product';
        form.reset();
        document.getElementById('inventoryId').value = '';
        document.getElementById('productQuantity').value = 0;
        document.getElementById('productReorderLevel').value = 5;
    }
    
    showModal('inventoryModal');
}

function saveInventory(event) {
    event.preventDefault();
    
    const form = document.getElementById('inventoryForm');
    const itemId = document.getElementById('inventoryId').value;
    const itemData = {
        id: itemId ? parseInt(itemId) : getNextId(SYSTEM_CONFIG.inventory),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        sku: document.getElementById('productSKU').value,
        description: document.getElementById('productDescription').value,
        price: parseFloat(document.getElementById('productPrice').value),
        cost: parseFloat(document.getElementById('productCost').value),
        quantity: parseInt(document.getElementById('productQuantity').value),
        reorderLevel: parseInt(document.getElementById('productReorderLevel').value),
        supplier: document.getElementById('productSupplier').value
    };
    
    if (itemId) {
        // Update existing item
        const index = SYSTEM_CONFIG.inventory.findIndex(i => i.id === parseInt(itemId));
        if (index !== -1) {
            SYSTEM_CONFIG.inventory[index] = itemData;
            showNotification('Product updated successfully!');
        }
    } else {
        // Add new item
        SYSTEM_CONFIG.inventory.push(itemData);
        showNotification('Product added successfully!');
    }
    
    closeModal('inventoryModal');
    loadInventory();
    updateDashboardStats();
    loadLowStockItems();
}

function editInventory(id) {
    showInventoryForm(id);
}

function deleteInventory(id) {
    showConfirmModal(
        'Delete Product',
        'Are you sure you want to delete this product?',
        () => {
            SYSTEM_CONFIG.inventory = SYSTEM_CONFIG.inventory.filter(i => i.id !== id);
            loadInventory();
            updateDashboardStats();
            showNotification('Product deleted successfully!');
        }
    );
}

function searchInventory() {
    const searchTerm = document.getElementById('inventorySearch').value.toLowerCase();
    const filteredInventory = SYSTEM_CONFIG.inventory.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.sku.toLowerCase().includes(searchTerm) ||
        (item.supplier && item.supplier.toLowerCase().includes(searchTerm))
    );
    
    const tbody = document.getElementById('inventoryList');
    tbody.innerHTML = '';
    
    filteredInventory.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td class="${item.quantity <= item.reorderLevel ? 'danger' : ''}">${item.quantity}</td>
            <td>${formatCurrency(item.price)}</td>
            <td>${formatCurrency(item.cost)}</td>
            <td>${item.supplier}</td>
            <td>
                <button class="action-button edit" onclick="editInventory(${item.id})">Edit</button>
                <button class="action-button delete" onclick="deleteInventory(${item.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function showImportModal() {
    showModal('importModal');
}

function processImport() {
    const fileInput = document.getElementById('importFile');
    const importType = document.getElementById('importType').value;
    
    if (fileInput.files.length === 0) {
        showNotification('Please select a file to import', true);
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const csvData = e.target.result;
            const lines = csvData.split('\n');
            const headers = lines[0].split(',');
            
            let importedItems = [];
            
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '') continue;
                
                const values = lines[i].split(',');
                let item = {};
                
                for (let j = 0; j < headers.length; j++) {
                    item[headers[j].trim()] = values[j] ? values[j].trim() : '';
                }
                
                importedItems.push(item);
            }
            
            // Process imported items based on type
            switch(importType) {
                case 'inventory':
                    importedItems.forEach(item => {
                        const newItem = {
                            id: getNextId(SYSTEM_CONFIG.inventory),
                            name: item.name || 'Unknown',
                            category: item.category || 'Uncategorized',
                            sku: item.sku || '',
                            description: item.description || '',
                            price: parseFloat(item.price) || 0,
                            cost: parseFloat(item.cost) || 0,
                            quantity: parseInt(item.quantity) || 0,
                            reorderLevel: parseInt(item.reorderLevel) || 5,
                            supplier: item.supplier || ''
                        };
                        SYSTEM_CONFIG.inventory.push(newItem);
                    });
                    showNotification(`${importedItems.length} inventory items imported successfully!`);
                    loadInventory();
                    break;
                    
                case 'customers':
                    importedItems.forEach(item => {
                        const newCustomer = {
                            id: getNextId(SYSTEM_CONFIG.customers),
                            name: item.name || 'Unknown',
                            email: item.email || '',
                            phone: item.phone || '',
                            address: item.address || '',
                            type: item.type || 'Regular',
                            totalPurchases: parseFloat(item.totalPurchases) || 0,
                            lastPurchase: item.lastPurchase || ''
                        };
                        SYSTEM_CONFIG.customers.push(newCustomer);
                    });
                    showNotification(`${importedItems.length} customers imported successfully!`);
                    loadCustomers();
                    break;
                    
                case 'employees':
                    importedItems.forEach(item => {
                        const newEmployee = {
                            id: getNextId(SYSTEM_CONFIG.employees),
                            name: item.name || 'Unknown',
                            email: item.email || '',
                            phone: item.phone || '',
                            position: item.position || '',
                            department: item.department || '',
                            salary: parseFloat(item.salary) || 0,
                            hireDate: item.hireDate || new Date().toISOString().split('T')[0],
                            status: item.status || 'Active'
                        };
                        SYSTEM_CONFIG.employees.push(newEmployee);
                    });
                    showNotification(`${importedItems.length} employees imported successfully!`);
                    loadEmployees();
                    break;
            }
            
            closeModal('importModal');
            updateDashboardStats();
            
        } catch (error) {
            showNotification('Error importing file: ' + error.message, true);
        }
    };
    
    reader.readAsText(file);
}

function exportInventory() {
    const csvContent = [
        ['Name', 'Category', 'SKU', 'Description', 'Price', 'Cost', 'Quantity', 'Reorder Level', 'Supplier'],
        ...SYSTEM_CONFIG.inventory.map(item => [
            item.name,
            item.category,
            item.sku,
            item.description,
            item.price,
            item.cost,
            item.quantity,
            item.reorderLevel,
            item.supplier
        ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'inventory_export.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Inventory exported successfully!');
}

// ======================
// SALES MANAGEMENT
// ======================
function loadSales() {
    const tbody = document.getElementById('salesList');
    tbody.innerHTML = '';
    
    SYSTEM_CONFIG.sales.forEach(sale => {
        const customer = SYSTEM_CONFIG.customers.find(c => c.id === sale.customerId);
        const employee = SYSTEM_CONFIG.employees.find(e => e.id === sale.employeeId);
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${sale.id}</td>
            <td>${formatDate(sale.date)}</td>
            <td>${customer ? customer.name : 'Unknown'}</td>
            <td>${sale.items.length > 0 ? 
                `${sale.items[0].productId}: ${SYSTEM_CONFIG.inventory.find(p => p.id === sale.items[0].productId)?.name || 'Unknown'}` : 
                'No items'}</td>
            <td>${sale.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
            <td>${formatCurrency(sale.total)}</td>
            <td>${employee ? employee.name : 'Unknown'}</td>
            <td>
                <button class="action-button info" onclick="viewSale(${sale.id})">View</button>
                <button class="action-button delete" onclick="deleteSale(${sale.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Update total income
    const totalIncome = SYSTEM_CONFIG.sales.reduce((sum, sale) => sum + sale.total, 0);
    document.getElementById('totalIncome').textContent = formatCurrency(totalIncome);
}

function showSaleForm(saleId = null) {
    const form = document.getElementById('saleForm');
    const modalTitle = document.getElementById('saleModalTitle');
    
    // Populate customer dropdown
    const customerSelect = document.getElementById('saleCustomer');
    customerSelect.innerHTML = '<option value="">Select Customer</option>';
    SYSTEM_CONFIG.customers.forEach(customer => {
        customerSelect.innerHTML += `<option value="${customer.id}">${customer.name}</option>`;
    });
    
    // Populate employee dropdown
    const employeeSelect = document.getElementById('saleEmployee');
    employeeSelect.innerHTML = '<option value="">Select Employee</option>';
    SYSTEM_CONFIG.employees.forEach(employee => {
        employeeSelect.innerHTML += `<option value="${employee.id}">${employee.name}</option>`;
    });
    
    // Populate product dropdown (for items)
    const productSelects = document.querySelectorAll('.product-select');
    productSelects.forEach(select => {
        select.innerHTML = '<option value="">Select Product</option>';
        SYSTEM_CONFIG.inventory.forEach(product => {
            select.innerHTML += `<option value="${product.id}" data-price="${product.price}">${product.name} (${formatCurrency(product.price)})</option>`;
        });
        
        // Add event listener for price update
        select.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const priceInput = this.closest('.sale-item').querySelector('.product-price');
            priceInput.value = selectedOption.dataset.price || 0;
            updateSaleTotal();
        });
    });
    
    if (saleId) {
        // Edit mode
        const sale = SYSTEM_CONFIG.sales.find(s => s.id === saleId);
        if (!sale) return;
        
        modalTitle.textContent = 'Edit Sale';
        document.getElementById('saleId').value = sale.id;
        document.getElementById('saleCustomer').value = sale.customerId;
        document.getElementById('saleDate').value = sale.date.replace(' ', 'T');
        document.getElementById('saleEmployee').value = sale.employeeId;
        document.getElementById('salePaymentMethod').value = sale.paymentMethod;
        document.getElementById('saleNotes').value = sale.notes;
        
        // Clear existing items
        const saleItemsContainer = document.getElementById('saleItems');
        saleItemsContainer.innerHTML = '';
        
        // Add sale items
        sale.items.forEach(item => {
            addSaleItem(item.productId, item.quantity, item.price);
        });
        
        updateSaleTotal();
    } else {
        // Add mode
        modalTitle.textContent = 'New Sale';
        form.reset();
        document.getElementById('saleId').value = '';
        document.getElementById('saleDate').value = new Date().toISOString().slice(0, 16);
        
        // Clear and add one empty item
        const saleItemsContainer = document.getElementById('saleItems');
        saleItemsContainer.innerHTML = '';
        addSaleItem();
    }
    
    showModal('saleModal');
}

function addSaleItem(productId = null, quantity = 1, price = 0) {
    const saleItemsContainer = document.getElementById('saleItems');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'sale-item flex gap-1 mb-1';
    
    // Product select
    const productSelect = document.createElement('select');
    productSelect.className = 'product-select';
    productSelect.required = true;
    productSelect.innerHTML = '<option value="">Select Product</option>';
    
    SYSTEM_CONFIG.inventory.forEach(product => {
        productSelect.innerHTML += `<option value="${product.id}" data-price="${product.price}" ${productId === product.id ? 'selected' : ''}>${product.name} (${formatCurrency(product.price)})</option>`;
    });
    
    // Quantity input
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.className = 'product-quantity';
    quantityInput.min = '1';
    quantityInput.value = quantity;
    quantityInput.required = true;
    quantityInput.addEventListener('input', updateSaleTotal);
    
    // Price input
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.className = 'product-price';
    priceInput.readOnly = true;
    priceInput.value = price;
    
    // Remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'action-button danger';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        this.closest('.sale-item').remove();
        updateSaleTotal();
    };
    
    // Add event listener for product select change
    productSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        priceInput.value = selectedOption.dataset.price || 0;
        updateSaleTotal();
    });
    
    // Append elements
    itemDiv.appendChild(productSelect);
    itemDiv.appendChild(quantityInput);
    itemDiv.appendChild(priceInput);
    itemDiv.appendChild(removeButton);
    
    saleItemsContainer.appendChild(itemDiv);
}

function updateSaleTotal() {
    let total = 0;
    
    document.querySelectorAll('.sale-item').forEach(item => {
        const quantity = parseFloat(item.querySelector('.product-quantity').value) || 0;
        const price = parseFloat(item.querySelector('.product-price').value) || 0;
        total += quantity * price;
    });
    
    document.getElementById('saleTotal').value = total.toFixed(2);
}

function removeSaleItem(button) {
    button.closest('.sale-item').remove();
    updateSaleTotal();
}

function saveSale(event) {
    event.preventDefault();
    
    const form = document.getElementById('saleForm');
    const saleId = document.getElementById('saleId').value;
    
    // Collect sale items
    const items = [];
    document.querySelectorAll('.sale-item').forEach(item => {
        const productId = parseInt(item.querySelector('.product-select').value);
        const quantity = parseInt(item.querySelector('.product-quantity').value);
        const price = parseFloat(item.querySelector('.product-price').value);
        
        if (productId && quantity && price) {
            items.push({ productId, quantity, price });
        }
    });
    
    if (items.length === 0) {
        showNotification('Please add at least one product to the sale', true);
        return;
    }
    
    const saleData = {
        id: saleId ? parseInt(saleId) : getNextId(SYSTEM_CONFIG.sales),
        date: document.getElementById('saleDate').value,
        customerId: parseInt(document.getElementById('saleCustomer').value),
        employeeId: parseInt(document.getElementById('saleEmployee').value),
        items: items,
        paymentMethod: document.getElementById('salePaymentMethod').value,
        notes: document.getElementById('saleNotes').value,
        total: parseFloat(document.getElementById('saleTotal').value)
    };
    
    // Update inventory quantities
    items.forEach(item => {
        const product = SYSTEM_CONFIG.inventory.find(p => p.id === item.productId);
        if (product) {
            product.quantity -= item.quantity;
            if (product.quantity < 0) product.quantity = 0;
        }
    });
    
    if (saleId) {
        // Update existing sale
        const index = SYSTEM_CONFIG.sales.findIndex(s => s.id === parseInt(saleId));
        if (index !== -1) {
            SYSTEM_CONFIG.sales[index] = saleData;
            showNotification('Sale updated successfully!');
        }
    } else {
        // Add new sale
        SYSTEM_CONFIG.sales.push(saleData);
        
        // Update customer's last purchase and total
        const customer = SYSTEM_CONFIG.customers.find(c => c.id === saleData.customerId);
        if (customer) {
            customer.lastPurchase = saleData.date.split('T')[0];
            customer.totalPurchases += saleData.total;
        }
        
        showNotification('Sale completed successfully!');
    }
    
    closeModal('saleModal');
    loadSales();
    loadInventory();
    updateDashboardStats();
    loadLowStockItems();
}

function viewSale(id) {
    const sale = SYSTEM_CONFIG.sales.find(s => s.id === id);
    if (!sale) return;
    
    const customer = SYSTEM_CONFIG.customers.find(c => c.id === sale.customerId);
    const employee = SYSTEM_CONFIG.employees.find(e => e.id === sale.employeeId);
    
    let message = `
        <h3>Sale #${sale.id}</h3>
        <p><strong>Date:</strong> ${formatDate(sale.date, true)}</p>
        <p><strong>Customer:</strong> ${customer ? customer.name : 'Unknown'}</p>
        <p><strong>Employee:</strong> ${employee ? employee.name : 'Unknown'}</p>
        <p><strong>Payment Method:</strong> ${sale.paymentMethod}</p>
        
        <h4>Items</h4>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    sale.items.forEach(item => {
        const product = SYSTEM_CONFIG.inventory.find(p => p.id === item.productId);
        message += `
            <tr>
                <td>${product ? product.name : 'Unknown'} (ID: ${item.productId})</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
            </tr>
        `;
    });
    
    message += `
            </tbody>
        </table>
        <p><strong>Total:</strong> ${formatCurrency(sale.total)}</p>
        <p><strong>Notes:</strong> ${sale.notes || 'None'}</p>
    `;
    
    document.getElementById('confirmModalTitle').textContent = 'Sale Details';
    document.getElementById('confirmModalMessage').innerHTML = message;
    document.getElementById('confirmModal').dataset.callback = '';
    
    const confirmButton = document.querySelector('#confirmModal button.danger');
    confirmButton.style.display = 'none';
    
    showModal('confirmModal');
}

function deleteSale(id) {
    showConfirmModal(
        'Delete Sale',
        'Are you sure you want to delete this sale? This action cannot be undone.',
        () => {
            SYSTEM_CONFIG.sales = SYSTEM_CONFIG.sales.filter(s => s.id !== id);
            loadSales();
            updateDashboardStats();
            showNotification('Sale deleted successfully!');
        }
    );
}

function filterSales() {
    const startDate = document.getElementById('salesStartDate').value;
    const endDate = document.getElementById('salesEndDate').value;
    
    if (!startDate || !endDate) {
        showNotification('Please select both start and end dates', true);
        return;
    }
    
    const filteredSales = SYSTEM_CONFIG.sales.filter(sale => {
        const saleDate = new Date(sale.date).toISOString().split('T')[0];
        return saleDate >= startDate && saleDate <= endDate;
    });
    
    const tbody = document.getElementById('salesList');
    tbody.innerHTML = '';
    
    filteredSales.forEach(sale => {
        const customer = SYSTEM_CONFIG.customers.find(c => c.id === sale.customerId);
        const employee = SYSTEM_CONFIG.employees.find(e => e.id === sale.employeeId);
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${sale.id}</td>
            <td>${formatDate(sale.date)}</td>
            <td>${customer ? customer.name : 'Unknown'}</td>
            <td>${sale.items.length > 0 ? 
                `${sale.items[0].productId}: ${SYSTEM_CONFIG.inventory.find(p => p.id === sale.items[0].productId)?.name || 'Unknown'}` : 
                'No items'}</td>
            <td>${sale.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
            <td>${formatCurrency(sale.total)}</td>
            <td>${employee ? employee.name : 'Unknown'}</td>
            <td>
                <button class="action-button info" onclick="viewSale(${sale.id})">View</button>
                <button class="action-button delete" onclick="deleteSale(${sale.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Update total income for filtered sales
    const filteredTotal = filteredSales.reduce((sum, sale) => sum + sale.total, 0);
    document.getElementById('totalIncome').textContent = formatCurrency(filteredTotal);
}

function resetSalesFilter() {
    document.getElementById('salesStartDate').value = '';
    document.getElementById('salesEndDate').value = '';
    loadSales();
}

// ======================
// CUSTOMER MANAGEMENT
// ======================
function loadCustomers() {
    const tbody = document.getElementById('customerList');
    tbody.innerHTML = '';
    
    SYSTEM_CONFIG.customers.forEach(customer => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
            <td>${formatCurrency(customer.totalPurchases)}</td>
            <td>${customer.lastPurchase ? formatDate(customer.lastPurchase) : 'Never'}</td>
            <td>
                <button class="action-button edit" onclick="editCustomer(${customer.id})">Edit</button>
                <button class="action-button delete" onclick="deleteCustomer(${customer.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function showCustomerForm(customerId = null) {
    const form = document.getElementById('customerForm');
    const modalTitle = document.getElementById('customerModalTitle');
    
    if (customerId) {
        // Edit mode
        const customer = SYSTEM_CONFIG.customers.find(c => c.id === customerId);
        if (!customer) return;
        
        modalTitle.textContent = 'Edit Customer';
        document.getElementById('customerId').value = customer.id;
        document.getElementById('customerName').value = customer.name;
        document.getElementById('customerEmail').value = customer.email;
        document.getElementById('customerPhone').value = customer.phone;
        document.getElementById('customerAddress').value = customer.address;
        document.getElementById('customerType').value = customer.type;
    } else {
        // Add mode
        modalTitle.textContent = 'Add Customer';
        form.reset();
        document.getElementById('customerId').value = '';
    }
    
    showModal('customerModal');
}

function saveCustomer(event) {
    event.preventDefault();
    
    const form = document.getElementById('customerForm');
    const customerId = document.getElementById('customerId').value;
    const customerData = {
        id: customerId ? parseInt(customerId) : getNextId(SYSTEM_CONFIG.customers),
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value,
        type: document.getElementById('customerType').value,
        totalPurchases: customerId ? 
            SYSTEM_CONFIG.customers.find(c => c.id === parseInt(customerId)).totalPurchases : 0,
        lastPurchase: customerId ? 
            SYSTEM_CONFIG.customers.find(c => c.id === parseInt(customerId)).lastPurchase : null
    };
    
    if (customerId) {
        // Update existing customer
        const index = SYSTEM_CONFIG.customers.findIndex(c => c.id === parseInt(customerId));
        if (index !== -1) {
            SYSTEM_CONFIG.customers[index] = customerData;
            showNotification('Customer updated successfully!');
        }
    } else {
        // Add new customer
        SYSTEM_CONFIG.customers.push(customerData);
        showNotification('Customer added successfully!');
    }
    
    closeModal('customerModal');
    loadCustomers();
}

function editCustomer(id) {
    showCustomerForm(id);
}

function deleteCustomer(id) {
    showConfirmModal(
        'Delete Customer',
        'Are you sure you want to delete this customer? All their sales records will be kept but marked as "Unknown" customer.',
        () => {
            SYSTEM_CONFIG.customers = SYSTEM_CONFIG.customers.filter(c => c.id !== id);
            
            // Update sales with this customer to have null customerId
            SYSTEM_CONFIG.sales.forEach(sale => {
                if (sale.customerId === id) {
                    sale.customerId = null;
                }
            });
            
            loadCustomers();
            loadSales();
            showNotification('Customer deleted successfully!');
        }
    );
}

function searchCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    const filteredCustomers = SYSTEM_CONFIG.customers.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        (customer.phone && customer.phone.toLowerCase().includes(searchTerm)) ||
        (customer.address && customer.address.toLowerCase().includes(searchTerm))
    );
    
    const tbody = document.getElementById('customerList');
    tbody.innerHTML = '';
    
    filteredCustomers.forEach(customer => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
            <td>${formatCurrency(customer.totalPurchases)}</td>
            <td>${customer.lastPurchase ? formatDate(customer.lastPurchase) : 'Never'}</td>
            <td>
                <button class="action-button edit" onclick="editCustomer(${customer.id})">Edit</button>
                <button class="action-button delete" onclick="deleteCustomer(${customer.id})">Delete</button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// ======================
// REPORTING SYSTEM
// ======================
function generateReport() {
    const reportType = document.getElementById('reportType').value;
    const startDate = document.getElementById('reportStartDate').value;
    const endDate = document.getElementById('reportEndDate').value;
    
    let reportContent = '';
    
    switch(reportType) {
        case 'sales':
            reportContent = generateSalesReport(startDate, endDate);
            break;
        case 'inventory':
            reportContent = generateInventoryReport();
            break;
        case 'employee':
            reportContent = generateEmployeeReport();
            break;
        case 'customer':
            reportContent = generateCustomerReport(startDate, endDate);
            break;
    }
    
    document.getElementById('reportResults').innerHTML = reportContent;
}

function generateSalesReport(startDate, endDate) {
    let filteredSales = [...SYSTEM_CONFIG.sales];
    
    if (startDate && endDate) {
        filteredSales = filteredSales.filter(sale => {
            const saleDate = new Date(sale.date).toISOString().split('T')[0];
            return saleDate >= startDate && saleDate <= endDate;
        });
    }
    
    const totalRevenue = filteredSales.reduce((sum, sale) => sum + sale.total, 0);
    const totalItemsSold = filteredSales.reduce((sum, sale) => 
        sum + sale.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);
    
    let reportHTML = `
        <h3>Sales Report</h3>
        ${startDate && endDate ? `<p>Date Range: ${formatDate(startDate)} to ${formatDate(endDate)}</p>` : ''}
        <p>Total Sales: ${filteredSales.length}</p>
        <p>Total Revenue: ${formatCurrency(totalRevenue)}</p>
        <p>Total Items Sold: ${totalItemsSold}</p>
        
        <h4>Sales by Employee</h4>
        <table>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Number of Sales</th>
                    <th>Total Revenue</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Group sales by employee
    const salesByEmployee = {};
    filteredSales.forEach(sale => {
        const employee = SYSTEM_CONFIG.employees.find(e => e.id === sale.employeeId);
        const employeeName = employee ? employee.name : 'Unknown';
        
        if (!salesByEmployee[employeeName]) {
            salesByEmployee[employeeName] = {
                count: 0,
                total: 0
            };
        }
        
        salesByEmployee[employeeName].count++;
        salesByEmployee[employeeName].total += sale.total;
    });
    
    // Add rows for each employee
    Object.entries(salesByEmployee).forEach(([employee, stats]) => {
        reportHTML += `
            <tr>
                <td>${employee}</td>
                <td>${stats.count}</td>
                <td>${formatCurrency(stats.total)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
        
        <h4>Top Selling Products</h4>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity Sold</th>
                    <th>Total Revenue</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Group sales by product
    const salesByProduct = {};
    filteredSales.forEach(sale => {
        sale.items.forEach(item => {
            const product = SYSTEM_CONFIG.inventory.find(p => p.id === item.productId);
            const productName = product ? product.name : `Product ID ${item.productId}`;
            
            if (!salesByProduct[productName]) {
                salesByProduct[productName] = {
                    quantity: 0,
                    revenue: 0
                };
            }
            
            salesByProduct[productName].quantity += item.quantity;
            salesByProduct[productName].revenue += item.quantity * item.price;
        });
    });
    
    // Sort by quantity sold (descending)
    const sortedProducts = Object.entries(salesByProduct)
        .sort((a, b) => b[1].quantity - a[1].quantity)
        .slice(0, 10); // Top 10
    
    // Add rows for each product
    sortedProducts.forEach(([product, stats]) => {
        reportHTML += `
            <tr>
                <td>${product}</td>
                <td>${stats.quantity}</td>
                <td>${formatCurrency(stats.revenue)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
    `;
    
    return reportHTML;
}

function generateInventoryReport() {
    const totalInventoryValue = SYSTEM_CONFIG.inventory.reduce(
        (sum, item) => sum + (item.price * item.quantity), 0);
    
    const totalInventoryCost = SYSTEM_CONFIG.inventory.reduce(
        (sum, item) => sum + (item.cost * item.quantity), 0);
    
    const lowStockItems = SYSTEM_CONFIG.inventory.filter(
        item => item.quantity <= item.reorderLevel);
    
    let reportHTML = `
        <h3>Inventory Report</h3>
        <p>Total Products: ${SYSTEM_CONFIG.inventory.length}</p>
        <p>Total Inventory Value: ${formatCurrency(totalInventoryValue)}</p>
        <p>Total Inventory Cost: ${formatCurrency(totalInventoryCost)}</p>
        <p>Potential Profit: ${formatCurrency(totalInventoryValue - totalInventoryCost)}</p>
        <p>Low Stock Items (${lowStockItems.length}):</p>
        
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Current Stock</th>
                    <th>Reorder Level</th>
                    <th>Price</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    lowStockItems.forEach(item => {
        reportHTML += `
            <tr>
                <td>${item.name}</td>
                <td class="danger">${item.quantity}</td>
                <td>${item.reorderLevel}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
        
        <h4>Inventory by Category</h4>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Number of Products</th>
                    <th>Total Value</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Group inventory by category
    const inventoryByCategory = {};
    SYSTEM_CONFIG.inventory.forEach(item => {
        if (!inventoryByCategory[item.category]) {
            inventoryByCategory[item.category] = {
                count: 0,
                value: 0
            };
        }
        
        inventoryByCategory[item.category].count++;
        inventoryByCategory[item.category].value += item.price * item.quantity;
    });
    
    // Add rows for each category
    Object.entries(inventoryByCategory).forEach(([category, stats]) => {
        reportHTML += `
            <tr>
                <td>${category}</td>
                <td>${stats.count}</td>
                <td>${formatCurrency(stats.value)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
    `;
    
    return reportHTML;
}

function generateEmployeeReport() {
    let reportHTML = `
        <h3>Employee Performance Report</h3>
        <p>Total Employees: ${SYSTEM_CONFIG.employees.length}</p>
        
        <h4>Sales Performance</h4>
        <table>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Position</th>
                    <th>Number of Sales</th>
                    <th>Total Revenue</th>
                    <th>Average Sale</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Group sales by employee
    const salesByEmployee = {};
    SYSTEM_CONFIG.sales.forEach(sale => {
        const employee = SYSTEM_CONFIG.employees.find(e => e.id === sale.employeeId);
        if (!employee) return;
        
        if (!salesByEmployee[employee.id]) {
            salesByEmployee[employee.id] = {
                name: employee.name,
                position: employee.position,
                count: 0,
                total: 0
            };
        }
        
        salesByEmployee[employee.id].count++;
        salesByEmployee[employee.id].total += sale.total;
    });
    
    // Add rows for each employee
    Object.values(salesByEmployee).forEach(employee => {
        reportHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.count}</td>
                <td>${formatCurrency(employee.total)}</td>
                <td>${formatCurrency(employee.total / employee.count)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
        
        <h4>Employee List</h4>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    SYSTEM_CONFIG.employees.forEach(employee => {
        reportHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.department}</td>
                <td>${formatCurrency(employee.salary)}</td>
                <td>${employee.status}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
    `;
    
    return reportHTML;
}

function generateCustomerReport(startDate, endDate) {
    let filteredCustomers = [...SYSTEM_CONFIG.customers];
    
    if (startDate && endDate) {
        filteredCustomers = filteredCustomers.filter(customer => 
            customer.lastPurchase && 
            customer.lastPurchase >= startDate && 
            customer.lastPurchase <= endDate
        );
    }
    
    const activeCustomers = filteredCustomers.filter(c => c.totalPurchases > 0).length;
    const totalRevenue = filteredCustomers.reduce((sum, customer) => sum + customer.totalPurchases, 0);
    
    let reportHTML = `
        <h3>Customer Activity Report</h3>
        ${startDate && endDate ? `<p>Date Range: ${formatDate(startDate)} to ${formatDate(endDate)}</p>` : ''}
        <p>Total Customers: ${filteredCustomers.length}</p>
        <p>Active Customers: ${activeCustomers}</p>
        <p>Total Revenue: ${formatCurrency(totalRevenue)}</p>
        
        <h4>Customer Types</h4>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Count</th>
                    <th>Total Purchases</th>
                    <th>Average Purchase</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Group customers by type
    const customersByType = {};
    filteredCustomers.forEach(customer => {
        if (!customersByType[customer.type]) {
            customersByType[customer.type] = {
                count: 0,
                total: 0
            };
        }
        
        customersByType[customer.type].count++;
        customersByType[customer.type].total += customer.totalPurchases;
    });
    
    // Add rows for each type
    Object.entries(customersByType).forEach(([type, stats]) => {
        reportHTML += `
            <tr>
                <td>${type}</td>
                <td>${stats.count}</td>
                <td>${formatCurrency(stats.total)}</td>
                <td>${formatCurrency(stats.total / stats.count)}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
        
        <h4>Top Customers</h4>
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Type</th>
                    <th>Total Purchases</th>
                    <th>Last Purchase</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Sort customers by total purchases (descending)
    const topCustomers = [...filteredCustomers]
        .sort((a, b) => b.totalPurchases - a.totalPurchases)
        .slice(0, 10); // Top 10
    
    // Add rows for top customers
    topCustomers.forEach(customer => {
        reportHTML += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.type}</td>
                <td>${formatCurrency(customer.totalPurchases)}</td>
                <td>${customer.lastPurchase ? formatDate(customer.lastPurchase) : 'Never'}</td>
            </tr>
        `;
    });
    
    reportHTML += `
            </tbody>
        </table>
    `;
    
    return reportHTML;
}

function printReport() {
    window.print();
}

function exportReport() {
    const reportType = document.getElementById('reportType').value;
    const reportContent = document.getElementById('reportResults').textContent;
    
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${reportType}_report.txt`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Report exported successfully!');
}

// ======================
// SETTINGS MANAGEMENT
// ======================
function showSettings() {
    // Load current settings
    document.getElementById('languageSelect').value = SYSTEM_CONFIG.settings.language;
    document.getElementById('currencySelect').value = SYSTEM_CONFIG.settings.currency;
    document.getElementById('dateFormatSelect').value = SYSTEM_CONFIG.settings.dateFormat;
    document.getElementById('timeFormatSelect').value = SYSTEM_CONFIG.settings.timeFormat;
    document.getElementById('autoBackupSelect').value = SYSTEM_CONFIG.settings.autoBackup;
    document.getElementById('lastBackupDate').textContent = 
        SYSTEM_CONFIG.settings.lastBackup ? formatDate(SYSTEM_CONFIG.settings.lastBackup, true) : 'Never';
    
    // Load users
    loadUserList();
    
    // Show first tab by default
    showSettingsTab('user');
    
    showModal('settingsModal');
}

function showSettingsTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.settings-tab').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Show selected tab
    document.getElementById(`${tabId}Settings`).classList.remove('hidden');
}

function loadUserList() {
    const tbody = document.getElementById('userList');
    tbody.innerHTML = '';
    
    SYSTEM_CONFIG.users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.role}</td>
            <td>${user.lastLogin ? formatDate(user.lastLogin, true) : 'Never'}</td>
            <td>
                <button class="action-button edit" onclick="editUser('${user.username}')">Edit</button>
                ${user.username !== SYSTEM_CONFIG.currentUser.username ? 
                    `<button class="action-button delete" onclick="deleteUser('${user.username}')">Delete</button>` : 
                    ''}
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function showUserForm(username = null) {
    const form = document.getElementById('userForm');
    const modalTitle = document.getElementById('userModalTitle');
    
    if (username) {
        // Edit mode
        const user = SYSTEM_CONFIG.users.find(u => u.username === username);
        if (!user) return;
        
        modalTitle.textContent = 'Edit User';
        document.getElementById('userId').value = user.username;
        document.getElementById('userUsername').value = user.username;
        document.getElementById('userUsername').readOnly = true;
        document.getElementById('userPassword').value = '';
        document.getElementById('userConfirmPassword').value = '';
        document.getElementById('userRole').value = user.role;
    } else {
        // Add mode
        modalTitle.textContent = 'Add User';
        form.reset();
        document.getElementById('userId').value = '';
        document.getElementById('userUsername').readOnly = false;
    }
    
    showModal('userModal');
}

function saveUser(event) {
    event.preventDefault();
    
    const form = document.getElementById('userForm');
    const username = document.getElementById('userId').value;
    const newUsername = document.getElementById('userUsername').value;
    const password = document.getElementById('userPassword').value;
    const confirmPassword = document.getElementById('userConfirmPassword').value;
    const role = document.getElementById('userRole').value;
    
    // Validate passwords
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', true);
        return;
    }
    
    if (!username && password.length < 6) {
        showNotification('Password must be at least 6 characters', true);
        return;
    }
    
    if (username) {
        // Update existing user
        const index = SYSTEM_CONFIG.users.findIndex(u => u.username === username);
        if (index !== -1) {
            const user = SYSTEM_CONFIG.users[index];
            
            // Only update password if it was changed
            if (password) {
                user.password = password;
            }
            
            user.role = role;
            
            showNotification('User updated successfully!');
        }
    } else {
        // Check if username already exists
        if (SYSTEM_CONFIG.users.some(u => u.username === newUsername)) {
            showNotification('Username already exists', true);
            return;
        }
        
        // Add new user
        SYSTEM_CONFIG.users.push({
            username: newUsername,
            password: password,
            role: role,
            lastLogin: null
        });
        
        showNotification('User added successfully!');
    }
    
    closeModal('userModal');
    loadUserList();
}

function editUser(username) {
    showUserForm(username);
}

function deleteUser(username) {
    showConfirmModal(
        'Delete User',
        `Are you sure you want to delete user "${username}"? This action cannot be undone.`,
        () => {
            SYSTEM_CONFIG.users = SYSTEM_CONFIG.users.filter(u => u.username !== username);
            loadUserList();
            showNotification('User deleted successfully!');
        }
    );
}

function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate current password
    if (currentPassword !== SYSTEM_CONFIG.currentUser.password) {
        showNotification('Current password is incorrect', true);
        return;
    }
    
    // Validate new password
    if (newPassword.length < 6) {
        showNotification('New password must be at least 6 characters', true);
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showNotification('New passwords do not match', true);
        return;
    }
    
    // Update password
    SYSTEM_CONFIG.currentUser.password = newPassword;
    
    // Clear form
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    showNotification('Password changed successfully!');
}

function updateLanguage(language) {
    SYSTEM_CONFIG.settings.language = language;
    
    // Update all elements with data-localize attribute
    document.querySelectorAll('[data-localize]').forEach(element => {
        const key = element.getAttribute('data-localize');
        element.textContent = SYSTEM_CONFIG.translations[language][key] || key;
    });
    
    showNotification('Language updated successfully!');
}

function updateCurrency(currency) {
    SYSTEM_CONFIG.settings.currency = currency;
    
    // Update all currency displays
    document.querySelectorAll('.currency-display').forEach(element => {
        element.setAttribute('data-currency', currency);
        const amount = parseFloat(element.textContent) || 0;
        element.textContent = formatCurrency(amount).replace(/[^\d.,]/g, '');
    });
    
    showNotification('Currency updated successfully!');
}

function createBackup() {
    const backupData = {
        employees: SYSTEM_CONFIG.employees,
        inventory: SYSTEM_CONFIG.inventory,
        customers: SYSTEM_CONFIG.customers,
        sales: SYSTEM_CONFIG.sales,
        settings: SYSTEM_CONFIG.settings,
        timestamp: new Date().toISOString()
    };
    
    // In a real app, you would save this to a file or database
    // For this demo, we'll just store it in localStorage
    localStorage.setItem('mhappyBackup', JSON.stringify(backupData));
    
    // Update last backup time
    SYSTEM_CONFIG.settings.lastBackup = new Date().toISOString();
    document.getElementById('lastBackupDate').textContent = formatDate(SYSTEM_CONFIG.settings.lastBackup, true);
    
    showNotification('Backup created successfully!');
}

function restoreBackup() {
    showConfirmModal(
        'Restore Backup',
        'Are you sure you want to restore from backup? All current data will be replaced.',
        () => {
            const backupData = JSON.parse(localStorage.getItem('mhappyBackup'));
            
            if (!backupData) {
                showNotification('No backup found', true);
                return;
            }
            
            SYSTEM_CONFIG.employees = backupData.employees || [];
            SYSTEM_CONFIG.inventory = backupData.inventory || [];
            SYSTEM_CONFIG.customers = backupData.customers || [];
            SYSTEM_CONFIG.sales = backupData.sales || [];
            SYSTEM_CONFIG.settings = backupData.settings || SYSTEM_CONFIG.settings;
            
            // Refresh all views
            loadDashboard();
            loadEmployees();
            loadInventory();
            loadSales();
            loadCustomers();
            
            showNotification('Backup restored successfully!');
        }
    );
}

// ======================
// INITIALIZATION
// ======================
document.addEventListener('DOMContentLoaded', function() {
    // Set up form submissions
    document.getElementById('employeeForm').addEventListener('submit', saveEmployee);
    document.getElementById('inventoryForm').addEventListener('submit', saveInventory);
    document.getElementById('saleForm').addEventListener('submit', saveSale);
    document.getElementById('customerForm').addEventListener('submit', saveCustomer);
    document.getElementById('userForm').addEventListener('submit', saveUser);
    
    // Initialize with default language
    updateLanguage(SYSTEM_CONFIG.settings.language);
    
    // Load any saved backup (for demo purposes)
    if (localStorage.getItem('mhappyBackup')) {
        const backupData = JSON.parse(localStorage.getItem('mhappyBackup'));
        SYSTEM_CONFIG.settings.lastBackup = backupData.timestamp;
    }
});