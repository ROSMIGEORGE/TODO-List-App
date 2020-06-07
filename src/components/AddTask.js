///Component to add and clear task

import React, { useState } from 'react';
import {connect} from 'react-redux';
import TaskForm from './TaskForm';
import {addTask,clearTask} from '../actions';

const AddTask = props => {
    const [showCreate,setShowCreate] = useState(false);

    const onSubmit = formValues => {
        props.addTask(formValues)
        setShowCreate(false);
    }
    return (
        <div className="add-section">
            <div className="add-btn">
                <button className="primary-button" onClick={()=>setShowCreate(true)}>Add Task</button>
            </div>
            {props.isCleared?null:<div onClick={props.clearTask} className="clear-link">Clear done tasks</div>}
            {showCreate?<TaskForm onDismiss={()=>setShowCreate(false)} onSubmit={onSubmit} type="Create"/>:null}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        isCleared: state.isCleared
    }
}
export default connect(mapStateToProps,{addTask,clearTask})(AddTask);