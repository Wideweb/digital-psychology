import * as React from 'react';
import styled from 'styled-components';

interface FooterProps {};

const Container = styled.footer`
    grid-area: footer;
    background-color: darkslategray;
`;

class FooterComponent extends React.Component<FooterProps, {}> {
    render() {
        return (
            <Container>
            </Container>
        )
    }
}

export default FooterComponent;