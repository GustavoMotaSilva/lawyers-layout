/**
 *
 * @param {string} event
 * @return { (element: HTMLElement|Window) => (callback: Function) => void }
 */
const fromEvent = (event) => (element) => (callback) => {
    return element.addEventListener(event, callback);
};

const fromClick = fromEvent('click');

const fromScroll = fromEvent('scroll');

/**
 *
 * @param {string} selector
 * @returns {HTMLElement|null}
 */
const select = (selector) => document.querySelector(selector);

const navbar = select('.navbar');
const menu = select('.menu[aria-expanded]');
const hamburger = select('.hamburger');

const fromScrollInWindow = fromScroll(window);
const fromClickInHamburger = fromClick(hamburger);

const toggleNavbar = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('is-active');
    } else {
        navbar.classList.remove('is-active');
    }
};

// toggleNavbar();
fromScrollInWindow(toggleNavbar);

fromClickInHamburger(() => {
    const isMenuActive = menu.getAttribute('aria-expanded') === 'true';
    hamburger.classList.toggle('is-active');
    menu.setAttribute('aria-expanded', isMenuActive ? 'false' : 'true');
});
