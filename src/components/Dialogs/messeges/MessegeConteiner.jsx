import React from "react";
import C from "./Messege.module.css"
import {addMessegeActeionCreater, updateNewTextMessege} from "../../../redux/dialogsReduser";
import MessegeList from "./Messege";


const ComteinerMessegeList = (props) => {

    const updateText = (text) => {
        props.dispatch(updateNewTextMessege(text))
    }

    const addNewMessege = (text) => {
        props.dispatch(addMessegeActeionCreater(text))
    }

    return (
        <MessegeList className={C.message} messeges={props.messeges} dispatch={props.dispatch} addNewMessege={addNewMessege} updateText={updateText}/>
)
};


export default ComteinerMessegeList