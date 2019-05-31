import * as React from 'react';
import styled from 'styled-components';

import HeaderComponent from './header';
import AsideComponent from './aside';
import BodyComponent from './body';
import FooterComponent from './footer';

import requiresAuth from '../../auth/components/auth-required.hoc';

export interface IAppProps {
    auth: any;
    match: any;
}

export interface IAppState { }

const Layout = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas: 'header header' 'aside body' 'footer footer';
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 1fr 40px;
`;

class AppComponent extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <Layout>
                <HeaderComponent></HeaderComponent>
                <AsideComponent baseUrl={this.props.match.url}></AsideComponent>
                <BodyComponent  baseUrl={this.props.match.url}></BodyComponent>
                <FooterComponent></FooterComponent>
            </Layout>
        );
    }
}

export default requiresAuth(AppComponent);
