import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import BaseItem from "./BaseItem";
import {Link} from "react-router-dom";

class AddNoteItem extends BaseItem {

    _onItemClick = () => {
        this.props.createNote();
    };

    _iconClass() {
        return 'pencil icon';
    }
    _buttonName() {
        return 'AddNote';
    }

    render() {
        return (
            <div className="item">
                <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                        <Link to={`/directories/${this.props.selectedDirectory.id}/notes/new`}>
                            {this._buttonName()}
                        </Link>
                    </div>
                    <div className="visible content">
                        <i className={this._iconClass()}></i>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return { selectedDirectory: state.selectedDirectory }
};


export default connect(mapStateToProps, {createNote})(AddNoteItem);

