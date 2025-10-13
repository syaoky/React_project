import React from "react";
import MyPostsC from "./MyPosts.module.css"
import PostRender from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.dispatch({type:"ADD-POST", postMessage: text})
    }

    let onChangeText = () => {
        let text = newPostElement.current.value
        props.dispatch({type: "NEW-POST-TEXT", newText: text})
    }
    return (
        <div className={MyPostsC.content}>
            <div>
                <h3>My Posts</h3>
                <textarea onChange={onChangeText} ref={newPostElement} value={props.profileArr.newPostText}></textarea>
                <button onClick={addPost}>click</button>
                <PostRender postArr={props.profileArr.postArr}/>
            </div>

        </div>
    );
}

export default MyPosts