import * as React from 'react';
import styled from 'styled-components';
import { Patient } from '../types';

interface IPatientDetailProps {
	data: Patient;
}

const Form = styled.form`
    height: 100%;
	width: 100%;
	margin: 0 0 15px 0;
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

class PatientCallsComponent extends React.Component<IPatientDetailProps> {
	render() {
		return (
			<Form>
                <Section>
                    <SectionTitle>Contanct Info</SectionTitle>
                    <Row>
                        <Field>
                            <Label>Country</Label>
                            <Value>Belarus</Value>
                        </Field>
                        <Field>
                            <Label>Preferred Language</Label>
                            <Value>Russian</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>Address 1</Label>
                            <Value>Timoshenko 12/91</Value>
                        </Field>
                        <Field>
                            <Label>Address 2</Label>
                            <Value>Kupriyanova 7</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>City</Label>
                            <Value>Minsk</Value>
                        </Field>
                        <Field>
                            <Label>ZIP/Postal Code</Label>
                            <Value>220040</Value>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <Label>Email</Label>
                            <Value>alckevich@live.com</Value>
                        </Field>
                    </Row>
                </Section>
                <Section>
                    <SectionTitle>Diagnosis</SectionTitle>
                    <Row>
                        <Field>
                            <Label>Diagnosis</Label>
                            <Value>Depression</Value>
                        </Field>
                        <Field>
                            <Label>Diagnosis Date</Label>
                            <Value>17 May 2019</Value>
                        </Field>
                    </Row>
                </Section>
			</Form>
		);
	}
}

export default PatientCallsComponent;
