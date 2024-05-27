import { getCardDatabById } from "../../api/getApi";
import { addMenu } from "./createCards";

export function addModal(event) {
  if (!event.target.classList.contains('card__btn')) {
    const cardId = +event.currentTarget.id;
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');

    try {
      getCardDatabById(cardId)
        .then(cardData => {
          addMenu(cardData, 'modal');
          overlay.style.display = 'block';
          overlay.addEventListener('click', closeModal);
          body.classList.add('hideScroll');
        });
    } catch (error) {
      throw error;
    }
  }
}

export function closeModal() {
  const card = document.querySelector('.card_modal');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  card.remove();
  overlay.style.display = 'none';
  body.classList.remove('hideScroll');
}