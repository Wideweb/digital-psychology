import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import { css } from 'glamor';

import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router';

import HomeComponent from './components/home.component';
import AuthComponent from '../auth';
import EmotionsDetectComponent from '../emotions/emotions-detect';
import EmotionsTrainComponent from '../emotions/emotions-train';
import PatientsComponent from '../patients';
import PatientComponent from '../patient';

import createRootReducer from './reducer';
import sagas from './sagas';

css.global('html, body', {
    background: '#f3f3f3',
    margin: 0
});

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createRootReducer(history),
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        sagaMiddleware
    ),
);
sagaMiddleware.run(sagas);

export interface AppProps {
    compiler: string;
    framework: string;
}

class AppComponent extends React.Component<AppProps, {}> {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <header>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/train">Train</Link>
                            <Link to="/detect">Detect</Link>
                        </header>
                        <main>
                            <Switch>
                                <Route exact path="/" component={HomeComponent} />
                                <Route exact path="/login" component={AuthComponent} />
                                <Route exact path="/train" component={EmotionsTrainComponent} />
                                <Route exact path="/detect" component={EmotionsDetectComponent} />
                                <Route exact path="/patients" component={PatientsComponent} />
                                <Route exact path="/patients/:id" component={PatientComponent} />
                            </Switch>
                        </main>
                    </div>
                </Router>
            </Provider >
        );
    }
}

export default AppComponent;
