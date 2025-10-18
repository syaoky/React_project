import React from "react";
import C from "./Dialogs.module.css"
import I from "./DialogList/DialogsList.module.css"
import DialogList from "./DialogList/DialogList";
import ComteinerMessegeList from "./messeges/MessegeConteiner";


const Dialogs = (props) => {
    return (
        <div className={C.dialogs}>
            <div className={I.dialogsItems}>
                <DialogList dialogs={props.state.messegesPage.dialogData}/>
            </div>
            <div className={C.messages}>
                <ComteinerMessegeList className={C.message} messeges={props.state.messegesPage} dispatch={props.dispatch}/>

            </div>
        </div>
    )
}

export default Dialogs