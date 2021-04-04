import React from "react";
import Images from "../../../images/logo.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <img src={Images} alt="logo" />
      </nav>
      <h1>Location Picker</h1>
    </header>
  );
}

export default Header;
