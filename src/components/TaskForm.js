import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TaskForm extends Component {

    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta,init }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues,this.props.id,this.props.task)
    }
    render() {
        return (
        <div onClick={this.props.onDismiss} className="modal">
        <div onClick={e=>e.stopPropagation()}className="modal-inner">
            <form className="ui-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <div>
                    <button className="second-button"  onClick={this.props.onDismiss}>Cancel</button>
                    <button type="submit" className="primary-button">{this.props.type}</button>
                </div>
            </form>
        </div>
        </div>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Please enter title';
    }
    return errors;
}

export default reduxForm({
    form: 'taskForm',
    validate
})(TaskForm);
