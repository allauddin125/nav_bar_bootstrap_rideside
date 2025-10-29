/*=============== SHOW/HIDE MOBILE MENU ===============*/
const showMenu = (toggleId, navId) => {
    // Get toggle button and nav menu elements
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Add click event to toggle button
    toggle.addEventListener('click', () => {
        // Toggle 'show-menu' class to show/hide menu
        nav.classList.toggle('show-menu');

        // Toggle 'show-icon' class to switch between burger and close icon
        toggle.classList.toggle('show-icon');
    });
}

// Initialize menu toggle functionality
showMenu('nav-toggle', 'nav-menu');

/*=============== DROPDOWN MENU TOGGLE (MOBILE ONLY) ===============*/
// Get all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Loop through each dropdown item
dropdownItems.forEach((item) => {
    // Get the dropdown button (nav__link)
    const dropdownButton = item.querySelector('.nav__link');
    
    // Add click event to dropdown button
    dropdownButton.addEventListener('click', () => {
        // Toggle 'show-dropdown' class on clicked dropdown
        item.classList.toggle('show-dropdown');
        
        // Close all other dropdowns
        dropdownItems.forEach((otherItem) => {
            if(otherItem !== item){
                otherItem.classList.remove('show-dropdown');
            }
        });
    });
});

/*=============== DROPDOWN SUBMENU TOGGLE (MOBILE ONLY) ===============*/
// Get all dropdown subitems
const dropdownSubitems = document.querySelectorAll('.dropdown__subitem');

// Loop through each submenu item
dropdownSubitems.forEach((subitem) => {
    // Get the submenu button (dropdown__link)
    const submenuButton = subitem.querySelector('.dropdown__link');
    
    // Add click event to submenu button
    submenuButton.addEventListener('click', (e) => {
        // Prevent click from bubbling up to parent dropdown
        e.stopPropagation();
        
        // Toggle 'show-dropdown' class on clicked submenu
        subitem.classList.toggle('show-dropdown');
        
        // Close all other submenus
        dropdownSubitems.forEach((otherSubitem) => {
            if(otherSubitem !== subitem){
                otherSubitem.classList.remove('show-dropdown');
            }
        });
    });
});