import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoadingSVG from "../Components/LoadingSVG";
import styles from "./EventDetail.module.css";

//import hooks
import useDeleteEvent from "../Hooks/useDeleteEvents";

const GetEventByID = gql`
    query MyQuery($id: Int!) {
        events(where: { id: { _eq: $id } }) {
            date
            desc
            id
            img
            location
            participants
            title
        }
    }
`;

function EventDetail() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GetEventByID, {
        variables: { id },
    });

    //Delete
    const { isAuthenticated } = useAuth0();
    const { deleteEvents } = useDeleteEvent();

    function handleDelete(e) {
        if (window.confirm("Are you sure you want to delete this event?")) {
            deleteEvents({
                variables: {
                    id: id,
                },
            });
            window.alert("Event deleted!");
        }
    }

    return (
        <div>
            <Header />
            {error && (
                <p className={styles["container"]}>Something Went Wrong...</p>
            )}
            {loading && (
                <div className={styles["container"]}>
                    <LoadingSVG />
                </div>
            )}
            {!error && !loading && (
                <div>
                    {data?.events.map((v, i) => (
                        <div className={styles["container"]} key={i}>
                            <div className={styles["card"]}>
                                <div>
                                    <img src={v.img} alt="thumbnail" />
                                </div>
                                <div className={styles["details"]}>
                                    <h1>{v.title}</h1>
                                    <h4>Location: {v.location}</h4>
                                    <h5>Date: {v.date}</h5>
                                    <p>
                                        Current Participants:
                                        <span className={styles.participants}>
                                            {v.participants}
                                        </span>
                                    </p>
                                    <p>
                                        Description:
                                        <br />
                                        <span className={styles.description}>
                                            {v.desc}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {isAuthenticated && (
                                <div className={styles.buttons}>
                                    <button
                                        className={styles["delete"]}
                                        onClick={handleDelete}
                                    >
                                        DELETE EVENT
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default EventDetail;
