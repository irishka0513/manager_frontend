import React from 'react';
import { connect } from 'react-redux';
import { createDirectory } from "../actions";
import DirectoryForm from './DirectoryForm';

class DirectoryCreate extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createDirectory(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Directory</h3>
                <DirectoryForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { accessToken: state.auth.accessToken };
};


export default connect(mapStateToProps, { createDirectory })(DirectoryCreate);