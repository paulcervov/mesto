export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
             headers: this._headers })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
    }
    createCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`))
            })
            .catch(err => Promise.reject(err))
    }
     
}