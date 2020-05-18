import React from 'react';
import AddDirectoryItem  from "./sideBar/AddDirectoryItem";
import  AddNoteItem  from "./sideBar/AddNoteItem";
import DeleteItem from "./sideBar/DeleteItem";

class SideBar extends React.Component {
    render() {
        return (
            <div className="ui list">
                <AddDirectoryItem />
                <AddNoteItem />
                <DeleteItem />
            </div>
        );
    }
}


export default SideBar;