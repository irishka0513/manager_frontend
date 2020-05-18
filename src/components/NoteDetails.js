import React from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions';

class NoteDetails extends React.Component {

    componentDidMount() {
        this.props.fetchNote();
    }

    render() {
        if (!this.props.note) {
            return <div>Loading</div>
        }

        const { title, description } = this.props.note.attributes;
        return (
            <div>
                <h2>{title}</h2>
                <br />
                {description}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.notes[ownProps.match.params.id],
        selectedNote: state.selectedNote,
        formValues: state.form
    };
};

export default connect(mapStateToProps, { fetchNote })(NoteDetails);