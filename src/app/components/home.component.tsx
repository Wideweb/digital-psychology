import * as React from 'react';
import { connect } from 'react-redux';
import Link from '../../common/components/custom-link.component'

interface HomeProps {
    changePage: Function,
    match: any,
};

class HomeComponent extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{ JSON.stringify(this.props.match) }</p>
                <Link to="/login">Login</Link>
                <Link to="/patients">Patients</Link>
            </div>
        )
    }
}

export default connect(
    null,
    null
)(HomeComponent)