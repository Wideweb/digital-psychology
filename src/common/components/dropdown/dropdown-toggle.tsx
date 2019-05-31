import * as React from 'react';
import styled from 'styled-components';

interface IDropdownToggleProps {
    children: any;
    onToggle?: any;
    onClose?: any;
}

interface IDropdownToggleState {
    isOpened: boolean;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding-right: 10px;

    &::after {
        content: ' ';
        display: block;
        height: 0px;
        width: 0px;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-top: 5px solid white;
    }
`;

class DropdownToggle extends React.Component<IDropdownToggleProps, IDropdownToggleState> {

    private ref: any;

    constructor(props: IDropdownToggleProps) {
        super(props);

        this.state = { isOpened: false } as IDropdownToggleState;

        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    handleClick(event) {
        if (this.ref && !this.ref.current.contains(event.target)) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <Container ref={this.ref} onClick={(e) => this.props.onToggle(e)}>
                {this.props.children}
            </Container>
        )
    }
}

export default DropdownToggle;