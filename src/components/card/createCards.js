import { getFormatCurrency } from "../../utils/formatCurrency";
import { addModal, closeModal } from "./modal";
import { addDish } from "./card";

const cardsContainer = document.querySelector('.cards__container');

export function addMenu(data, type) {
    cardsContainer.append(crtCard(data, type));
}

function crtCard(data, type) {
    const card = document.createElement('div');
    const chooseClass = type === "ordinary" ? "card" : "card_modal";
    card.classList.add(chooseClass);
    card.id = data.id;
    card.append(crtCardContainer(data, type));

    if (type === "ordinary") {
        card.addEventListener('click', addModal);
    }

    card.addEventListener('click', addDish);
    return card;
}

function crtCardContainer(data, type) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');
    cardContainer.append(crtCardWrapper(data, type));

    return cardContainer;
}

function crtCardWrapper(data, type) {
    const cardWrapper = document.createElement('div');
    const chooseClass = type === "ordinary" ? "card__wrapper" : "card__wrapper_modal";
    cardWrapper.classList.add(chooseClass);
    cardWrapper.append(crtCardContImage(data, type), crtCardContent(data, type));

    return cardWrapper;
}

function crtCardContImage(data, type) {
    const cardContImage = document.createElement('div');
    const chooseClass = type === "ordinary" ? "card__image" : "card__image_modal";
    cardContImage.classList.add(chooseClass);
    cardContImage.append(crtCardImg(data));

    return cardContImage;
}

function crtCardImg(value) {
    const cardImg = document.createElement('img');
    cardImg.classList.add('img');
    cardImg.src = value.image;
    cardImg.alt = value.name;

    return cardImg;
}

function crtCardContent(data, type) {
    const cardContent = document.createElement('div');

    if (type === "ordinary") {
        cardContent.classList.add("card__content");
        cardContent.append(crtCardName(data, type));
        data.ingredients && cardContent.append(crtCardIngredients(data));
        cardContent.append(crtCardFooter(data));
    } else if (type === "modal") {
        cardContent.classList.add("card__content_modal")
        cardContent.append(crtContainerBtnClose(), crtCardName(data, type));
        data.description && cardContent.append(crtCardDescription(data));
        cardContent.append(crtCardFooter(data));
    }

    return cardContent;
}

function crtContainerBtnClose() {
    const btnContainerClose = document.createElement('div');
    btnContainerClose.classList.add('card__containerCross');
    btnContainerClose.append(crtBtnClose());

    return btnContainerClose;
}

function crtBtnClose() {
    const btnClose = document.createElement('button');
    btnClose.classList.add('cross', 'cross_menu-card-modal');
    btnClose.addEventListener('click', closeModal);

    return btnClose;
}

function crtCardName(data, type) {
    const container = document.createElement('div');
    container.classList.add('card__name');
    container.append(crtTextName(data, type));

    return container;
}

function crtTextName(value, type) {
    const textName = document.createElement('span');
    const chooseClass = type === "ordinary" ? "card__text" : "card__text_modal";
    textName.classList.add(chooseClass);
    textName.textContent = value.name + ' ' + '-' + ' ';
    textName.append(crtTextSize(value));

    return textName;
}

function crtTextSize(value) {
    const textSize = document.createElement('span');
    textSize.classList.add('card__sizeValue');
    textSize.textContent = value.size;

    return textSize;
}

function crtCardIngredients(value) {
    const cardIngredients = document.createElement('div');
    cardIngredients.classList.add('card__ingredients');
    const cardIngredientsText = document.createElement('span');
    cardIngredientsText.textContent = value.ingredients.join(', ') + ".";
    cardIngredients.append(cardIngredientsText);

    return cardIngredients;
}

function crtCardDescription(value) {
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card__description');

    const cardDescriptionText = document.createElement('span');
    cardDescriptionText.textContent = value.description;
    cardDescription.append(cardDescriptionText);

    return cardDescription;
}

function crtCardFooter(data) {
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card__footer');
    cardFooter.append(crtCardContainerCost(data), crtCardConteinerBtn());

    return cardFooter;
}

function crtCardContainerCost(data) {
    const cardContainerCost = document.createElement('div');
    cardContainerCost.classList.add('card__cost');
    cardContainerCost.append(crtCardCost(data));

    return cardContainerCost;
}

function crtCardCost(value) {
    const cardCost = document.createElement('p');
    cardCost.classList.add('card__cost-price');
    cardCost.textContent = getFormatCurrency(value.price);

    return cardCost;
}

function crtCardConteinerBtn() {
    const cardContainerBtn = document.createElement('div');
    cardContainerBtn.classList.add('card__container-btn');
    cardContainerBtn.append(crtCardBtn());

    return cardContainerBtn;
}

function crtCardBtn() {
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('card__btn');
    cardBtn.textContent = '+';

    return cardBtn;
}