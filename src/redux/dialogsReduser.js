
const newMessege = "NEW-MESSEGE";
const updateNewMessegeBody = "NEW-MESSEGE-BODY"
let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"

export const dialogReduser = (state, action) => {
    switch (action.type) {
        case"NEW-MESSEGE":
            let messege = {id: 10, messege: action.newMessege, autor: "Vasya"}
            state.messegeData.push(messege)
            state.newMessegeBody = ""
            break;
        case"NEW-MESSEGE-BODY":
            state.newMessegeBody = action.newText
            break;
    }
    return state
}