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
                location: {location}, date: {date}, participants:
                {participants}
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Event;
