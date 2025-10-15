import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";

let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"
const newPost = "ADD-POST";
const newPostTextType = "NEW-POST-TEXT";
const newMessege = "NEW-MESSEGE";
const updateNewMessegeBody = "NEW-MESSEGE-BODY"

let store = {
    _state: {
        profile: {
            postArr: [
                {id: 1, scr: url, name: "Саша", age: "24", text: "Сегодня я научился писать посты"},
                {id: 2, scr: url, name: "Петя", age: "22", text: "У меня не работает гит хаб"},
                {id: 3, scr: url, name: "Ромчик", age: "14", text: "А я вообще Фрося"}

            ],
            newPostText: "",
        },
        messegesPage: {
                messegeData: [
                    {id: 10, messege: "hi", autor: "Vasya"},
                    {id: 2, messege: "привет", autor: "Nastya"},
                    {id: 10, messege: "как жизнь", autor: "Vasya"},
                    {id: 2, messege: "хорошо", autor: "Nastya"},
                    {id: 10, messege: "найс", autor: "Vasya"},
                    {id: 10, messege: "найс", autor: "Vasya"}
                ],
                dialogData: [
                    {name: "Ваня", id: "1"},
                    {name: "Петя", id: "2"},
                    {name: "Фрося", id: "3"},
                    {name: "Женя", id: "4"},
                    {name: "Евгений", id: "5"}
                ],
                newMessegeBody: ""
            }
    },
    getState() {
        return this._state
    },
    rerender() {
    },
    subscribe(obs) {
        store.rerender = obs
    },
    dispatch(action) {
        store._state.profile = profileReduser(store._state.profile, action)

        store._state.messegesPage = dialogReduser(store._state.messegesPage, action)

        store.rerender(store._state)
        // switch (action.type) {
        //     case"ADD-POST":
        //         let newPost = {
        //             id: 5,
        //             scr: url,
        //             text: action.postMessage,
        //             name: "Фрося"
        //         }
        //         store._state.profile.postArr.push(newPost)
        //         store._state.profile.newPostText = ""
        //         store.rerender(store._state)
        //         break;
        //     case "NEW-POST-TEXT":
        //         store._state.profile.newPostText = action.newText
        //         store.rerender(store._state)
        //         break;
        //     case"NEW-MESSEGE":
        //         let messege = {id: 10, messege: action.newMessege, autor: "Vasya"}
        //         store._state.messegesPage.messegeData.push(messege)
        //         store._state.messegesPage.newMessegeBody = ""
        //         store.rerender(store._state)
        //         break;
        //     case"NEW-MESSEGE-BODY":
        //         store._state.messegesPage.newMessegeBody = action.newText
        //         store.rerender(store._state)
        //         break;
        // }
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: newPost,
        postMessage: text
    }
}
export const addMessegeActeionCreater = (text) => {

    return {
        type: newMessege,
        newMessege: text
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return {
        type: newPostTextType,
        newText: text
    }
}

export const updateNewTextMessege = (text) => {
    return {
        type: updateNewMessegeBody,
        newText: text
    }
}

export default store
window.store = store