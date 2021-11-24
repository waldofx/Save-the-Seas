import styles from "./Event.module.css";

const Event = ({ title, location, date, participants, image, desc }) => {
    return (
        <div className={styles.card}>
            <div>
                <img
                    src={image}
                    alt="event thumbnail"
                    className={styles.thumb}
                ></img>
            </div>
            <div className={styles["content"]}>
                <h1>{title}</h1>
                <h4>Location: {location}</h4>
                <h5>Date: {date}</h5>
                <p>{desc}</p>
                <p>
                    Current Participants:{" "}
                    <span className={styles.participants}>{participants}</span>
                </p>
            </div>
            <button>Participate</button>
        </div>
    );
};

export default Event;
