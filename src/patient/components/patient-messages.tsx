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
				<FlexibleWidthXYPlot
					height={500}
					xType="ordinal" 
				>
					<HorizontalGridLines style={{stroke: '#B7E9ED'}} />
					<VerticalGridLines style={{stroke: '#B7E9ED'}} />
					<XAxis tickFormat={v => format(+v, 'dd mmm')} style={{
						line: {stroke: '#ADDDE1'},
						ticks: {stroke: '#ADDDE1'},
						text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600, fontSize: '13px'},
					}}/>
					<YAxis style={{
						text: {fontSize: '13px'},
					}}/>
					<VerticalBarSeries 
						data={this.props.data.map(item => ({ x: item.date, y: item.num }))} 
						style={{ fill: '#4682B4', stroke: 'none' }}
					/>
				</FlexibleWidthXYPlot>
			</Container>
        );
    }
}

export default PatientMessagesComponent;
