import * as React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    onOpen: Function;
};

const Container = styled.header`
    grid-area: header;
    background-color: darkcyan;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0 20px;
`;

const MenuLeft = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

const MenuRight = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Link = styled.a`
    line-height: 60px;
    color: white;
    padding: 0 10px;
    cursor: pointer;
    height: 100%;
    box-sizing: border-box;
    &:hover {
        background: #e6604c;
    }
    &.active {
        background: #e6604c;
    }
`;

class HeaderComponent extends React.Component<HeaderProps, {}> {
    _open(to) {
        this.props.onOpen(to);
    }

    render() {
        return (
            <Container>
                <MenuLeft>
                    <li></li>
                </MenuLeft>
                <MenuRight>
                    <Link onClick={() => this._open('/')}>Hi, Dr. Alex</Link>
                </MenuRight>
            </Container>
        )
    }
}

export default HeaderComponent;