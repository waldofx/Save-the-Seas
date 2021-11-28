import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./About.module.css";
// import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Header />
            <div className={`${styles["bg-img"]} ${styles["about"]}`}>
                <div className={styles["bg-text"]}>
                    ABOUT
                    <div>
                        We are an organisation dedicated to saving the ocean and
                        marine lifes! Join us and help out at your local beach
                        for the sake of our planet!
                    </div>
                </div>
            </div>
            <div className={`${styles["bg-img"]} ${styles["problem"]}`}>
                <div className={`${styles["bg-text"]} ${styles["problem2"]}`}>
                    PROBLEM
                </div>
            </div>
            <div className={`${styles["bg-img"]} ${styles["solution"]}`}>
                <div className={`${styles["bg-text"]} ${styles["solution2"]}`}>
                    SOLUTION
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
