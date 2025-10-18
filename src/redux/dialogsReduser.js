const newMessege = "NEW-MESSEGE";
const updateNewMessegeBody = "NEW-MESSEGE-BODY"

export const addMessegeActeionCreater = (text) => {

    return {
        type: newMessege,
        newMessege: text
    }
}

export const updateNewTextMessege = (text) => {
    return {
        type: updateNewMessegeBody,
        newText: text
    }
}

let initState = {
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
    newMessegeBody: ""}

export const dialogReduser = (state = initState, action) => {
    switch (action.type) {
        case"NEW-MESSEGE":
            let messege = {id: 10, messege: action.newMessege, autor: "Vasya"}
            state.messegeData.push(messege)
            state.newMessegeBody = ""
            break;
        case"NEW-MESSEGE-BODY":
            state.newMessegeBody = action.newText
            break;
        default:
    }
    return state
}