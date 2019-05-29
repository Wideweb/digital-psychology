import * as React from 'react';
import { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

import { User } from '../types';

export interface AuthenticatedComponentProps {
    user: User;
    dispatch: Function;
}

export default function requiresAuth(WrappedComponent) {

    class AuthenticatedComponent extends Component<AuthenticatedComponentProps, {}> {
        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { dispatch, user } = this.props;

            //if (!user) {
            //    dispatch(push('/signin'));
            //}
        }

        render() {
            return (
                <div>
                    {!this.props.user 
                        ? <WrappedComponent {...this.props} /> 
                        : <Redirect to={{ pathname: '/login' }}/>}
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        };
    };

    return connect(mapStateToProps)(AuthenticatedComponent);
}