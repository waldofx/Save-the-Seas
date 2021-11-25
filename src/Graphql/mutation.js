import { gql } from "@apollo/client";

const IncrementParticipants = gql`
    mutation MyMutation($id: Int!) {
        update_events_by_pk(
            pk_columns: { id: $id }
            _inc: { participants: 1 }
        ) {
            title
            participants
            location
            img
            id
            desc
            date
        }
    }
`;

export { IncrementParticipants };
