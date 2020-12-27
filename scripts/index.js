
let likes = document.querySelectorAll('.card__like');
let openButton = document.querySelector('.profile__popup-button');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('[name="popup-name"]')
let jobInput = document.querySelector('[name="popup-job"]')
let titleName = document.querySelector('.profile__title')
let descriptionName = document.querySelector('.profile__description')

likes.forEach((like) => {
  like.addEventListener('click', () => {
    like.classList.toggle('card__like_active')
  });
});
let popupValue = () => {
  nameInput.value = titleName.textContent
  jobInput.value = descriptionName.textContent
  togglePopup()
}
let togglePopup = () => {
  overlay.classList.toggle('overlay_opened')
}
openButton.addEventListener('click', popupValue)
closeButton.addEventListener('click', togglePopup)
overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    togglePopup()
  }
})

function handleFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = nameInput.value
  descriptionName.textContent = jobInput.value
  togglePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
