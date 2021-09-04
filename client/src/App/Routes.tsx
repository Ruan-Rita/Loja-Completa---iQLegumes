import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilPage";

const Routes : React.FC = () => (
    <BrowserRouter>
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/perfil" exact component={ProfilePage} />
        </Switch>
    </BrowserRouter>

)

export default Routes;