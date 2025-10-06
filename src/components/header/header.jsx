import Logo from "../../Logo.svg";
import Head from "./header.module.css"

const Header = () => {
    return (
        <header className={Head.head}>
            <img src={Logo} alt=""/>
        </header>
    );
}

export default Header