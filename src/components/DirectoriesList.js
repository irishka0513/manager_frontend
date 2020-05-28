import React from 'react';
import { connect } from 'react-redux';
import DirectoryItem from "./DirectoryItem";
import { selectedDirectory, editDirectory, fetchDirectories, fetchNotes, toggleDirectory } from "../actions";
import _ from 'lodash'

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
        if(directory === null) return null;
        return (
            <DirectoryItem
                directory={directory}
                index={index}
                handleFocusOut={this.handleFocusOut}
                selectedDirectory={this.props.selectedDirectory}
                toggleDirectory={this.props.toggleDirectory}
                opened={_.includes(this.props.openedDirectories, directory.id)}
                openedDirectories={this.props.openedDirectories}
            />
        )
    };

    render() {
        return (
            <div className="ui list">
                <div >{this.props.directories.map((directory, i) => this.renderList(directory, i))}</div>
            </div>
        );
    }
}

const directoriesTree = (allDirectories) => {
    if(allDirectories.length === 0) return [];

    allDirectories = allDirectories.map((dir) => { return { ...dir, children: [] }});

    const tree = allDirectories.map((directory) => {
        if(directory.attributes.parent_directory_id) {
            let parentDirectory = allDirectories.find((dir) => dir.id === directory.attributes.parent_directory_id.toString());
            parentDirectory.children.push(directory);
            return null;
        } else {
            return directory;
        }
    });
    console.log(tree);
    return tree;

};

const mapStateToProps = (state) => {
    return {
        directories: directoriesTree(Object.values(state.directories)),
        directory: state.selectedDirectory,
        openedDirectories: state.openedDirectories
    }
};

export default connect(mapStateToProps, {fetchDirectories, fetchNotes, selectedDirectory, editDirectory, toggleDirectory})(DirectoriesList);