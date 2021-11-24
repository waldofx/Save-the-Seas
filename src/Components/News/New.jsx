import React from "react";
import styles from "./New.module.css";
import Card from "./Card";

function New({ author, title, desc, image, url, date }) {
    return (
        <li data-testid="new" className={styles.list}>
            <Card>
                <div className={styles.contain}>
                    <div className={styles.thumb}>
                        <img src={image} alt="news_thumbnail" />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>
                            <a href={url} rel="noopener noreferrer">
                                {title}
                            </a>
                        </h1>
                        <p>{date}</p>
                        <p>{desc}</p>
                        {/* <p>Author : {author}</p> */}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default New;
