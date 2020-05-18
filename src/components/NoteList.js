import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Note from './Note';
import update from 'immutability-helper';
const style = {
    width: 400,
};
const Container = ({ handleFocusOut, selectedNote }) => {
    {
        const selectedDirectory = useSelector(state => state.selectedDirectory);
        const allNotes = Object.values(useSelector(state => state.notes));
        const directoryNotes = allNotes.filter((note) => {
            return note.relationships.directory.data.id === selectedDirectory.id
        });
        //_.sortBy(directoryNotes, ['type', 'position']);
        console.log(directoryNotes.length)
        useEffect(() => {
            if(directoryNotes) {
                setNotes(directoryNotes);
            }
        }, [selectedDirectory.id]); // listen only to currentChannelName changes
        const [notes, setNotes] = useState(directoryNotes);
        console.log(notes);

        const moveNote = useCallback(
            (dragIndex, hoverIndex) => {
                const dragNote = notes[dragIndex];
                setNotes(
                    update(notes, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragNote],
                        ],
                    }),
                )
            },
            [notes],
        );
        const renderNote = (note, index) => {
            return (
                <Note
                    selectedNote={selectedNote}
                    key={note.id}
                    index={index}
                    note={note}
                    moveNote={moveNote}
                    handleFocusOut={handleFocusOut}
                    directoryId={selectedDirectory.id}
                />
            )
        };
        return (
            <>
                <div style={style}>{notes.map((note, i) => renderNote(note, i))}</div>
            </>
        )
    }
};
export default Container;
