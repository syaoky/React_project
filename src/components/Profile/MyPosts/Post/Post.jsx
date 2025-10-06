import React from "react";
import PostC from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={PostC.item}>
            <img src="https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg" alt=""/>
            <span>{props.name} {props.age}</span>
            <button>Like</button>
            <button>disLike</button>
        </div>

    );
}

export default Post