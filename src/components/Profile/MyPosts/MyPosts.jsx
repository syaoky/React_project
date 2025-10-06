import React from "react";
import MyPostsC from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={MyPostsC.content}>
            <div>
                My Posts
                <div>
                    new Posts
                </div>
                <Post name="dima" age="25"/>
                <Post name="oleg" age="34"/>
                <Post/>
                <Post/>
            </div>

        </div>
    );
}

export default MyPosts