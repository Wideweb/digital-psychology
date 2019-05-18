import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import styled from 'styled-components';

import { createBrowserHistory } from 'history';
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducer';
import sagas from './sagas';

import HeaderComponent from './components/header';
import AsideComponent from './components/aside';
import BodyComponent from './components/body';
import FooterComponent from './components/footer';

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

export interface IAppProps { }

export interface IAppState {
	location: string;
}

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas: "header header" "aside body" "footer footer";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 1fr 40px;
`;

class AppComponent extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

		this.state = { location: '/' } as IAppState;

        this._openPage = this._openPage.bind(this);
    }

    _openPage(location) {
		this.setState({ location })
        history.push(location);
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Container>
                        <HeaderComponent onOpen={this._openPage}></HeaderComponent>
                        <AsideComponent onOpen={this._openPage} location={this.state.location}></AsideComponent>
                        <BodyComponent></BodyComponent>
                        <FooterComponent></FooterComponent>
                    </Container>
                </Router>
            </Provider>
        );
    }
}

export default AppComponent;
