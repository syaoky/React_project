
let rerender = () => {
    console.log("123")
}

let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"

let state = {
    profile: {
        postArr: [
            {id: 1, scr: url, name:"Саша", age:"24", text:"Сегодня я научился писать посты"},
            {id: 2, scr: url, name:"Петя", age:"22", text:"У меня не работает гит хаб"},
            {id: 3, scr: url, name:"Ромчик", age:"14", text:"А я вообще Фрося"},
            {id: 4, scr: url, name:"Не Ромчик", age:"14", text:"А я вообще Фрося"}

        ],
        newPostText: "123",
    },
    messegesPage:
        {messegeData: [
            {id: 1, messege:"hi", autor:"Vasya" },
            {id: 2, messege:"привет", autor: "Nastya"},
            {id: 3, messege:"как жизнь", autor:"Vasya"},
            {id: 4, messege:"хорошо", autor: "Nastya"},
            {id: 5, messege:"найс", autor:"Vasya"},
        ],
        dialogData: [
            {name: "Ваня", id: "1"},
            {name: "Петя", id: "2"},
            {name: "Фрося", id: "3"},
            {name: "Женя", id: "4"},
            {name: "Евгений", id: "5"}
        ]
        }
}

export let newPostText = (text) => {
    state.profile.newPostText = text
    rerender(state)
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        scr: url,
        text: postMessage,
        name: "Фрося"
    };

    state.profile.postArr.push(newPost)
    state.profile.newPostText = ""
    rerender(state)
}

export const subscribe = (obs) => {
    rerender = obs
}
export default state