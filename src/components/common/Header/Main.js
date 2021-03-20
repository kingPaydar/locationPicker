import React from "react";
import Images from "../../../images/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={Images} alt="logo" />
      </nav>
      <h1>Location Picker</h1>
    </header>
  );
}

export default Header;
