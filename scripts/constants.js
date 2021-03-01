export {
  initialCards, selectors, popupEdit, formElementEdit, nameInput, jobInput, openButtonEdit,
  titleName, descriptionName, popupAdd,
  formElementAdd, titleInput, urlInput, cardsList,
  openButtonAdd, popupPreview, popupImage, popupCaption, EscCode
}

const initialCards = [{
  title: 'Архыз',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  title: 'Челябинская область',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  title: 'Иваново',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  title: 'Камчатка',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  title: 'Холмогорский район',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  title: 'Байкал',
  image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

const selectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
}

//1 попап имя ученого edit
const popupEdit = document.querySelector('.overlay_type_edit');
const formElementEdit = popupEdit.querySelector('.popup__container_type_edit');
const nameInput = formElementEdit.querySelector('[name="popup-name"]');
const jobInput = formElementEdit.querySelector('[name="popup-job"]');
const openButtonEdit = document.querySelector('.profile__popup-button');
const titleName = document.querySelector('.profile__title');
const descriptionName = document.querySelector('.profile__description');

//2 попап добавление карточки add
const popupAdd = document.querySelector('.overlay_type_add');
const formElementAdd = popupAdd.querySelector('.popup__container_type_add');
const titleInput = formElementAdd.querySelector('[name="popup-title"]');
const urlInput = formElementAdd.querySelector('[name="popup-url"]');
const cardsList = document.querySelector('.cards__list');
const openButtonAdd = document.querySelector('.profile__add-button');

//3 попап увеличение фото Preview
const popupPreview = document.querySelector('.overlay_type_preview');
const popupImage = popupPreview.querySelector('.overlay__image');
const popupCaption = popupPreview.querySelector('.overlay__caption');
const EscCode = 27;
