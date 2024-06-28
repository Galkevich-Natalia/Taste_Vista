function addMinHeightForPage(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element with selector "${selector}" not found.`);
        return;
    }

    let minHeightPage = window.innerHeight - 180;
    element.style.minHeight = minHeightPage + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    addMinHeightForPage(".socialMedia");
    addMinHeightForPage(".workingHours");
    addMinHeightForPage(".orders");
});