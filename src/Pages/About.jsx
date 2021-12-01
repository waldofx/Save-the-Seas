import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./About.module.css";

function About() {
    return (
        <div>
            <Header />
            <div className={`${styles["bg-img"]} ${styles["about"]}`}>
                ::before
                <div className={styles["bg-text"]}>
                    <h1>About Us</h1>
                    <div>
                        We are an organisation dedicated to saving the ocean and
                        marine lifes! Join us and volunteer to help out at your
                        local beach for the sake of our planet!
                    </div>
                </div>
            </div>
            <div className={`${styles["bg-img"]} ${styles["problem"]}`}>
                <div className={`${styles["bg-text"]} ${styles["problem2"]}`}>
                    <h1>The Problem</h1>
                    <div>
                        The oceans are vast, but they are not immune to human
                        influence. We have already altered or destroyed marine
                        ecosystems and driven million-year-old species to the
                        brink of extinction. According to a study published in
                        Science, less than 4 percent of the oceans remain
                        unaffected by human activity.
                    </div>
                </div>
            </div>
            <div className={`${styles["bg-img"]} ${styles["solution"]}`}>
                <div className={`${styles["bg-text"]} ${styles["solution2"]}`}>
                    <h1>Our Solution</h1>
                    <div>
                        Our organisation will host multiple events around the
                        world's coastal areas in which all members will help
                        clean up the trash and garbages left behind. Intrested
                        in helping? Then go ahead and volunteer to participate
                        yourself!
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
