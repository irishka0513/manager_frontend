import React from 'react';
import { Link } from "react-router-dom";
import EditableLabel from "react-inline-editing";
import _ from 'lodash'

const DirectoryItem = ({directory, handleFocusOut, selectedDirectory, toggleDirectory, opened, openedDirectories}) => {

    const iconClass = () => {
       if(opened) {
           return 'folder open icon'
       } else {
           return 'folder icon'
       }
    };

    const renderItem = (directory) => {
        return <div className="item" key={directory.id} >
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
                    {renderChildren(directory)}
                </div>
            </div>

        </div>
    };

    const renderChildren = (dir) => {
        if(dir.children.length === 0) {
        }  else {
            if(!opened) return;
            return dir.children.map((child) => {
                return <div className="list">
                    <DirectoryItem
                        directory={child}
                        handleFocusOut={handleFocusOut}
                        selectedDirectory={selectedDirectory}
                        toggleDirectory={toggleDirectory}
                        opened={_.includes(openedDirectories, child.id)}
                        openedDirectories={openedDirectories}
                    />
                </div>
            } );
        }
    };

    return renderItem(directory);
};

export default DirectoryItem;