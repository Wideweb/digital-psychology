import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    margin: 3px;
    background-color: blue;
    color: white;
    display: inline-block;
    box-sizing: border-box;
`;

interface ILinkComponentProps {
    to: string,
}

class LinkComponent extends React.Component<ILinkComponentProps, {}> {
    render() {
        return (
            <Container>
                <NavLink to={this.props.to} activeClassName="active-link">{this.props.children}</NavLink>
            </Container>
        );
    }
}


export default LinkComponent;