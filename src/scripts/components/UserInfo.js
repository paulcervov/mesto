export default class UserInfo {
    constructor(titleSelector, descriptionSelector) {
        this._title = document.querySelector(titleSelector);
        this._description = document.querySelector(descriptionSelector);
    }
    getUserInfo() {
        const user = {};
        user.title = this._title.textContent;
        user.description = this._description.textContent;
        return user;
    }
    setUserInfo({ title, description }) {
        this._title.textContent = title;
        this._description.textContent = description;
    }
}