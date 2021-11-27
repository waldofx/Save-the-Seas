import React from "react";
import Header from "../Components/Header";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />
            <div className={styles.bgImg}></div>
            <div className={styles.bgText}>
                <h1 className={`${styles["text"]} ${styles["text-title"]}`}>
                    Save The Seas
                </h1>
                <p className={`${styles["text"]} ${styles["text-md"]}`}>
                    Help us save the seas by cleaning up the trash left behind!
                </p>
                <Link to="/about">
                    <button data-test-id="btn" className={styles.btn}>
                        Learn More
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
