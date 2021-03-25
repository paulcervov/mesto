import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;  
    }
   
    open(formValues = {}){
        super.open()
        this._setInputValues(formValues)
    }
    _setInputValues(formValues) {
        const inputList = this._element.querySelectorAll('.popup__input')

        for (let prop in formValues) {
            const input = Array.from(inputList).find(input => input.name === prop)
            if(input !== undefined) {
                input.value = formValues[prop]
            }
        }
    }
    _getInputValues() {
        const inputList = this._element.querySelectorAll('.popup__input')
        const formValues = {};
        inputList.forEach(input => {
            formValues[input.name] = input.value;
        })
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._element.querySelector('form').addEventListener('submit', (evt) => { 
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close()
        })
    }
    close() {
        super.close()
        this._element.querySelector('form').reset()
    }
}