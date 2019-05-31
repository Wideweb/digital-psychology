import * as React from 'react';
import styled from 'styled-components';

interface ITabsProps {
    children: any;
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	background: #2f343b;
	box-sizing: border-box;
    padding: 10px 0 0 0;
    
    a {
        box-sizing: border-box;
        padding: 10px 20px;
        cursor: pointer;
        background: darkcyan;
        margin: 0 5px 0 0;
        color: black;

        &:hover {
            background: #e6604c;
        }

        &.active {
            background: white;
        }
    }
`;

const Tabs = (props: ITabsProps) => (
    <Container>
        {props.children}
    </Container>
);


export default Tabs;