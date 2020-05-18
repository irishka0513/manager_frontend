import React from 'react';
import DirectoryForm from './DirectoryForm';
import { connect } from 'react-redux';
import { createDirectory } from "../actions";
import BaseModal from "./BaseModal";


class Modal extends BaseModal {

    onSubmit = (formValues) => {
        this.props.createDirectory(formValues);
    };

    formComponent = () => {
        return <DirectoryForm onSubmit={this.onSubmit} />
    };

    headerName = () => {
        return 'CreateDirectory'
    };
}

const mapStateToProps = (state) => {
    return {formValues: state.form}
};

export default connect(mapStateToProps, {createDirectory})(Modal);