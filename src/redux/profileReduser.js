const newPost = "ADD-POST";
const newPostTextType = "NEW-POST-TEXT";
let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"


export const profileReduser = (state, action) => {
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
    }
    return state
}