import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import styled from 'styled-components';

import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducer';
import sagas from './sagas';

import AppComponent from './components/app';
import LoginComponent from '../auth/components/login.component';

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

const Container = styled.div`
	height: 100%;
	
	> * {
		height: 100%;
	}
`;

class MainComponent extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Container>
                        <Switch>
                            <Route path='/' component={AppComponent} />
                            <Route exact path='/login' component={LoginComponent} />
                            <Route exact path='/sign-in' component={LoginComponent} />
                        </Switch>
                    </Container>
                </Router>
            </Provider>
        );
    }
}

export default MainComponent;
