function toggleMenu() {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const isOpen = mobileMenu.classList.contains('open');

    if (isOpen) {
        // Close menu
        mobileMenu.classList.remove('open', 'animate');
    } else {
        // Open menu and trigger animation
        mobileMenu.classList.add('open');
        setTimeout(() => {
        mobileMenu.classList.add('animate');
        }, 10); // tiny delay to trigger animation cleanly
    }

    menuButton.classList.toggle('open');
}