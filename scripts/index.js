
//1 попап имя ученого edit
const popupEdit = document.querySelector('.overlay_type_edit');
const formElementEdit = popupEdit.querySelector('.popup__container_type_edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close_type_edit');
const nameInput = formElementEdit.querySelector('[name="popup-name"]');
const jobInput = formElementEdit.querySelector('[name="popup-job"]');
const openButtonEdit = document.querySelector('.profile__popup-button');
const titleName = document.querySelector('.profile__title');
const descriptionName = document.querySelector('.profile__description');

//2 попап добавление карточки add
const popupAdd = document.querySelector('.overlay_type_add');
const formElementAdd = popupAdd.querySelector('.popup__container_type_add');
const closeButtonAdd = popupAdd.querySelector('.popup__close_type_add');
const titleInput = formElementAdd.querySelector('[name="popup-title"]');
const urlInput = formElementAdd.querySelector('[name="popup-url"]');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;
const openButtonAdd = document.querySelector('.profile__add-button');

//3 попап увеличение фото Preview
const popupPreview = document.querySelector('.overlay_type_preview');
const popupImage = popupPreview.querySelector('.overlay__image');
const closeButtonImage = popupPreview.querySelector('.overlay__close_type_image');
const popupCaption = popupPreview.querySelector('.overlay__caption');
const EscCode = 27;

const openPopupEdit = (el) => {
  nameInput.value = titleName.textContent;
  jobInput.value = descriptionName.textContent;
  togglePopup(el);
}

const togglePopup = (el) => {
  el.classList.toggle('overlay_opened');
  document.addEventListener('keydown', handleEscUp);
}

const closeModalWindow = (el) => {
  document.removeEventListener('keydown', handleEscUp);   // удаляем событие keydown
  el.classList.remove('overlay_opened');   // скрываем попап
}
function handleEscUp (evt) {
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.keyCode === EscCode ) {
    closeModalWindow(activePopup);
  }
} //закрытие на esc

function handleClickUp (evt) {
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.target.classList.contains('overlay_opened')
    || evt.target.classList.contains('popup__close')
    ||evt.target.classList.contains('overlay__close')) {
    closeModalWindow(activePopup);
  }
} // закрытие на клик 

function likeCard (evt) {
  evt.target.classList.toggle('card__like_active');
} // ставит лайк


function handleSubmitCard (evt) {
  evt.preventDefault();
  togglePopup(popupAdd);
  cardsList.prepend(renderElement({
    name: titleInput.value,
    link: urlInput.value,
  }))
 
  formElementAdd.reset();
  const addButton = document.querySelector('.popup__button_type_add')
  addButton.setAttribute('disabled', true);
  addButton.classList.add('popup__button_disabled');
}// сохранение карточки 

function handleDeleteCard (evt) {
  evt.target.closest('.card').remove(); //удаление карточки
}

function togglePreviewPopup (evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.closest('.card').querySelector('.card__title').textContent;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  togglePopup(popupPreview);
}
function handlePersonFormSubmit (evt) {
  evt.preventDefault();
  titleName.textContent = nameInput.value;
  descriptionName.textContent = jobInput.value;
  togglePopup(popupEdit);
}

function renderElement (element) {
  const cardElement = cardTemplate.cloneNode(true);
  const titleElement = cardElement.querySelector('.card__title');
  const imageElement = cardElement.querySelector('.card__image');
  const likeElement = cardElement.querySelector('.card__like');
  const deleteElement = cardElement.querySelector('.card__delete');
  titleElement.textContent = element.name;
  imageElement.src = element.link;
  imageElement.alt = element.name;
  imageElement.addEventListener('click', togglePreviewPopup);
  likeElement.addEventListener('click', likeCard);
  deleteElement.addEventListener('click', handleDeleteCard);
  return cardElement;
}

function render () {
  initialCards.forEach((cardElement) => {
    cardsList.append(renderElement(cardElement));
  })
}
openButtonAdd.addEventListener ('click', () => togglePopup(popupAdd));
openButtonEdit.addEventListener ('click', () => openPopupEdit(popupEdit));
popupImage.addEventListener ('click', () => togglePopup(popupPreview));
popupEdit.addEventListener ('mousedown', handleClickUp);
popupPreview.addEventListener ('mousedown', handleClickUp);
popupAdd.addEventListener ('mousedown', handleClickUp);
formElementAdd.addEventListener ('submit', handleSubmitCard); // сохранение новой карточки
formElementEdit.addEventListener ('submit', handlePersonFormSubmit);

render();
