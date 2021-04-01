import './index.css';
import '../index.html';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Api from '../scripts/components/Api.js'
import {
  formElementEdit, openButtonEdit, formElementAdd, cardsList,
  openButtonAdd, initialCards, selectors
} from '../scripts/utils/constants.js';

 const options = {
   url: 'https://mesto.nomoreparties.co/v1/cohort-21',
   headers: {
    autorization: '8bc2b522-b2e5-4475-a3df-8cf1760d3928',
     'Content-Type': 'application/json',
     
   }
 }

const api = new Api(options)
api.getCards()


const popupWithImage = new PopupWithImage('.overlay_type_preview');

const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()

const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__description', 'profile__avatar-edit-button')

popupWithImage.setEventListeners();
const popupAvatarForm = new PopupWithForm('.overlay_avatar',
  {
    handleFormSubmit: (data) => {
      userInfo.setUserAvatar(data);
    }
  });
  popupAvatarForm.setEventListeners();

const popupEditForm = new PopupWithForm('.overlay_type_edit',
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data);
    }
  });

popupEditForm.setEventListeners();

const popupAddForm = new PopupWithForm('.overlay_type_add',
  {
    handleFormSubmit: ({caption, url}) => { 
      const card = createCard({
        title: caption,
        image: url
     });
     cardList.prependItem(card)
      formAddValidator.disableSubmitButton()
    }
  })

popupAddForm.setEventListeners()

openButtonAdd.addEventListener('click', () => {
  popupAddForm.open();
  formAddValidator.disableSubmitButton()
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

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item))
  }
}, cardsList)
  
cardList.renderItems()
