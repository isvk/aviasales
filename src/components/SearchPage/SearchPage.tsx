import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { getSearchId } from "src/store/search/actions";
import { searchGetSearchId } from "src/store/rootSelector";

import "./SearchPage.scss";

export default function SearchPage() {
    const dispatch = useCustomDispatch();
    const searchId = useCustomSelector(searchGetSearchId);

    if (searchId === "") {
        dispatch(getSearchId());
    } else {
        console.log("Preload getSearchId");
    }

    return (
        <div className="searchPage">
            <h1>Aviasales Test Task</h1>
        </div>
    );
}
