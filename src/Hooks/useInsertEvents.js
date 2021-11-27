import { InsertEvents } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertEvent() {
    const [insertEvents, { loading: loadingInsert }] =
        useMutation(InsertEvents);
    return { insertEvents, loadingInsert };
}

export default useInsertEvent;
