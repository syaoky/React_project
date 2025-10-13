let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"


let store = {
    _state: {
        profile: {
            postArr: [
                {id: 1, scr: url, name: "Саша", age: "24", text: "Сегодня я научился писать посты"},
                {id: 2, scr: url, name: "Петя", age: "22", text: "У меня не работает гит хаб"},
                {id: 3, scr: url, name: "Ромчик", age: "14", text: "А я вообще Фрося"}

            ],
            newPostText: "123",
        },
        messegesPage:
            {
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
                ]
            }
    },
    getState() {
        return this._state
    },
    rerender() {
    },
//     addPost (postMessage)  {
//         let newPost = {
//             id: 5,
//             scr: url,
//             text: postMessage,
//             name: "Фрося"
//         }
//         store._state.profile.postArr.push(newPost)
//         store._state.profile.newPostText = ""
//         store.rerender(store._state)
// },
    subscribe(obs) {
        this.rerender = obs
    },
    // newPostText (text) {
    //     this._state.profile.newPostText = text
    //     this.rerender(this._state)
    // },
    dispatch(action) {
        if (action.type == "ADD-POST") {
            let newPost = {
                id: 5,
                scr: url,
                text: action.postMessage,
                name: "Фрося"
            }
            store._state.profile.postArr.push(newPost)
            store._state.profile.newPostText = ""
            store.rerender(store._state)
        } else if (action.type == "NEW-POST-TEXT") {
            store._state.profile.newPostText = action.newText
            store.rerender(this._state)
        }
    }
}

export default store
window.store = store