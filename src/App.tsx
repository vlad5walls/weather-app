import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Week from "./components/week/week";
import Current from "./components/current/current";
import NotFoundPage from "./components/404-not-found-page/notFoundPage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <Header/>

                <Switch>

                    <Route exact path="/" component={Current}/>
                    <Route exact path="/week" component={Week}/>
                    <Route exact path='/404-page' component={NotFoundPage}/>
                    <Redirect to='/404-page'/>

                </Switch>

                <Footer/>

            </BrowserRouter>

        </div>
    );
}

export default App;
