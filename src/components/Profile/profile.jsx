import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsConteiner from "./MyPosts/Post/MyPostsConteiner";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner profileArr={props.profileArr} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile