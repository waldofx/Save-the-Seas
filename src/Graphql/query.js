import { gql } from "@apollo/client";

const GetEventsByParticipants = gql`
    query MyQuery {
        events(
            limit: 3
            order_by: { participants: desc }
            where: { date: { _gt: "{now()}" } }
        ) {
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
        events(order_by: { date: asc }, where: { date: { _gt: "{now()}" } }) {
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
