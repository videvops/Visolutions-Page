const loader = document.querySelector('.loader');
const ONE_SECOND = 1000;

/**
 * Show page loader
 */
function showLoader() {
  loader.classList.add('show');
}

/**
 * Hide page loader
 */
function hideLoader() {
  loader.classList.remove('show');
}

showLoader();
setTimeout(hideLoader, ONE_SECOND * 3);
