import React from 'react';
import BaseItem from "./BaseItem";
import { connect } from 'react-redux';
import { createDirectory } from "../../actions";
import {Link} from "react-router-dom";

class AddDirectoryItem extends BaseItem {

    _onItemClick = () => {
        this.props.createDirectory();
    };

    _iconClass() {
        return 'plus icon';
    }

    _buttonName() {
        return 'Add';
    }

    render() {
        return (
            <div className="item">
                <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                        <Link to={`/directories/new`}>
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

export default connect(null, { createDirectory })(AddDirectoryItem);