import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReduser";

const MyPostsConteiner = (props) => {

    let addPost = (text) => {
        props.dispatch(addPostActionCreator(text))
    }

    let onChangeText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
       <MyPosts onChangeText={onChangeText} addPost={addPost}  profileArr={props.profileArr}/>
    );
}

export default MyPostsConteiner