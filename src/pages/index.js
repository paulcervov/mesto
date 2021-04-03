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
  openButtonAdd, selectors
} from '../scripts/utils/constants.js';

 const options = {
   url: 'https://mesto.nomoreparties.co/v1/cohort-21',
   headers: {
    Authorization: '8bc2b522-b2e5-4475-a3df-8cf1760d3928',
     'Content-Type': 'application/json',
   }
 }
const api = new Api(options)
const userInfo = new UserInfo('.profile__title', '.profile__description')

//  список карточек
const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item))
    }
}, cardsList, api)

// создание карточки карточки
function createCard(item) {
    const card = new Card(item, '.card-template', {
        handleCardClick: () => {
            popupWithImage.open(item);
        }
    });
    return card.generateCard();
}

// добавление карточки
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


// user info update
api.getInfo().then(({name, about}) => {
    userInfo.setUserInfo({title: name, description: about})
})

// edit form
const popupEditForm = new PopupWithForm('.overlay_type_edit',
    {
        handleFormSubmit: ({ title, description }) => {
            userInfo.setUserInfo({ title, description });
        }
    });
popupEditForm.setEventListeners();

// попап аватарки
const popupWithImage = new PopupWithImage('.overlay_type_preview');
popupWithImage.setEventListeners();

// валидация форм
const formAddValidator = new FormValidator(selectors, formElementAdd)
formAddValidator.enableValidation()
const formEditValudator = new FormValidator(selectors, formElementEdit)
formEditValudator.enableValidation()

// обработчик кнопки добавления карточки
openButtonAdd.addEventListener('click', () => {
  popupAddForm.open();
formAddValidator.disableSubmitButton()
})

// обработчик кнопки редактирования пользователя
openButtonEdit.addEventListener('click', () => {
  popupEditForm.open(userInfo.getUserInfo());
})


