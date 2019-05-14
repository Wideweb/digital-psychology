import * as React from 'react';
import styled from 'styled-components';

interface AsideProps {};

const Container = styled.aside`
    grid-area: aside;
    background-color: #2f343b;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Link = styled.a`
    color: white;
    background-color: #2f343b;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background: #e6604c;
    }
    &.active {
        background: #e6604c;
    }
`;

class AsideComponent extends React.Component<AsideProps, {}> {
    render() {
        return (
            <Container>
                <Link>Home</Link>
                <Link>Patients</Link>
                <Link>Settings</Link>
            </Container>
        )
    }
}

export default AsideComponent;