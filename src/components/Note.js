import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { Link } from "react-router-dom";
import EditableLabel from "react-inline-editing";
const style = {
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};
const Note = ({ note, directoryId, index, moveNote, handleFocusOut, selectedNote }) => {
    const id = note.id;
    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: ItemTypes.NOTE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveNote(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    });
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.NOTE, id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1
    drag(drop(ref));
    return (
                <div ref={ref} style={{...style, display: "inline-flex", opacity}}>
                <div className="item" key={id}>
                   <Link to={`/directories/${directoryId}/notes/${id}`}>
                        <i onClick={() => selectedNote(note)} className="sticky note outline icon" />
                    </Link>
                    <EditableLabel
                        text={`${note.attributes.title}`}
                        onFocusOut={(text) => handleFocusOut(note.id, text)}
                    />
                </div>
                </div>
    )
};
export default Note;
