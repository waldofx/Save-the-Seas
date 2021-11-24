import { useQuery } from "@apollo/client";
import { GetEventsByDate } from "../Graphql/query";

function useGetDataByDate() {
    const {
        data: dataByDate,
        loading: loadingDataByDate,
        error: errorDataByDate,
    } = useQuery(GetEventsByDate);
    return {
        dataByDate,
        loadingDataByDate,
        errorDataByDate,
    };
}

export default useGetDataByDate;
