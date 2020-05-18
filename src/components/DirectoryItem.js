import React from 'react';
import { Link } from "react-router-dom";
import EditableLabel from "react-inline-editing";

const DirectoryItem = ({directory, handleFocusOut, selectedDirectory}) => {
            return(
                <div className="item" key={directory.id}>
                    <Link to={`/directories/${directory.id}`}>
                        <i onClick={() => selectedDirectory(directory)} className="folder icon" />
                    </Link>
                    <EditableLabel
                        text={`${directory.attributes.title}`}
                        onFocusOut={(text) => handleFocusOut(directory.id, text)}
                    />
                </div>
            )
};

export default DirectoryItem;