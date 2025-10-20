import React from "react";
import C from "./DialogsList.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";





const DialogList = (props) => {
    const select = useSelector(state => state.messegesPage.dialogData)
    return (
        <div>
            {select.map((item) => (
                <div className={C.dialog}>
                    <NavLink to={"/dialogs/dialog" + item.id}>{item.name}</NavLink>
                </div>)
            )}
        </div>
    )
};



export default DialogList