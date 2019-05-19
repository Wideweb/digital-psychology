import * as React from 'react';
import format from 'dateformat';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries } from 'react-vis';
import { PatientCall } from '../types';

interface IPatientCallProps {
	data: Array<PatientCall>;
}

interface IPatientCallState {
	from: Date;
	to: Date;
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const MapContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 0 15px 0;
`;

const Field = styled.div`
	margin: 0 0 10px 0;
`;

const Label = styled.div`
	font-size: 14px;
	margin: 0 0 5px 0;
`;

const LocationPanel = styled.div`
	height: 100%;
	width: 220px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 0 20px 0 0;
`;

const LocationList = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

const LocationListName = styled.div`
	font-size: 14px;
	font-weight: bold;
	padding-bottom: 10px;
`;

const LocationItem = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0;
`;

const LocationItemTitle = styled.div`
	font-size: 14px;
`;

const LocationItemDate = styled.div`
	font-size: 13px;
	color: grey;
`;

class PatientCallsComponent extends React.Component<IPatientCallProps, IPatientCallState> {
	constructor(props: IPatientCallProps) {
		super(props);

		this.state = {
			from: new Date(2019, 5, 7),
			to: new Date(2019, 5, 18),
		} as IPatientCallState;
	}

	render() {
		return (
			<Container>
				<LocationPanel>
					<Form>
						<Field>
							<Label>From</Label>
							<DatePicker name="from" selected={this.state.from} />
						</Field>
						<Field>
							<Label>To</Label>
							<DatePicker name="to" selected={this.state.to} />
						</Field>
					</Form>
					<LocationListName>Chronology</LocationListName>
					<LocationList>
						<LocationItem>
							<LocationItemTitle>Mother</LocationItemTitle>
							<LocationItemDate>{"18 May 12:30 - 18 May 12:35"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mother</LocationItemTitle>
							<LocationItemDate>{"13 May 15:27 - 13 May 15:29"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Father</LocationItemTitle>
							<LocationItemDate>{"11 May 10:21 - 11 May 10:27"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mother</LocationItemTitle>
							<LocationItemDate>{"11 May 8:30 - 11 May 8:33"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Father</LocationItemTitle>
							<LocationItemDate>{"8 May 19:03 - 8 May 19:07"}</LocationItemDate>
						</LocationItem>
					</LocationList>
				</LocationPanel>
				<MapContainer>
					<FlexibleWidthXYPlot
						height={500}
						xType="ordinal"
						yDomain={[0, 10]}
					>
						<HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
						<VerticalGridLines style={{ stroke: '#B7E9ED' }} />
						<XAxis tickFormat={v => format(+v, 'dd mmm')} style={{
							line: { stroke: '#ADDDE1' },
							ticks: { stroke: '#ADDDE1' },
							text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '13px' }
						}} />
						<YAxis style={{
							text: { fontSize: '13px' },
						}} />
						<VerticalBarSeries
							data={this.props.data.map(item => ({ x: item.date, y: item.num }))}
							style={{ fill: '#4682B4', stroke: 'none' }}
						/>
					</FlexibleWidthXYPlot>
				</MapContainer>
			</Container>
		);
	}
}

export default PatientCallsComponent;
