import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Patient } from '../types';
import format from 'dateformat';

interface IPatientDetailProps {
    data: Patient;
}

interface IPatientDetailState {}

const Form = styled.form`
    height: 100%;
	width: 100%;
`;

const Section = styled.div`
`;

const SectionTitle = styled.div`
    font-size: 18px;
    color: black;
    padding: 12px 0;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Field = styled.div`
    margin: 0 0 20px 0;
    width: auto;
    min-width: 250px;
`;

const Label = styled.div`
    padding: 4px 0;
    color: #7e9aaa;
    font-size: 12px;
`;

const Value = styled.div`
    font-size: 13px;
    color: black;
`;

class PatientDetailComponent extends React.Component<IPatientDetailProps, IPatientDetailState> {
	render() {
		return (
			<Form>
                <Section>
                    <SectionTitle>Contanct Info</SectionTitle>
                    <Row>
                        <Field>
                            <Label>Country</Label>
                            <Value>{this.props.data.country}</Value>
                        </Field>
                        <Field>
                            <Label>Preferred Language</Label>
                            <Value>{this.props.data.preferredLanguage}</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>Address 1</Label>
                            <Value>{this.props.data.address1}</Value>
                        </Field>
                        <Field>
                            <Label>Address 2</Label>
                            <Value>{this.props.data.address2}</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>City</Label>
                            <Value>{this.props.data.country}</Value>
                        </Field>
                        <Field>
                            <Label>ZIP/Postal Code</Label>
                            <Value>{this.props.data.zip}</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>Email</Label>
                            <Value>{this.props.data.email}</Value>
                        </Field>
                    </Row>
                </Section>
                <Section>
                    <SectionTitle>Diagnosis</SectionTitle>
                    <Row>
                        <Field>
                            <Label>Diagnosis</Label>
                            <Value>{this.props.data.diagnosis}</Value>
                        </Field>
                        <Field>
                            <Label>Diagnosis Date</Label>
                            <Value>{format(this.props.data.diagnosisDate, 'dd mmm yyyy')}</Value>
                        </Field>
                    </Row>
                </Section>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.patient.data,
	};
};

export default connect(mapStateToProps)(PatientDetailComponent);
