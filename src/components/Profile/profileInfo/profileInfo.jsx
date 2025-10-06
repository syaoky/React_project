
import ProfileContent from "./profileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={ProfileContent.logo}
                     src="https://cdn.shopify.com/s/files/1/0533/2089/files/img-url.jpg?v=1515001215"
                     alt=""/>
            </div>
            <div>
                AVA AND Diraction
            </div>
        </div>
    );
}

export default ProfileInfo