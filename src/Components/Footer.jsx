import React from "react";
import classes from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={classes["footer-container"]}>
                <div className={classes["social-container"]}>
                    <a href="">
                        <img
                            alt="location"
                            src="https://img.icons8.com/material-sharp/30/ffffff/marker.png"
                        />
                    </a>
                    <a href="">
                        <img
                            alt="phone"
                            src="https://img.icons8.com/material-outlined/30/ffffff/phone.png"
                        />
                    </a>
                    <a href="">
                        <img
                            alt="facebook"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                        />
                    </a>
                    <a href="">
                        <img
                            alt="twitter"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter-circled--v1.png"
                        />
                    </a>
                    <a href="">
                        <img
                            alt="instagram"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                        />
                    </a>
                </div>
                <div className={classes["text"]}>© 2021, Save The Seas</div>
            </div>
        </footer>
    );
}

export default Footer;
