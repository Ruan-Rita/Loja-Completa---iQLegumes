import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilPage";
import SignupPage from "./pages/Signup";

const Routes : React.FC = () => (
    <BrowserRouter>
        <Switch >
            <Route path="/" exact component={HomePage} />
            <Route path="/perfil" exact component={ProfilePage} />
            <Route path="/registrar" exact component={SignupPage} />
            <Route path="/entrar" exact component={LoginPage} />
        </Switch>
    </BrowserRouter>

)

export default Routes;