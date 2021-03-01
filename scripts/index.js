import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {
  popupEdit, formElementEdit, nameInput, jobInput,
  openButtonEdit, titleName, descriptionName, popupAdd,
  formElementAdd, titleInput, urlInput, cardsList,
  openButtonAdd, popupPreview, popupImage, popupCaption, EscCode,
  initialCards, selectors
} from './constants.js'

function openPopupEdit(el) {
  nameInput.value = titleName.textContent;
  jobInput.value = descriptionName.textContent;
  togglePopup(el);
}

function togglePopup(el) {
  el.classList.toggle('overlay_opened');
  document.addEventListener('keydown', handleEscUp);
}

function closeModalWindow(el) {
  document.removeEventListener('keydown', handleEscUp);   // удаляем событие keydown
  el.classList.remove('overlay_opened');   // скрываем попап
}
function handleEscUp(evt) {
  if (evt.keyCode === EscCode) {
    const activePopup = document.querySelector('.overlay_opened');
    closeModalWindow(activePopup);
  }
} //закрытие на esc

function handleClickUp(evt) {
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.target.classList.contains('overlay_opened')
    || evt.target.classList.contains('popup__close')
    || evt.target.classList.contains('overlay__close')
    || evt.target.classList.contains('overlay__image')) {
    closeModalWindow(activePopup);
    
  }
} // закрытие на клик 

function handlePersonFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = nameInput.value;
  descriptionName.textContent = jobInput.value;
  togglePopup(popupEdit);
}

export function togglePreviewPopup(image, title) {
  popupImage.src = image;
  popupImage.alt = title;
  popupCaption.textContent = title;
  togglePopup(popupPreview);
}
function addNewCard(item) {
  const card = new Card(item, '.card-template')
  const cardElement = card.generateCard();
  cardsList.append(cardElement);
}
function render() {
  initialCards.forEach((item) => {
    addNewCard(item)
  })
}
render();

function handleSubmitCard(evt) {
  evt.preventDefault();
  togglePopup(popupAdd);
  const card = new Card({
    title: titleInput.value,
    image: urlInput.value
  }, '.card-template')
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement)
  formElementAdd.reset();
  formAddValidator.disableSubmitButton()
}// сохранение карточки 

const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()
const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

openButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
openButtonEdit.addEventListener('click', () => openPopupEdit(popupEdit));
popupImage.addEventListener('click', () => togglePopup(popupPreview));
popupEdit.addEventListener('mousedown', handleClickUp);
popupPreview.addEventListener('mousedown', handleClickUp);
popupAdd.addEventListener('mousedown', handleClickUp);
formElementAdd.addEventListener('submit', handleSubmitCard); // сохранение новой карточки
formElementEdit.addEventListener('submit', handlePersonFormSubmit);
