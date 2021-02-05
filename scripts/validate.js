 //const formEdit = document.forms.edit;
//  const popupName = formEdit.elements['popup-name'];
//  const popupJob = formEdit.elements['popup-job'];
// const buttonEdit = document.querySelector('.popup__button_type_edit');
// const formEditNameError = formEdit.querySelector(`.${popupName.id}-error`);
// const formEditJobError = formEdit.querySelector(`.${popupJob.id}-error`);



// //   function setSubmitButtonState(isFormValid){
// //   if(isFormValid){
// //       buttonEdit.removeAttribute('disabled');
// //       buttonEdit.classList.remove('popup__button_disabled');   
// //   } else {
// //       buttonEdit.setAttribute('disabled', true);
// //       buttonEdit.classList.add('popup__button_disabled');
// //   }
// // }
// //   // formEdit.addEventListener('input' , function(evt) {
// //   //   if(isValid === true){
// //   //   const isValid =  popupName.value.length > 2 && popupJob.value.length > 2;
// //   //   setSubmitButtonState(isValid);
// //   //    };
// //   //  });


// // function hideError (input) {
// //   input.classList.remove('popup__input_type_error');
// //   formEditNameError.textContent = '';
// // }

// // function checkInputValidity () {
// //  if(!popupName.validity.valid) {
// //   showError (popupName, popupName.validationMessage);

// //  } else {
// //   hideError (popupName);
// //  }
// // };
// // popupName.addEventListener('input', function () {
// //   checkInputValidity();
// // });
 const formElement = document.querySelector('.popup__container');
 const inputElement = formElement.querySelector('.popup__input');

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active'); // показывает ошибку
  };

  const hideInputError = (formElement, inputElement, selectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';                       // прячет ошибку
  }

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);

    } else {
      hideInputError(formElement, inputElement);
    }
  };                                            // проверяет корректность введенных полей инпутов

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
  });
});
};   // добавление слушателей на каждый инпут

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
     setEventListeners(formElement)
  })
}
enableValidation ()
