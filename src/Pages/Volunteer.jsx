import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Volunteer.module.css";
import Event from "../Components/Events/Event";

function Volunteer() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div>
            <Header />
            <div className={styles.breakTitle}>What's popular?</div>
            <div className={styles.container}></div>
            <div>Volunteer Box</div>
            <div className={styles.container}>
                {error && <p className={styles.error}>{error}</p>}
                {isLoading && <p>Now loading...</p>}
                {!error && !isLoading && (
                    <ul>
                        {events.map((e, idx) => {
                            return (
                                <Event
                                    key={idx}
                                    title={e.title}
                                    location={e.location}
                                    date={e.date}
                                    participants={e.participants}
                                    image={e.img}
                                    desc={e.desc}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Volunteer;
