// CSS utility functions

/**
 * Add a CSS class to an element
 * @param {HTMLElement} element - The DOM element
 * @param {string} className - The class name to add
 */
function addClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

/**
 * Remove a CSS class from an element
 * @param {HTMLElement} element - The DOM element
 * @param {string} className - The class name to remove
 */
function removeClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

/**
 * Toggle a CSS class on an element
 * @param {HTMLElement} element - The DOM element
 * @param {string} className - The class name to toggle
 */
function toggleClass(element, className) {
  if (element && className) {
    element.classList.toggle(className);
  }
}

/**
 * Check if an element has a CSS class
 * @param {HTMLElement} element - The DOM element
 * @param {string} className - The class name to check
 * @returns {boolean} - True if the element has the class
 */
function hasClass(element, className) {
  return element && className ? element.classList.contains(className) : false;
}

module.exports = {
  addClass,
  removeClass,
  toggleClass,
  hasClass
};
