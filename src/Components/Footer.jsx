import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={styles["footer-container"]}>
                <div className={styles["social-container"]}>
                    <a
                        href="https://github.com/waldofx/Save-the-Seas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="location"
                            src="https://img.icons8.com/material-sharp/30/ffffff/marker.png"
                        />
                    </a>
                    <a
                        href="https://github.com/waldofx/Save-the-Seas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="phone"
                            src="https://img.icons8.com/material-outlined/30/ffffff/phone.png"
                        />
                    </a>
                    <a
                        href="https://github.com/waldofx/Save-the-Seas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="facebook"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                        />
                    </a>
                    <a
                        href="https://github.com/waldofx/Save-the-Seas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="twitter"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter-circled--v1.png"
                        />
                    </a>
                    <a
                        href="https://github.com/waldofx/Save-the-Seas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="instagram"
                            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                        />
                    </a>
                </div>
                <div className={styles["text"]}>© 2021, Save The Seas</div>
            </div>
        </footer>
    );
}

export default Footer;
