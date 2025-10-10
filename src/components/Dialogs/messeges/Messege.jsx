import React from "react";
import C from "./Messege.module.css"





const MessegeList = (props) => {
    return (
        <div className={C.messages}>
            {props.messeges.map((item) => (
                    <div className={C.message + " " + item.autor}>{item.messege}</div>
                )
            )}
        </div>
    )
};


export default MessegeList