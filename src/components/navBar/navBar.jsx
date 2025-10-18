import Logo from "../../Logo.svg";
import Navbar from "./navBar.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={Navbar.nav}>
            <div><NavLink to="/profilePage" className = { navData => navData.isActive ? Navbar.active : Navbar.item }>Profile </NavLink></div>
            <div><NavLink to="/dialogs" className = { navData => navData.isActive ? Navbar.active : Navbar.item }>Messages</NavLink></div>
            <div><NavLink to="/news" className = { navData => navData.isActive ? Navbar.active : Navbar.item }>News</NavLink></div>
            <div><NavLink to="/musik" className = { navData => navData.isActive ? Navbar.active : Navbar.item }>Music</NavLink></div>
            <div className={Navbar.setting } ><NavLink to="/setting" className = { navData => navData.isActive ? Navbar.active : Navbar.item }>Setting</NavLink></div>
        </nav>);
}

export default Nav