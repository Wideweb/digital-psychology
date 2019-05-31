import * as React from 'react';
import styled from 'styled-components';

interface IDropdownProps {
    children: any;
}

interface IDropdownState {
    isOpened: boolean;
}

const Container = styled.div`
    position: relative;
`;

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {

    private ref: any;

    constructor(props: IDropdownProps) {
        super(props);

        this.state = { isOpened: false } as IDropdownState;

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
    }

    toggle() {
        this.setState((state) => ({
            isOpened: !state.isOpened,
        }));
    }

    close() {
        this.setState({
            isOpened: false,
        });
    }

    render() {
        return (
            <Container ref={this.ref}>
                {
                    React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {
                            onToggle: this.toggle,
                            onClose: this.close,
                            isOpened: this.state.isOpened
                        })
                    )
                }
            </Container>
        )
    }
}

export default Dropdown;