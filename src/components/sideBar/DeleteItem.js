import React from 'react';
import BaseItem from "./BaseItem";
import { connect } from 'react-redux';
import { deleteDirectory, deleteNote } from '../../actions/index';

class DeleteItem extends BaseItem {
    _onItemClick = () => {
        if (this.props.selectedNote.id !== undefined) {
            this.props.deleteNote();
        } else {
            this.props.deleteDirectory()
        }
    };

    _iconClass() {
        return 'remove icon';
    }
    _buttonName() {
        return 'Delete';
    }

    render() {
        if (this.props.selectedDirectory === undefined) {
            return <div></div>
        }
        return super.render();
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDirectory: state.selectedDirectory,
        selectedNote: state.selectedNote
    };
};

export default connect(mapStateToProps, {deleteDirectory, deleteNote})(DeleteItem);