import * as React from 'react';
import { connect } from 'react-redux';
import format from 'dateformat';
import { FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries } from 'react-vis';
import { PatientMessage } from '../types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

interface IPatienMessagesProps {
	data: Array<PatientMessage>;
}

interface IPatienMessagesState {
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

class PatientMessagesComponent extends React.Component<IPatienMessagesProps, IPatienMessagesState> {
	constructor(props: IPatienMessagesProps) {
		super(props);

		this.state = {
			from: new Date(2019, 5, 7),
			to: new Date(2019, 5, 18),
		} as IPatienMessagesState;
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
							<LocationItemTitle>Mike (Work)</LocationItemTitle>
							<LocationItemDate>{"14 May 19:21"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mike (Work)</LocationItemTitle>
							<LocationItemDate>{"11 May 19:37"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mike (Work)</LocationItemTitle>
							<LocationItemDate>{"8 May 20:45"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mike (Work)</LocationItemTitle>
							<LocationItemDate>{"7 May 19:05"}</LocationItemDate>
						</LocationItem>
						<LocationItem>
							<LocationItemTitle>Mike (Work)</LocationItemTitle>
							<LocationItemDate>{"7 May 19:03"}</LocationItemDate>
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
							text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '13px' },
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

const mapStateToProps = (state) => {
	return {
		data: state.patient.data.messages,
	};
};

export default connect(mapStateToProps)(PatientMessagesComponent);
