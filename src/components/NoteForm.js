import React from 'react';
import {Field, reduxForm} from "redux-form";
import { Link } from "react-router-dom";

class NoteForm extends React.Component {

    renderError ({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderTextarea = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} autoComplete="on"/>
                {this.renderError(meta)}
            </div>
        );
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="on"/>
                {this.renderError(meta)}
            </div>
        );
    };
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        console.log(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Name" />
                <Field name="description" component={this.renderTextarea} label="Enter Description" />
                <button className="ui button primary">Create</button>
                <Link to="/" className="ui button">Cancel</Link>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors={};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};
export default reduxForm({
    form: 'noteForm',
    validate: validate
})(NoteForm);