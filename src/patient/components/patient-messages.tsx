import * as React from 'react';
import format from 'dateformat';
import { FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries } from 'react-vis';
import { PatientMessage } from '../types';
import styled from 'styled-components';

interface IPatientListProps {
    data: Array<PatientMessage>;
}

const Container = styled.div`
`;

class PatientMessagesComponent extends React.Component<IPatientListProps> {
    render() {
        return (
			<Container>
				<h1>Messages</h1>
				<FlexibleWidthXYPlot
					height={500}
					xType="ordinal" 
				>
					<HorizontalGridLines style={{stroke: '#B7E9ED'}} />
					<VerticalGridLines style={{stroke: '#B7E9ED'}} />
					<XAxis tickFormat={v => format(+v, 'dd mmm')} style={{
						line: {stroke: '#ADDDE1'},
						ticks: {stroke: '#ADDDE1'},
						text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
					}}/>
					<YAxis/>
					<VerticalBarSeries data={this.props.data.map(item => ({ x: item.date, y: item.num }))} />
				</FlexibleWidthXYPlot>
			</Container>
        );
    }
}

export default PatientMessagesComponent;
