import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={classes["header-container"]}>
                <ul className={classes["myList-nav"]}>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            to="/"
                            exact
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            to="/about"
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            to="/news"
                        >
                            NEWS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            to="/volunteer"
                        >
                            VOLUNTEER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={classes.link}
                            activeClassName={classes.active}
                            to="/login"
                        >
                            LOG IN
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
