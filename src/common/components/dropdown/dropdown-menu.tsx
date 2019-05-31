import * as React from 'react';
import styled from 'styled-components';

interface IDropdownMenuProps {
    children: any;
    isOpened?: boolean;
}

const Container = styled.div`
    position: absolute;
    right: 0;
    background: white;
    display: flex;
    flex-direction: column;

    & > * {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        cursor: pointer;
    }
`;

const DropdownMenu = (props: IDropdownMenuProps) => {
    if (props.isOpened) {
        return <Container>{props.children}</Container>;
    }
    return <React.Fragment></React.Fragment>;
};

export default DropdownMenu;