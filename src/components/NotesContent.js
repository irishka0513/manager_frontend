import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, selectedDirectory, selectedNote, editNote} from '../actions';
import {DndProvider} from "react-dnd";
import Backend from "react-dnd-html5-backend";
import NoteList from "./NoteList";

class NotesContent extends React.Component {
    constructor(props){
        super(props);

        this.handleFocusOut = this.handleFocusOut.bind(this);
    }


    handleFocusOut(id, text) {
        this.props.editNote(this.props.directory.id, id, text);
    };

    renderList() {
        if (this.props.notes === undefined || this.props.notes.length === 0) {
            return (
                <div> Please choose something </div>
            );
        }
        return (
            <DndProvider backend={Backend}>
                <NoteList selectedNote={this.props.selectedNote} handleFocusOut={this.handleFocusOut}/>
            </DndProvider>
        )

    }
    render() {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log(Object.values(state.notes));
    return {
        notes: Object.values(state.notes).filter((note) => {
            return note.relationships.directory.data.id === state.selectedDirectory.id
        }),
        directory: state.selectedDirectory,
        note: state.selectedNote,
    }
};

export default connect(mapStateToProps, { fetchNotes, selectedDirectory, selectedNote, editNote })(NotesContent);