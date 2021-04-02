export default class UserInfo {
    constructor(titleSelector, descriptionSelector, avatarSelector) {
        this._title = document.querySelector(titleSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
        //this.api = api
    }
    
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
        this._avatar.alt = `${data.name} avatar`
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
