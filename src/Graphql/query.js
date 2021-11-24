import { gql } from "@apollo/client";

const GetEventsByParticipants = gql`
    query MyQuery {
        events(limit: 9, order_by: { participants: desc }) {
            id
            date
            desc
            img
            location
            participants
            title
        }
    }
`;

const GetEventsByDate = gql`
    query MyQuery {
        events(limit: 9, order_by: { date: asc }) {
            img
            title
            participants
            location
            id
            desc
            date
        }
    }
`;

export { GetEventsByParticipants, GetEventsByDate };
