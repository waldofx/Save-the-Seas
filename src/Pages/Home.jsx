import React from "react";
import Header from "../Components/Header";
import classes from "./Home.module.css";
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={classes.bgImg}>
            <Header />
            <main className={classes.container}></main>
        </div>
    );
}

export default Home;
