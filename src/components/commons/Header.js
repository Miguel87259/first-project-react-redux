import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#1D8348" };
    return (
        <nav className="navbar">
            <NavLink to="/" activeStyle={activeStyle} exact>
                Inicio
            </NavLink>
            <NavLink to="/login" activeStyle={activeStyle}>
                Login
            </NavLink>
            <NavLink to="/registro" activeStyle={activeStyle}>
                Registro
            </NavLink>
        </nav>
    );
};

export default Header;