import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('auth2', () => {
            this.auth = window.gapi.auth2.init({
                clientId: '401283529257-r0d0g11r33g2n4mi8nrrlg5i7s1lp632.apps.googleusercontent.com',
                scope: 'email'
            })
        });


    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.auth.grantOfflineAccess().then(this.props.signIn);
        } else {
            this.props.signOut()
        }
    };



    onSignInClick = () => {
        this.auth.grantOfflineAccess().then(this.props.signIn);
    };

    onSignOutClick = () => {
        this.props.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }


    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, accessToken: state.auth.accessToken };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
