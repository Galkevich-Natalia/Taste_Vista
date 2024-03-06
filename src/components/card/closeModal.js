export function closeModalByCross() {
    const card = document.querySelector('.card_modal');
    const overlay = document.querySelector('.overlay');

    card.remove();
    overlay.style.display = 'none';
}

export function closeModalByClickOutside() {
    const card = document.querySelector('.card_modal');
    const overlay = document.querySelector('.overlay');
    
    card.remove();
    overlay.style.display = 'none';
}