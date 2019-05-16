import * as React from 'react';
import styled from 'styled-components';

interface AsideProps {
	onOpen: Function;
	location: string;
};

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
	text-transform: uppercase;
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
    _open(to) {
        this.props.onOpen(to);
	}
	
	_isActive(path) {
		return path === this.props.location;
	}

    render() {
        return (
            <Container>
				{this._renderLink('/', 'Home')}
				{this._renderLink('/patients', 'Patients')}
				{this._renderLink('/settings', 'Settings')}
            </Container>
        )
	}
	
	_renderLink(path, label) {
		return (
			<Link 
				className={(this._isActive(path) ? 'active' : '')}
				onClick={() => this._open(path)}
			>
				{label}
			</Link>
		);
	}
}

export default AsideComponent;