import React from "react";
import C from "./Dialogs.module.css"
import I from "./DialogList/DialogsList.module.css"
import {NavLink} from "react-router-dom";
import MessegeList from "./messeges/Messege";
import DialogList from "./DialogList/DialogList";


const Dialogs = (props) => {
    return (
        <div className={C.dialogs}>
            <div className={I.dialogsItems}>
                <DialogList dialogs={props.state.messegesPage.dialogData}/>
            </div>
            <div className={C.messages}>
                <MessegeList className={C.message} messeges={props.state.messegesPage.messegeData}/>

            </div>
        </div>
    )
}

export default Dialogs