
let like = document.querySelector('.card__like');
like.addEventListener('click', () => {
  like.classList.toggle('card__like_active')
});

let openButton = document.querySelector('.profile__popup-button');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.popup__close');

let togglePopup = () => {
  overlay.classList.toggle('overlay_opened')
}
openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)
overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    togglePopup()
  }
})
let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__job')
let titleName = document.querySelector('.profile__title')
let descriptionName = document.querySelector('.profile__description')
nameInput.value = titleName.textContent
jobInput.value = descriptionName.textContent

function handleFormSubmit(evt) {
  evt.preventDefault();

  titleName.textContent = nameInput.value
  descriptionName.textContent = jobInput.value

  togglePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
