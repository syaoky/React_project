import ProfileInfo from "./profileInfo/profileInfo";
import MyPostsConteiner from "./MyPosts/Post/MyPostsConteiner";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner/>
        </div>
    );
}

export default Profile