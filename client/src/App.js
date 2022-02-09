import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchAllMovies } from "./actions/movieActions";

import PrivateRoute from "./private/PrivateRoute";

import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserFavouriteMoviesPage from "./pages/UserFavouriteMoviesPage";
import UserMyMoviesPage from "./pages/UserMyMoviesPage";
import UserMyReviewsPage from "./pages/UserMyReviewsPage";
import Error404Page from "./pages/Error404Page";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchAllMovies() )
    }, [])

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <Switch>
                <PrivateRoute path="/user/:id" component={ UserProfilePage } />
                <PrivateRoute path="/user=:id/favouritemovies" component={ UserFavouriteMoviesPage } />
                <PrivateRoute path="/user=:id/mymovies" component={ UserMyMoviesPage } />
                <PrivateRoute path="/user=:id/myreviews" component={ UserMyReviewsPage } />
                <Route path="/" exact render={ (props) => (
                    <IntroPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/home" render={ (props) => (
                    <HomePage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/movies" render={ (props) => (
                    <MoviePage { ...props } page={ page } setPage={ setPage } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/movies/search" render={ (props) => (
                    <MoviePage { ...props } page={ page } setPage={ setPage } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/movie/:id" render={ (props) => (
                    <MovieDetailsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/login" render={ (props) => (
                    <LoginPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/register" render={ (props) => (
                    <RegisterPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/contactus" render={ (props) => (
                    <ContactUsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/aboutus" render={ (props) => (
                    <AboutUsPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="/privacy" render={ (props) => (
                    <PrivacyPolicyPage { ...props } isOpen={ isOpen } toggleOpen={ toggleOpen } />
                ) } />
                <Route path="" component={ Error404Page } />
            </Switch>
        </Router>
    )
}

export default App;