import * as React from 'react';
import styled from 'styled-components';

interface FooterProps {};

const Container = styled.footer`
    grid-area: footer;
    background-color: darkslategray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
`;

class FooterComponent extends React.Component<FooterProps, {}> {
    render() {
        return (
            <Container>
                Copyright © 1995-2019 Alkevich Alexander
            </Container>
        )
    }
}

export default FooterComponent;