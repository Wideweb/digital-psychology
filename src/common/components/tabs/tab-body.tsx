import * as React from 'react';
import styled from 'styled-components';

interface ITabBodyProps {
    children: any;
}

const Container = styled.div`
	flex: 1;
	box-sizing: 20px;
	padding: 20px;
	overflow: auto;

	& > * {
		height: 100%;
	}
`;

const TabBody = (props: ITabBodyProps) => (
    <Container>
        {props.children}
    </Container>
);

export default TabBody;