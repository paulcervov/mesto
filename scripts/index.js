
const overlay = document.querySelector('.overlay');

//1 попап имя ученого edit
const popupEdit = document.querySelector('.popup-edit');
const formElementEdit = popupEdit.querySelector('.popup__container-edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close-edit');
const nameInput = formElementEdit.querySelector('[name="popup-name"]');
const jobInput = formElementEdit.querySelector('[name="popup-job"]');
const openButtonEdit = document.querySelector('.profile__popup-button');
const titleName = document.querySelector('.profile__title');
const descriptionName = document.querySelector('.profile__description');


//2 попап добавление карточки add
const popupAdd = document.querySelector('.popup-add');
const formElementAdd = popupAdd.querySelector('.popup__container-add');
const closeButtonAdd = popupAdd.querySelector('.popup__close-add');
const titleInput = formElementAdd.querySelector('[name="popup-title"]');
const urlInput = formElementAdd.querySelector('[name="popup-url"]');
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;
const openButtonAdd = document.querySelector('.profile__add-button');

//3 попап увеличение фото Preview

const popupPreview = document.querySelector('.popup-preview');
const popupImage = popupPreview.querySelector('.popup__image');
const closeButtonImage = popupPreview.querySelector('.popup__close-image');
const popupCaption = popupPreview.querySelector('.popup__caption');

let openPopupEdit = (el) => {
  nameInput.value = titleName.textContent;
  jobInput.value = descriptionName.textContent;
  togglePopup(el);
}
let togglePopup = (el) => {
  el.classList.toggle('overlay_opened');
}
openButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
openButtonEdit.addEventListener('click', () => openPopupEdit(popupEdit));
closeButtonEdit.addEventListener('click', () => togglePopup(popupEdit));
closeButtonAdd.addEventListener('click', () => togglePopup(popupAdd));
popupImage.addEventListener('click', () => togglePopup(popupPreview));
closeButtonImage.addEventListener('click', () => togglePopup(popupPreview));
overlay.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopup(el)
  }
})

function handlePersonFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = nameInput.value;
  descriptionName.textContent = jobInput.value;
  togglePopup(popupEdit);
}

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

function render() {
  initialCards.forEach(renderElement);

} // перебирает все елементы массива

function renderElement(element) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').addEventListener('click', togglePreviewPopup);
  cardElement.querySelector('.card__like').addEventListener('click', likeCard);
  cardElement.querySelector('.card__delete').addEventListener('click', handleDelete);
  cardsList.prepend(cardElement);
}



function likeCard(evt) {
  evt.target.classList.toggle('card__like_active');
} // ставит лайк

function handleSubmit(evt) {
  evt.preventDefault();
  renderElement({
    name: titleInput.value,
    link: urlInput.value,
  }) // создание карточки 
  togglePopup(popupAdd) //обнуление полей
  titleInput.value = '';
  urlInput.value = '';
}

function handleDelete(evt) {
  evt.target.closest('.card').remove(); //удаление карточки
}

formElementAdd.addEventListener('submit', handleSubmit); // сохранение новой карточки
render();


function togglePreviewPopup(evt) {
  popupImage.src = evt.target.src;
  popupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  togglePopup(popupPreview);
}
