import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Note from './Note';
import update from 'immutability-helper';
const style = {
    width: 400,
};
const Container = ({ handleFocusOut, selectedNote, onChangePosition }) => {
    {
        const selectedDirectory = useSelector(state => state.selectedDirectory);
        const search = useSelector(state => state.search);
        const allNotes = Object.values(useSelector(state => state.notes));
        let directoryNotes = allNotes.filter((note) => {
            let matchSearch = true;
            const directoryNote = note.relationships.directory.data.id === selectedDirectory.id;
            if(search.length > 0) {
                matchSearch = note.attributes.title.toLowerCase().search(search.toLowerCase()) !== -1;
            }
            return directoryNote && matchSearch;
        });
        directoryNotes = _.sortBy(directoryNotes, [(note) => note.attributes.position]);
        useEffect(() => {
            if(directoryNotes) {
                setNotes(directoryNotes);
            }
        }, [selectedDirectory.id, search]);
        const [notes, setNotes] = useState(directoryNotes);

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
                    onChangePosition={onChangePosition}
                    directoryId={selectedDirectory.id}
                    notes={notes}
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
