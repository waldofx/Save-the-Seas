import React from "react";
import classes from "./New.module.css";
import Card from "./Card";

function New({ author, title, desc, image, url, date }) {
    return (
        <li data-testid="new" className={classes.list}>
            <Card>
                <div className={classes.contain}>
                    <div className={classes.thumb}>
                        <img src={image} alt="new" />
                    </div>
                    <div className={classes.content}>
                        <h1>
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
