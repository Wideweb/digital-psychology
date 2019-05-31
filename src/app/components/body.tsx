import * as React from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import PatientsComponent from '../../patients';
import PatientComponent from '../../patient';

interface BodyProps {
    baseUrl: string;
};

const Container = styled.main`
    grid-area: body;
	overflow: hidden;
`;

class BodyComponent extends React.Component<BodyProps, {}> {
    render() {
        return (
            <Container>
                <Route exact path={`${this.props.baseUrl}`} />
                <Route exact path={`${this.props.baseUrl}/patients`} component={PatientsComponent} />
                <Route path={`${this.props.baseUrl}/patients/:id`} component={PatientComponent} />
            </Container>
        )
    }
}

export default BodyComponent;