import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import MoviePreviewPage from "./pages/MoviePreviewPage";
import RequestsPage from "./pages/RequestsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" render={ (props) => (
                    <DashboardPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/movie/:id" render={ (props) => (
                    <MoviePreviewPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/requests" render={ (props) => (
                    <RequestsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/" exact render={ (props) => (
                    <LoginPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/register" render={ (props) => (
                    <RegisterPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
            </Switch>
        </Router>
    )
}

export default App;