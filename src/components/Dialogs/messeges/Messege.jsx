import React from "react";
import C from "./Messege.module.css"
import {addMessegeActeionCreater, updateNewTextMessege} from "../../../redux/state";


const MessegeList = (props) => {

    const updateText = (event) => {
        let text = event.target.value
        props.dispatch(updateNewTextMessege(text))
    }

    const addNewMessege = () => {
        let text = props.messeges.newMessegeBody
        props.dispatch(addMessegeActeionCreater(text))
    }
    const filterId = (messegeId) => {
        let myId = 10;
        if (myId == messegeId) {
            return C.myMessege
        }else {return C.freandMessege}
    }
    return (
        <div className={C.messages}>
            {props.messeges.messegeData.map((item) => (
                <div className={C.message + " " + filterId(item.id)}>{item.messege}</div>
            )
)}
            <textarea className={C.inputText} rows="1"  onChange={updateText} value={props.messeges.newMessegeBody}></textarea>
            <button className={C.addMessege} onClick={addNewMessege}>отправить</button>
</div>
)
};


export default MessegeList