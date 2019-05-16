import * as React from 'react';
import { Patient } from '../types';
import styled from 'styled-components';

interface IPatientPanelProps {
    data: Patient;
}

const Container = styled.div`
    width: 200px;
    display: flex;
	flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px 10px;
    box-shadow: 5px 0 5px -5px #333;
`;

const Avatar = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: grey;
    align-self: center;
    margin: 0 0 10px 0;
`;

const Name = styled.div`
    align-self: center;
`;

class PatientPanelComponent extends React.Component<IPatientPanelProps> {
    render() {
        return (
            <Container>
                <Avatar></Avatar>
                <Name>{this.props.data.name}</Name>
            </Container>
        );
    }
}

export default PatientPanelComponent;
