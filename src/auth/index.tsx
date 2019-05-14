import * as React from 'react';
import { connect } from 'react-redux';

interface AuthProps { }

class AuthComponent extends React.Component<AuthProps, {}> {

    render() {
        return (
            <div>Auth</div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(AuthComponent);