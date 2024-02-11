import { getFormatCurrency } from "../../utils/formatCurrency";

const cardsContainer = document.querySelector('.cards__container');

export function addMenu(data) {
    cardsContainer.append(crtCard(data));
}

function crtCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.append(crtCardContainer(data));

    return card;
}

function crtCardContainer(data) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');
    cardContainer.append(crtCardWrapper(data));

    return cardContainer;
}

function crtCardWrapper(data) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card__wrapper');
    cardWrapper.append(crtCardContImage(data), crtCardContent(data));

    return cardWrapper;
}

function crtCardContImage(data) {
    const cardContImage = document.createElement('div');
    cardContImage.classList.add('card__image');
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

function crtCardContent(data) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    cardContent.append(crtCardName(data), crtCardSize(data), crtCardIngredients(data), crtCardFooter(data));

    return cardContent;
}

function crtCardName(data) {
    const container = document.createElement('div');
    container.classList.add('card__name');
    container.append(crtTextName(data));

    return container;
}

function crtTextName(value) {
    const textName = document.createElement('span');
    textName.classList.add('card__text');
    textName.textContent = value.name;

    return textName;
}

function crtCardSize(data) {
    const container = document.createElement('div');
    container.classList.add('card__size');
    container.append(crtTextSize(data));

    return container;
}

function crtTextSize(value) {
    const textSize = document.createElement('span');
    textSize.classList.add('card__size');
    textSize.textContent = value.size;

    return textSize;
}

function crtCardIngredients(value) {
    const cardIngredients = document.createElement('div');
    cardIngredients.classList.add('card__ingredients');
    
    if(value.ingredients && value.ingredients.length > 0) {
        const cardIngredientsText = document.createElement('span');
        cardIngredientsText.textContent = value.ingredients.join(', ') +  ".";
        cardIngredients.append(cardIngredientsText);
    }

    return cardIngredients;
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
    cardContainerBtn.classList.add('card__btn');
    cardContainerBtn.append(crtCardBtn());

    return cardContainerBtn;
}

function crtCardBtn() {
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('button');
    cardBtn.textContent = '+';

    return cardBtn;
}