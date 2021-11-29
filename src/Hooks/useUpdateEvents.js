import { UpdateEvents } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

function useUpdateEvent() {
    const [updateEvents, { loading: loadingUpdate }] =
        useMutation(UpdateEvents);
    return { updateEvents, loadingUpdate };
}

export default useUpdateEvent;
