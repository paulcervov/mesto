export default class UserInfo {
    constructor(titleSelector, descriptionSelector, avatarSelector) {
        this._title = document.querySelector(titleSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector)
    }
    getUserInfo() {
        const data = {
            name: this._title.textContent,
            about: this._description.textContent
        };
        return data;
    }
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
        this._avatar.alt = `${data.name} avatar`
      }
    setUserInfo(data) {
        this._title.textContent = data.title;
        this._description.textContent = data.description;
       
    }
}