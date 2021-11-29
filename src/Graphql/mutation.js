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

const InsertEvents = gql`
    mutation MyMutation($object: events_insert_input = {}) {
        insert_events_one(object: $object) {
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

const DeleteEvents = gql`
    mutation MyMutation($id: Int!) {
        delete_events(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                date
                desc
                id
                img
                location
                participants
                title
            }
        }
    }
`;

const UpdateEvents = gql`
    mutation MyMutation2($object: events_set_input = {}, $id: Int!) {
        update_events(_set: $object, where: { id: { _eq: $id } }) {
            returning {
                date
                desc
                id
                img
                location
                participants
                title
            }
            affected_rows
        }
    }
`;

export { IncrementParticipants, InsertEvents, DeleteEvents, UpdateEvents };
