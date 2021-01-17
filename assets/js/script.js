const headerSection = document.querySelector('.header');
const menuButton = document.querySelector('.header__burger');
const mainMenu = document.querySelector('.header-nav');
const searchform  = document.querySelector('.header-search');
const searchInput = document.querySelector('.header-search__input');
// TOGGLES FUNCTION
const toogler = (item, itemClass) => {
    item.classList.toggle(itemClass);
}

document.addEventListener('click', event => {
    if (event.target.closest('.header__burger')) {
        toogler(headerSection, 'show');
        toogler(menuButton, 'active');
        toogler(mainMenu, 'show');
    }
    if (event.target.closest('.header-buttons__item--search')) {
        event.preventDefault();
        toogler(searchform, 'active');
    }
})

