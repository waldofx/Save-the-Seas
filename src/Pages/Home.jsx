import React from "react";
import Header from "../Components/Header";
import classes from "./Home.module.css";
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />
            <div className={classes.bgImg}>
                {/* <main className={classes.container}></main> */}
            </div>
        </div>
    );
}

export default Home;
