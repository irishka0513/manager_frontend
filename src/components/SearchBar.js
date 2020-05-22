import React from 'react';
import {connect} from "react-redux";
import {searchNote} from "../actions";

class SearchBar extends React.Component {
    render() {

        return (
            <div className="ui icon input">
                <form className="ui form">
                    <div className="filed" style={{width: "100%", marginBottom: "10px"}}>
                        <i className="search icon" style={{position: "absolute", padding: "10px", textAlign: "center", color: "grey" }}></i>
                        <input
                            className="input-field"
                            style={{width: "100%", paddingLeft: "25px", borderRadius: "50px" }}
                            type="text"
                            placeholder="search..."
                            value={this.props.search}
                            onChange={e => this.props.searchNote(e.target.value)}
                        />

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

