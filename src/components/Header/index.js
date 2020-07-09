import React from "react";
import Background from "../../assets/imgs/header-background.svg";
import Logo from "../../assets/imgs/logo.svg";

const Header = () => {
  return (
    <header className="header" style={{backgroundImage: `url(${Background})`}} >
      <img className="header__logo" src={Logo} alt="Logo Speak up Tech"/>
    </header>
  )
}

export default Header;