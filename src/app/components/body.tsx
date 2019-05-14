import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';

import AuthComponent from '../../auth';
import PatientsComponent from '../../patients';
import PatientComponent from '../../patient';

interface BodyProps {};

const Container = styled.main`
    grid-area: body;
    overflow: auto;
`;

class BodyComponent extends React.Component<BodyProps, {}> {
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" />
                    <Route exact path="/login" component={AuthComponent} />
                    <Route exact path="/patients" component={PatientsComponent} />
                    <Route exact path="/patients/:id" component={PatientComponent} />
                </Switch>
            </Container>
        )
    }
}

export default BodyComponent;