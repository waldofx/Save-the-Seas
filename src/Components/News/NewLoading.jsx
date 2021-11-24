import React from "react";
import styles from "./New.module.css";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";

function NewLoading() {
    return (
        <div className={styles.list}>
            <Card>
                <div className={styles.contain}>
                    <div className={styles.wrapper}>
                        <Skeleton height={250} />
                    </div>
                    <h3>
                        <Skeleton />
                    </h3>
                    <p>
                        <Skeleton />
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default NewLoading;
