import React from 'react';
import {connect} from "react-redux";
import {searchNote} from "../actions";

class SearchBar extends React.Component {
    render() {

        return (
            <div className="ui icon input">
                <form className="ui form">
                    <div className="filed">
                        <label>search</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.props.search}
                            onChange={e => this.props.searchNote(e.target.value)}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { search: state.search }
};

export default connect(mapStateToProps, {searchNote})(SearchBar);

