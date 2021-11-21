import React from "react";
import Header from "../Components/Header";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        // <div className={classes.bgImg}>
        <div>
            <Header />
            <div className={classes.bgImg}></div>
            <div className={classes.bgText}>
                <h1 className={`${classes["text"]} ${classes["text-title"]}`}>
                    Save The Seas
                </h1>
                <p className={`${classes["text"]} ${classes["text-md"]}`}>
                    Help us save the seas by cleaning up the trash left behind!
                </p>
                <Link to="/contact">
                    <button data-test-id="btn" className={classes.btn}>
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
