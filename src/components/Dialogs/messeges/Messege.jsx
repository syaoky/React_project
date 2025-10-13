import React from "react";
import C from "./Messege.module.css"


const MessegeList = (props) => {
    const filterId = (messegeId) => {
        let myId = 10;
        if (myId == messegeId) {
            return C.myMessege
        }else {return C.freandMessege}
    }
    return (
        <div className={C.messages}>
            {props.messeges.map((item) => (
                <div className={C.message + " " + filterId(item.id)}>{item.messege}</div>
            )
)}
</div>
)
};


export default MessegeList