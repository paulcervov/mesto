import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import {
  formElementEdit, openButtonEdit, formElementAdd, cardsList,
  openButtonAdd, initialCards, selectors, urlInput, titleInput
} from '../scripts/utils/constants.js';
import './index.css';
import '../index.html';


const popupWithImage = new PopupWithImage('.overlay_type_preview');

const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()

const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__description')

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template',
      {
        handleCardClick: () => {
          popupWithImage.open(item);
        }
      })
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardsList);
cardList.renderItems();

popupWithImage.setEventListeners();

const popupEditForm = new PopupWithForm('.overlay_type_edit',
  {
    handleFormSubmit: ({ title, description }) => {
      userInfo.setUserInfo({ title, description });
    }
  });

popupEditForm.setEventListeners();

const popupAddForm = new PopupWithForm('.overlay_type_add',
  {
    handleFormSubmit: () => {
      const card = createCard({
         title: titleInput.value,
         image: urlInput.value
      });
      newCard.prependItem(card)
      formAddValidator.disableSubmitButton()
    }
  })

popupAddForm.setEventListeners()

openButtonAdd.addEventListener('click', () => {
  popupAddForm.open();
})
openButtonEdit.addEventListener('click', () => {
  popupEditForm.open(userInfo.getUserInfo());

})

function createCard(item) {
  const card = new Card(item, '.card-template', {
    handleCardClick: () => {
      popupWithImage.open(item);
    }
  });
  return card.generateCard();
}

const newCard = new Section({
  items: initialCards,
  renderer: (item) => {
    newCard.prependItem(createCard(item))
  }
}, cardsList)
