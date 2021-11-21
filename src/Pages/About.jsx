import React from "react";
import Header from "../Components/Header";
import classes from "./About.module.css";
// import { Link } from "react-router-dom";

function About() {
    return (
        <div className={classes.bgImg}>
            <Header />
            <main className={classes.container}></main>
        </div>
    );
}

export default About;
