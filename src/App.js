import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home"
import PortfolioPage from "./Pages/PortfolioPage"
import page404 from "./Pages/Page404"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/gallery' component={PortfolioPage} />
                    <Route exact path="*" component={page404} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;