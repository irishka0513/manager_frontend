import React from 'react';
import { Link } from "react-router-dom";
import EditableLabel from "react-inline-editing";

const DirectoryItem = ({directory, handleFocusOut, selectedDirectory, toggleDirectory, opened}) => {

    const iconClass = () => {
       if(opened) {
           return 'folder open icon'
       } else {
           return 'folder icon'
       }
    };

    return(
        <div className="item" key={directory.id}>
            <Link to={`/directories/${directory.id}`}>
                <i
                    onClick={() => selectedDirectory(directory)}
                    onDoubleClick={() => toggleDirectory(directory.id)}
                    className={iconClass()}
                />
            </Link>
            <EditableLabel
                text={`${directory.attributes.title}`}
                onFocusOut={(text) => handleFocusOut(directory.id, text)}
            />
        </div>
    )
};

export default DirectoryItem;