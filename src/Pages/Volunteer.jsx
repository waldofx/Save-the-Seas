import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Volunteer.module.css";
import Event from "../Components/Events/Event";

//import hooks
import useGetDataByParticipants from "../Hooks/useGetDataByParticipants";
import useGetDataByDate from "../Hooks/useGetDataByDate";

function Volunteer() {
    // ----------------- custom hook graphql -------------------------
    const {
        dataByParticipants,
        loadingDataByParticipants,
        errorDataByParticipants,
    } = useGetDataByParticipants();
    const { dataByDate, loadingDataByDate, errorDataByDate } =
        useGetDataByDate();

    //setevents at the start of render using useeffect
    const [eventdatasP, setEventsP] = useState([]);
    useEffect(() => {
        if (dataByParticipants) {
            setEventsP(dataByParticipants.events);
        }
    }, [dataByParticipants]);

    const [eventdatasD, setEventsD] = useState([]);
    useEffect(() => {
        if (dataByDate) {
            setEventsD(dataByDate.events);
        }
    }, [dataByDate]);

    //error + loading
    const isError = errorDataByParticipants || errorDataByDate;
    const isLoading = loadingDataByParticipants || loadingDataByDate;

    // ----------------- render -------------------------
    return (
        <div>
            <Header />
            <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/volunteer/create"
                exact
            >
                Create
            </NavLink>
            <div className={styles.breakTitle}>Upcoming Events</div>
            <hr style={{ width: "98%" }} size={2} color="#000000" />
            <div className={styles.container}>
                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <p>Now loading...</p>}
                {!isError && !isLoading && (
                    <ul className={styles.eventlist}>
                        {eventdatasD.map((e) => {
                            return (
                                <Event
                                    key={e.id}
                                    id={e.id}
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
            <div className={styles.breakTitle}>What's popular?</div>
            <hr style={{ width: "98%" }} size={2} color="#000000" />
            <div className={styles.container}>
                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <p>Now loading...</p>}
                {!isError && !isLoading && (
                    <ul className={styles.eventlist}>
                        {eventdatasP.map((e) => {
                            return (
                                <Event
                                    key={e.id}
                                    id={e.id}
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
