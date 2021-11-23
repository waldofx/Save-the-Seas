import { useQuery } from "@apollo/client";
import { GetEventsByParticipants } from "../Graphql/query";

function useGetDataByParticipants() {
    const {
        data: dataByParticipants,
        loading: loadingDataByParticipants,
        error: errorDataByParticipants,
    } = useQuery(GetEventsByParticipants);
    return {
        dataByParticipants,
        loadingDataByParticipants,
        errorDataByParticipants,
    };
}

export default useGetDataByParticipants;
