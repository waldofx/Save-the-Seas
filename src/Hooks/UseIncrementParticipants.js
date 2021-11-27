import { IncrementParticipants } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

function useIncrementParticipants() {
    const [incrementParticipants, { loading: loadingUpdate }] = useMutation(
        IncrementParticipants
    );
    return { incrementParticipants, loadingUpdate };
}

export default useIncrementParticipants;
