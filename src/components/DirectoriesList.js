import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitForm } from "../actions";

class ItemList extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    <li>UserName {this.props.searchText.values}</li>
                    <li>FullName</li>
                    <li>Images</li>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { searchText: state.form }
};

export default connect(mapStateToProps, { submitForm })(ItemList);