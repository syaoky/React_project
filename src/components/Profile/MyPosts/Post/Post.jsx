import React from "react";
import PostC from "./Post.module.css"




const PostRender = (props) => {

    return (
        props.postArr.map((item) => {
            return (
                <div className={PostC.item}>
                    <img src={item.scr} alt=""/>
                    <span>{item.name} {item.age} </span>
                    <div className={PostC.cont}><p>{item.text}</p></div>
                </div>
            )
        })
    )
}


export default PostRender