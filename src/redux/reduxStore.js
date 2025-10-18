import {combineReducers, legacy_createStore} from "redux";
import {profileReduser} from "./profileReduser";
import {dialogReduser} from "./dialogsReduser";

let url = "https://i.pinimg.com/736x/00/72/8a/00728a1fd498ec35140f799a3a94df3b.jpg"



let redusers = combineReducers({
    messegesPage: dialogReduser,
    profilePage: profileReduser,
})
let store = legacy_createStore(redusers)

export default store