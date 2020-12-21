import React, {Component} from 'react';
import Header from "../header/header";
import UseScript from "../hooks/useScript";
import Cart from "../cart/cart";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../pages/home/home";
import Service from "../service";
// import Register from "../pages/register/register";


class App extends Component {
    componentDidMount() {

    }

    render() {

        return (
            <Router>
                <Header/>
                <Cart/>
                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    {/*<Route exact path={"/register"}>*/}
                    {/*    <Register/>*/}
                    {/*</Route>*/}

                </Switch>
                <UseScript url={"js/active.js"}/>
            </Router>
        );
    }
}

export default App;