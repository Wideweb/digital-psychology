import * as React from 'react';
import format from 'dateformat';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { PatientLocation } from '../types';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';

interface IPatientGPSProps {
	data: Array<PatientLocation>;
}

interface IPatientGPSState {
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

const mapData = {
	center: [53.904554, 27.561642],
	zoom: 13,
};

const ONE_DAY = 86400000;

const locaitions = [
	{
		title: 'Home',
		coordinates: [53.899414, 27.523096],
		from: new Date(2019, 4, 17, 19, 25),
		to: null,
	},
	{
		title: 'Shop',
		coordinates: [53.908018, 27.527318],
		from: new Date(2019, 4, 17, 18, 40),
		to: new Date(2019, 4, 17, 19, 10),
	},
	{
		title: 'Work',
		coordinates: [53.904278, 27.532528],
		from: new Date(2019, 4, 17, 10, 0),
		to: new Date(2019, 4, 17, 18, 30),
	},
	{
		title: 'Home',
		coordinates: [53.899414, 27.523096],
		from: new Date(2019, 4, 16, 18, 50),
		to: new Date(2019, 4, 17, 9, 40),
	},
	{
		title: 'Work',
		coordinates: [53.904278, 27.532528],
		from: new Date(2019, 4, 16, 10, 0),
		to: new Date(2019, 4, 16, 18, 30),
	},
	{
		title: 'Home',
		coordinates: [53.899414, 27.523096],
		from: new Date(2019, 4, 15, 18, 50),
		to: new Date(2019, 4, 16, 9, 40),
	},
	{
		title: 'Work',
		coordinates: [53.904278, 27.532528],
		from: new Date(2019, 4, 15, 10, 0),
		to: new Date(2019, 4, 15, 18, 30),
	},
	{
		title: 'Home',
		coordinates: [53.899414, 27.523096],
		from: new Date(2019, 4, 14, 19, 25),
		to: new Date(2019, 4, 15, 9, 40),
	},
	{
		title: 'Shop',
		coordinates: [53.908018, 27.527318],
		from: new Date(2019, 4, 14, 18, 40),
		to: new Date(2019, 4, 14, 19, 10),
	},
	{
		title: 'Work',
		coordinates: [53.904278, 27.532528],
		from: new Date(2019, 4, 14, 10, 0),
		to: new Date(2019, 4, 14, 18, 30),
	},
	{
		title: 'Home',
		coordinates: [53.899414, 27.523096],
		from: new Date(2019, 4, 14, 18, 50),
		to: new Date(2019, 4, 13, 9, 40),
	},
];


class PatientGPSComponent extends React.Component<IPatientGPSProps, IPatientGPSState> {
	constructor(props: IPatientGPSProps) {
        super(props);

		this.state = { 
			from: new Date(2019, 5, 13),
			to: new Date(2019, 5, 17),
		 } as IPatientGPSState;

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
		return (
			<Container>
				<LocationPanel>
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
					<LocationListName>Chronology</LocationListName>
					<LocationList>
						{locaitions.map((item, idx) =>
							<LocationItem key={idx}>
								<LocationItemTitle>{item.title}</LocationItemTitle>
								<LocationItemDate>{format(item.from, 'dd mmm HH:MM')}{item.to ? ` - ${ format(item.to, 'dd mmm HH:MM')}` : ''}</LocationItemDate>
							</LocationItem>
						)}
					</LocationList>
				</LocationPanel>
				<MapContainer>
					<YMaps style={{ width: '100%', height: '100%' }}>
						<Map style={{ width: '100%', height: '100%' }} defaultState={mapData}>
							{locaitions.map((point, idx) => 
								<GeoObject
									key={idx}
									geometry={{
										type: 'Point',
										coordinates: point.coordinates,
									}}
									properties={{
										iconContent: point.title,
									}}
									options={{
										// The placemark's icon will stretch to fit its contents.
										preset: 'islands#blackStretchyIcon',
									}}
								/>)
							}
						</Map>
					</YMaps>
				</MapContainer>
			</Container>
		);
	}
}

export default PatientGPSComponent;
