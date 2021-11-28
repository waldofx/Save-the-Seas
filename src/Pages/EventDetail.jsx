import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

//import components and styles
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import styles from "./EventDetail.module.css";

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
    const { data, isLoading, isError } = useQuery(GetEventByID, {
        variables: { id },
    });

    return (
        <div>
            <Header />
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <p>Now loading...</p>}
            {!isError && !isLoading && (
                <div>
                    {data?.events.map((v, i) => (
                        <div className="container" key={i}>
                            <img
                                src={v.img}
                                style={{
                                    width: "20%",
                                    marginBottom: "5%",
                                }}
                                alt="thumbnail"
                            />
                            <p>Title :{v.title}</p>
                            <p>Location :{v.location}</p>
                            <p>Date :{v.date}</p>
                            <p style={{ whiteSpace: "pre-line" }}>
                                Description :
                                <br />
                                {v.desc}
                            </p>
                            <p>Participants :{v.participants}</p>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default EventDetail;
