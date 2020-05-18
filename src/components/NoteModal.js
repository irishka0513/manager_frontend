import React from 'react';
import NoteForm from "./NoteForm";
import { connect } from 'react-redux';
import BaseModal from './BaseModal'
import { createNote } from "../actions";

class NoteModal extends BaseModal {

    onSubmit = (formValues) => {
        this.props.createNote(this.props.selectedDirectory.id, formValues);
    };

    formComponent = () => {
        return <NoteForm onSubmit={this.onSubmit} />
    };

    headerName = () => {
        return 'CreateNote';
    };
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form,
        selectedDirectory: state.selectedDirectory
    }
};

export default connect(mapStateToProps, {createNote})(NoteModal);