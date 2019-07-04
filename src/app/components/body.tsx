import * as React from 'react';
import { Route } from 'react-router';
import styled, { keyframes } from 'styled-components';

const PatientsComponent = React.lazy(() => import('../../patients'));
const PatientComponent = React.lazy(() => import('../../patient'));

interface BodyProps {
    baseUrl: string;
};

const Container = styled.main`
    grid-area: body;
    overflow: hidden;
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
    border: 13px solid #f3f3f3;
    border-top: 13px solid darkcyan;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 2s linear infinite;
`;

class BodyComponent extends React.Component<BodyProps, {}> {
    render() {
        return (
            <Container>
                <React.Suspense fallback={<SpinnerContainer><Spinner></Spinner></SpinnerContainer>}>
                    <Route exact path={`${this.props.baseUrl}`} />
                    <Route exact path={`${this.props.baseUrl}/patients`} component={PatientsComponent} />
                    <Route path={`${this.props.baseUrl}/patients/:id`} component={PatientComponent} />
                </React.Suspense>
            </Container>
        )
    }
}

export default BodyComponent;