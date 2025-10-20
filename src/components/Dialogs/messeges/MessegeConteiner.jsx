import {addMessegeActeionCreater, updateNewTextMessege} from "../../../redux/dialogsReduser";
import MessegeList from "./Messege";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messeges: state.messegesPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
            updateText: (text) => (
        dispatch(updateNewTextMessege(text))
            ),

    addNewMessege: (text) => (
        dispatch(addMessegeActeionCreater(text))
    )
    }
}

const ComteinerMessegeList = connect(mapStateToProps, mapDispatchToProps)(MessegeList);


export default ComteinerMessegeList