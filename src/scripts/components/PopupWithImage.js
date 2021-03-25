import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(data) {
        super.open();
        super.setEventListeners()
        const popupCaption = this._element.querySelector('.overlay__caption');
        const popupImage = this._element.querySelector('.overlay__image')
        popupCaption.textContent = data.title;
        popupImage.src = data.image;
        popupImage.alt = data.title;
    }
}
