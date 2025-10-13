import ProfileContent from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts profileArr={props.profileArr} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile