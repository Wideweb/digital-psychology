import * as React from 'react';
import DatePicker from "react-datepicker";
import format from 'dateformat';
import styled from 'styled-components';
import { FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';
import { PatientHeartRate } from '../types';

interface IPatientHeartRateProps {
    data: Array<PatientHeartRate>;
}

interface IPatientHeartRateState {
	from: Date;
	to: Date;
}

const Container = styled.div`
`;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	margin: 0 0 20px 0;
`;

const Field = styled.div`
	margin: 0 20px 0 0;
`;

const Label = styled.div`
	margin: 0 5px 0 0;
`;

const ticks = [...Array(12).keys()].reverse().map(x => Date.now() - 60 * 60 * 1000 * x - new Date().getMinutes() * 60 * 1000);

class PatientHeartRateComponent extends React.Component<IPatientHeartRateProps, IPatientHeartRateState> {
	constructor(props: IPatientHeartRateProps) {
        super(props);

		this.state = { 
			from: new Date(Date.now() - 60 * 60 * 1000 * 12),
			to: new Date(),
		 } as IPatientHeartRateState;

		 this.setFrom = this.setFrom.bind(this);
		 this.setTo = this.setTo.bind(this);
	}
	
	setFrom(date) {
		this.setState({ from: date });
	}

	setTo(date) {
		this.setState({ to: date });
	}

    render() {
		console.log(ticks);
        return (
			<Container>
				<Form>
					<Field>
						<Label>From</Label>
						<DatePicker name="from" selected={this.state.from} onChange={this.setFrom}/>
					</Field>
					<Field>
						<Label>To</Label>
						<DatePicker name="to" selected={this.state.to} onChange={this.setTo}/>
					</Field>
				</Form>
				<FlexibleWidthXYPlot 
					height={500}
					xDomain={[this.state.from, this.state.to]}
				>
					<HorizontalGridLines style={{stroke: '#B7E9ED'}} />
					<VerticalGridLines style={{stroke: '#B7E9ED'}} />
					<XAxis 
						tickFormat={v => format(+v, 'H:MM')} 
						tickValues={ticks}
						style={{
							line: {stroke: '#ADDDE1'},
							ticks: {stroke: '#ADDDE1'},
							text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '13px'},
						}}
					/>
					<YAxis style={{
						text: {fontSize: '13px'},
					}}/>
					<LineSeries
						data={this.props.data.map(item => ({ x: item.date, y: item.num }))}
						style={{ fill: 'none', stroke: '#B22222' }}
					/>
				</FlexibleWidthXYPlot>
			</Container>
        );
    }
}

export default PatientHeartRateComponent;
