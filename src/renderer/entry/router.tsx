import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Calendone from '../containers/calendone';

const Home = function(): JSX.Element {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Calendone} />
            </Switch>
        </HashRouter>
    );
}

export default hot(module)(Home);
