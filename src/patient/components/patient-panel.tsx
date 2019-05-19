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
    border-right: 1px solid #333;
`;

const Avatar = styled.img`
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

const MentalState = styled.div`
	align-self: center;
	padding: 10px;
`;

class PatientPanelComponent extends React.Component<IPatientPanelProps> {
    render() {
        return (
            <Container>
                <Avatar src={require("../../../assets/patient.jpg")}></Avatar>
                <Name>{this.props.data.name}, {this.props.data.age}</Name>
                <MentalState>{this.props.data.mentalState}</MentalState>
            </Container>
        );
    }
}

export default PatientPanelComponent;
