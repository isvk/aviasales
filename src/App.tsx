import React from "react";
import { Route, Switch } from "react-router";
import SearchPage from "./components/SearchPage/SearchPage";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={SearchPage} />
        </Switch>
    );
};

export default App;
