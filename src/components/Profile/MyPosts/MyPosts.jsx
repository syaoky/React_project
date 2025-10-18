import React from "react";
import MyPostsC from "./MyPosts.module.css"
import PostRender from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";




const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let onChangeText = () => {
        let text = newPostElement.current.value
        props.onChangeText(text)
    }
    return (
        <div className={MyPostsC.content}>
            <div>
                <h3>My Posts</h3>
                <textarea onChange={onChangeText} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>add post</button>
                <PostRender postArr={props.profileArr.postArr}/>
            </div>

        </div>
    );
}

export default MyPosts