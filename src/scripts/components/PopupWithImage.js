import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCaption = this._element.querySelector('.overlay__caption');
        this._popupImage = this._element.querySelector('.overlay__image')
    }
    open(data) {
        super.open();
        this._popupCaption.textContent = data.title;
        this._popupImage.src = data.image;
        this._popupImage.alt = data.title;
    }
}
