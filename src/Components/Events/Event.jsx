import styles from "./Event.module.css";
import useIncrementParticipants from "../../Hooks/UseIncrementParticipants";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Event = ({ id, title, location, date, participants, image, desc }) => {
    const { isAuthenticated } = useAuth0();

    const { incrementParticipants } = useIncrementParticipants();
    const participateHandler = () => {
        if (isAuthenticated) {
            incrementParticipants({
                variables: {
                    id: id,
                },
            });
        } else {
            alert("You need to log in first!");
        }
    };

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
                {/* <p>{desc}</p> */}
                <p>
                    Current Participants:
                    <span className={styles.participants}>{participants}</span>
                </p>
            </div>
            <button onClick={participateHandler}>Participate</button>
            <div className={styles.detail}>
                <Link to={`/volunteer/detail/${id}`}>Details</Link>
            </div>
        </div>
    );
};

export default Event;
