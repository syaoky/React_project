import ProfileContent from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile