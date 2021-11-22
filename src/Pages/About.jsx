import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import classes from "./About.module.css";
// import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <Header />
            <div className={`${classes["bg-img"]} ${classes["about"]}`}>
                <div className={classes["bg-text"]}>
                    ABOUT
                    <div>BRUH BRUH BRUH BRUH BRUH BRUH BRUH BURH</div>
                </div>
            </div>
            <div className={`${classes["bg-img"]} ${classes["problem"]}`}>
                <div className={classes["bg-text"]}>PROBLEM</div>
            </div>
            <div className={`${classes["bg-img"]} ${classes["solution"]}`}>
                <div className={classes["bg-text"]}>SOLUTION</div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
