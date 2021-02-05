
const overlay = document.querySelector('.overlay');

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

const openPopupEdit = (el) => {
  nameInput.value = titleName.textContent;
  jobInput.value = descriptionName.textContent;
  togglePopup(el);
}
const togglePopup = (el) => {
  el.classList.toggle('overlay_opened');
  document.addEventListener('keydown', handleEscUp)
}
openButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
openButtonEdit.addEventListener('click', () => openPopupEdit(popupEdit));
popupImage.addEventListener('click', () => togglePopup(popupPreview));
closeButtonEdit.addEventListener('click', () => togglePopup(popupEdit));
closeButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
closeButtonImage.addEventListener('click', () => togglePopup(popupPreview));

const closeModalWindow = (el) => {
  document.removeEventListener('keydown', handleEscUp);   // удаляем событие keydown
  el.classList.remove('overlay_opened');   // скрываем попап
}
function handleEscUp(evt) {
  evt.preventDefault();
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.keyCode === 27) {
    closeModalWindow(activePopup)
  }
}
popupEdit.addEventListener('click', handleClickUp);
popupPreview.addEventListener('click', handleClickUp);
popupAdd.addEventListener('click', handleClickUp);

function handleClickUp (evt) {
  if (evt.target.classList.contains('overlay_opened')
    || evt.target.classList.contains('popup__close')) {
    closeModalWindow(popupEdit);
    closeModalWindow(popupAdd);
    closeModalWindow(popupPreview);
  }
}
function likeCard(evt) {
  evt.target.classList.toggle('card__like_active');
} // ставит лайк


function handleSubmit(evt) {
  evt.preventDefault();
  // создание карточки 
  togglePopup(popupAdd);
  cardsList.prepend(renderElement({
    name: titleInput.value,
    link: urlInput.value,
  }))
  titleInput.value = '';
  urlInput.value = '';
}
function handleDelete(evt) {
  evt.target.closest('.card').remove(); //удаление карточки
}

function togglePreviewPopup(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.closest('.card').querySelector('.card__title').textContent;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  togglePopup(popupPreview);
}
function handlePersonFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = nameInput.value;
  descriptionName.textContent = jobInput.value;
  togglePopup(popupEdit);
}

formElementAdd.addEventListener('submit', handleSubmit); // сохранение новой карточки
formElementEdit.addEventListener('submit', handlePersonFormSubmit); 

const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

function renderElement(element) {
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
  deleteElement.addEventListener('click', handleDelete);
  return cardElement;
}

function render() {
  initialCards.forEach((cardElement) => {
    cardsList.append(renderElement(cardElement));
  })

}
render();