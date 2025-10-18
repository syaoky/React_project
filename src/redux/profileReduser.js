const newPost = "ADD-POST";
const newPostTextType = "NEW-POST-TEXT";
let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"

export const addPostActionCreator = (text) => {
    return {
        type: newPost,
        postMessage: text
    }
}

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: newPostTextType,
        newText: text
    }
}

let initialState ={
    postArr: [
        {id: 1, scr: url, name: "Саша", age: "24", text: "Сегодня я научился писать посты"},
        {id: 2, scr: url, name: "Петя", age: "22", text: "У меня не работает гит хаб"},
        {id: 3, scr: url, name: "Ромчик", age: "14", text: "А я вообще Фрося"}

    ],
    newPostText: "",
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case"ADD-POST":
            let newPost = {
                id: 5,
                scr: url,
                text: action.postMessage,
                name: "Фрося"
            }
            state.postArr.push(newPost)
            state.newPostText = ""
            break;
        case "NEW-POST-TEXT":
            state.newPostText = action.newText
            break;
        default:
    }
    return state
}