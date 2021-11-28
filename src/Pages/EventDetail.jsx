import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoadingSVG from "../Components/LoadingSVG";
import styles from "./EventDetail.module.css";

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
                            <div className={styles["details"]}>
                                <img src={v.img} alt="thumbnail" />
                                <p>Title: {v.title}</p>
                                <p>Location: {v.location}</p>
                                <p>Date: {v.date}</p>
                                <p>Current Participants :{v.participants}</p>
                                <p>
                                    Description:
                                    <br />
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default EventDetail;
