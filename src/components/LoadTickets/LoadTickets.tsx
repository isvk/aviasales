import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { searchGetSearchId } from "src/store/rootSelector";
import { loadTickets } from "src/store/tickets/actions";

export default function LoadTickets() {
    const dispatch = useCustomDispatch();
    const searchId = useCustomSelector(searchGetSearchId);

    useEffect(() => {
        dispatch(loadTickets(searchId));
        // eslint-disable-next-line
    }, []);

    return <></>;
}
