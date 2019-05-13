import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from './atoms';

interface AuthProps { }

class AuthComponent extends React.Component<AuthProps, {}> {

    render() {
        return (
            <Container>Auth</Container>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(AuthComponent);