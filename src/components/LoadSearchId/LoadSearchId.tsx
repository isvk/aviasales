import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadSearchId } from "src/store/search/actions";

export default function LoadSearchId() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadSearchId());
        // eslint-disable-next-line
    }, []);

    return <></>;
}
