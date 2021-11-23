import { gql } from "@apollo/client";

const GetEventsByParticipants = gql`
    query MyQuery {
        events(order_by: { participants: desc }) {
            date
            desc
            img
            location
            participants
            title
        }
    }
`;

export { GetEventsByParticipants };
