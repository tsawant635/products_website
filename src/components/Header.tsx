// Packages Import 
import React, { useState } from "react";

//Styles Import
import styles from "@/styles/Header.module.scss";

const Header: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoNav}>
        <div className={styles.logoContainer}>
          <img
            src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702630150/LOGO_1_c7pcdz.png"
            alt="logo img"
          />
        </div>
        <ul
          className={
            click ? `${styles.navOptions} ${styles.active}` : styles.navOptions
          }
        >
          <li className={styles.optionImg}>
            <img
              src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702630150/LOGO_1_c7pcdz.png"
              alt="logo img"
            />
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="./">Home </a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="./products">Products</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className={styles.mobileMenu} onClick={handleClick}>
        {!click ? (
          <img
            src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702696274/Vector_dcvncc.svg"
            alt=""
            className={styles.menuIcon}
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702698469/Vector_1_nknjz4.svg"
            alt=""
            className={styles.menuIcon}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
