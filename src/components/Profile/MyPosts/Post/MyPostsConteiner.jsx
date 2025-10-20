import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReduser";
import {connect} from "react-redux";

let mapStateToProps =  (state) => {
    return{
        profileArr: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => ({
        addPost: (text) => (
            dispatch(addPostActionCreator(text))
        ),

        onChangeText: (text) => (
            dispatch(updateNewPostTextActionCreator(text))
    )

})
//
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner