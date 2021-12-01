import { DeleteEvents } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteEvent() {
    const [deleteEvents, { loading: loadingDelete }] =
        useMutation(DeleteEvents);
    return { deleteEvents, loadingDelete };
}

export default useDeleteEvent;
