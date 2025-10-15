import './App.css';
import Header from "./components/header/header";
import Nav from "./components/navBar/navBar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
        <div className="app-wraper">
            <Header/>
            <Nav/>
            <div className='app-wraper-cont'>
                <Routes>
                    <Route path='/profile' element={<Profile profileArr={props.state.profile} dispatch={props.dispatch}/>} />
                    <Route path='/dialogs*' element={<Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
