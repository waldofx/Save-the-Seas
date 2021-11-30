/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import LoginButton from "./Account/LoginButton";
import LogoutButton from "./Account/LogoutButton";

function Header() {
    const [menuActive, setMenuState] = useState(false);

    return (
        <header>
            <div className={styles["header-container"]}>
                <a
                    // eslint-disable-next-line no-script-url
                    href="javascript:void(0);"
                    className={styles.icon}
                    onClick={() => setMenuState(!menuActive)}
                >
                    &#9776;
                </a>
                <ul
                    className={`${styles["myList-nav"]} ${
                        menuActive ? styles["responsive"] : ""
                    }`}
                >
                    <li>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to="/"
                            exact
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to="/about"
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to="/news"
                        >
                            NEWS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to="/volunteer"
                        >
                            VOLUNTEER
                        </NavLink>
                    </li>
                    <li>
                        {/* <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to="/login"
                        >
                            LOG IN
                        </NavLink> */}
                        <LoginButton />
                        <LogoutButton />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
