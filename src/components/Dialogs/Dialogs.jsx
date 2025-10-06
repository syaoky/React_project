import React from "react";
import C from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/dialog" + props.id;
    return (

        <div className={C.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>{props.messege}</div>
    )
}

let dialogData = [
    {name: "Ваня", id: "1"},
    {name: "Петя", id: "2"},
    {name: "Фрося", id: "3"},
    {name: "Женя", id: "4"},
    {name: "Евгений", id: "5"}
]

let messegeData = [
    {messege: "hi"},
    {messege: "привет"},
    {messege: "как жизнь"},
    {messege: "хорошо"}
]


const DialogList = () => {
    return (
        <div>
            {dialogData.map((item) => (
                <div className={C.dialog}>
                    <NavLink to={"/dialogs/dialog" + item.id}>{item.name}</NavLink>
                </div>)
            )}
        </div>
    )
};

const MessegeList = () => {
    return (
        <div>
            {messegeData.map((item) => (

                    <div>{item.messege}</div>
                )
            )}
        </div>
    )
};

const Dialogs = () => {
    return (
        <div className={C.dialogs}>
            <div className={C.dialogsItems}>
                <DialogList array={dialogData}/>
            </div>
            <div className={C.messages}>
                <MessegeList className={C.message}/>

            </div>
        </div>
    )
}

export default Dialogs