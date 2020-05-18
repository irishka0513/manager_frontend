import React from 'react';
import { connect } from 'react-redux';
import DirectoryItem from "./DirectoryItem";
import { selectedDirectory, editDirectory, fetchDirectories, fetchNotes } from "../actions";

class DirectoriesList extends React.Component{
    constructor(props){
        super(props);

        this.handleFocusOut = this.handleFocusOut.bind(this);
    }

    handleFocusOut(id, text) {
        this.props.editDirectory(id, text);
    };

    componentDidMount() {
        this.props.fetchDirectories();
        this.props.fetchNotes();
    }

    renderList(directory, index) {
        if (this.props.directories === undefined || this.props.directories.length === 0) {
            return <div>Loading...</div>
        }
        return (
            <DirectoryItem
                directory={directory}
                index={index}
                handleFocusOut={this.handleFocusOut}
                selectedDirectory={this.props.selectedDirectory}
            />
            )
        // return this.props.directories.map(directory =>{
        //     return(
        //         <div className="item" key={directory.id}>
        //             <Link to={`/directories/${directory.id}`}>
        //                 <i onClick={() => this.props.selectedDirectory(directory)} className="folder icon" />
        //             </Link>
        //                 <EditableLabel
        //                     text={`${directory.attributes.title}`}
        //                     onFocusOut={(text) => this.handleFocusOut(text)}
        //                     />
        //         </div>
        //     )
        // })
    };

    render() {
        return (
            <div>
                <div >{this.props.directories.map((directory, i) => this.renderList(directory, i))}</div>
            </div>
        //{this.renderList()}
        );
    }
}
const mapStateToProps = (state) => {
    return {
        directories: Object.values(state.directories),
        directory: state.selectedDirectory
    }
};

export default connect(mapStateToProps, {fetchDirectories, fetchNotes, selectedDirectory, editDirectory})(DirectoriesList);