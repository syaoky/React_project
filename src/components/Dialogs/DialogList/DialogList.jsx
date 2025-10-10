import React from "react";
import C from "./DialogsList.module.css"
import {NavLink} from "react-router-dom";





const DialogList = (props) => {
    return (
        <div>
            {props.dialogs.map((item) => (
                <div className={C.dialog}>
                    <NavLink to={"/dialogs/dialog" + item.id}>{item.name}</NavLink>
                </div>)
            )}
        </div>
    )
};



export default DialogList