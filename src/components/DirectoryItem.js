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
        <div className="item" key={directory.id} >
            <div style={{display: "flex", marginTop: "10px"}}>
                <Link to={`/directories/${directory.id}`}>
                    <i
                        onClick={() => selectedDirectory(directory)}
                        onDoubleClick={() => toggleDirectory(directory.id)}
                        className={iconClass()}
                    />
                </Link>
                <div className="content">
                    <div className="header">
                        <EditableLabel
                            text={`${directory.attributes.title}`}
                            onFocusOut={(text) => handleFocusOut(directory.id, text)}
                        />
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="item"  style={{display: "flex"}}>
                    <Link to={`/directories/${directory.id}`}>
                        <i
                            onClick={() => selectedDirectory(directory)}
                            onDoubleClick={() => toggleDirectory(directory.id)}
                            className={iconClass()}
                        />
                    </Link>
                    <div className="content">
                        <div className="header">
                            <EditableLabel
                            text={`${directory.attributes.title}`}
                            onFocusOut={(text) => handleFocusOut(directory.id, text)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DirectoryItem;