export function closeModal() {
    const card = document.querySelector('.card_modal');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    card.remove();
    overlay.style.display = 'none';
    body.classList.remove('modal-open');
}