import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends React.Component {
    renderInput({ input }) {
        return (
        <div className="ui icon input">
            <input
                {...input}
                type="text"
                placeholder="Search..."
            />
            <i className="search icon"></i>
        </div>
        );
    }

    onSubmit(formValues) {
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="search" component={this.renderInput}/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'searchBar',
    fields: ['search']
})(SearchBar);