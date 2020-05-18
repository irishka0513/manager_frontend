import React from 'react';
import { connect } from 'react-redux';

class BaseItem extends React.Component {

    _iconClass() {
        return '';
    }
    _buttonName() {
        return '';
    }

    _onItemClick = () => {};

    render() {
        return (
                <div className="item">
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content" onClick={this._onItemClick}>{this._buttonName()}</div>
                        <div className="visible content">
                            <i className={this._iconClass()}></i>
                        </div>
                    </div>
                </div>
        )

    }
}


export default BaseItem;