import React, { useEffect, useState } from "react";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Volunteer.module.css";
import Event from "../Components/Events/Event";

//import hooks
import useGetDataByParticipants from "../Hooks/useGetDataByParticipants";

function Volunteer() {
    // ----------------- custom hook graphql -------------------------
    const {
        dataByParticipants,
        loadingDataByParticipants,
        errorDataByParticipants,
    } = useGetDataByParticipants();

    const [eventdatas, setEvents] = useState([]);
    useEffect(() => {
        if (dataByParticipants) {
            setEvents(dataByParticipants.events);
        }
    }, [dataByParticipants]);

    const isError = errorDataByParticipants;
    const isLoading = loadingDataByParticipants;

    // ----------------- render -------------------------
    return (
        <div>
            <Header />
            <div className={styles.breakTitle}>What's popular?</div>
            <div className={styles.container}></div>
            <div>Volunteer Box</div>
            <div className={styles.container}>
                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <p>Now loading...</p>}
                {!isError && !isLoading && (
                    <ul>
                        {eventdatas.map((e) => {
                            // console.log(e.title);
                            return (
                                <Event
                                    key={e.id}
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
