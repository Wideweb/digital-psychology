import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface AsideProps {};

const Container = styled.aside`
    grid-area: aside;
    background-color: #2f343b;
    display: flex;
    flex-direction: column;
    overflow: auto;

    a {
        color: white;
        background-color: #2f343b;
        text-transform: uppercase;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background: #e6604c;
        }
        &.active {
            background: #e6604c;
        }
    }
`;

class AsideComponent extends React.Component<AsideProps, {}> {

    render() {
        return (
            <Container>
                <NavLink exact to={'/'} activeClassName='active'>Home</NavLink>
                <NavLink to={'/patients'} activeClassName='active'>Patients</NavLink>
                <NavLink to={'/settings'} activeClassName='active'>Settings</NavLink>
            </Container>
        )
	}
}

export default AsideComponent;