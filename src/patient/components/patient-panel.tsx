import * as React from 'react';
import { Patient } from '../types';
import styled from 'styled-components';

interface IPatientPanelProps {
    data: Patient;
}

const Container = styled.div`
    width: 100px;
    display: flex;
	flex-direction: column;
	overflow: hidden;
`;

class PatientPanelComponent extends React.Component<IPatientPanelProps> {
    render() {
        return (
			<Container>{this.props.data.name}</Container>
        );
    }
}

export default PatientPanelComponent;
